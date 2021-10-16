import { Component } from "react";
import ContentLoader from "../Loader/Loader";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Button from "../Button/Button";
import pictureSearchAPI from "../services/pictureSearchAPI";
import s from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    status: "idle",
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ status: "pending", images: [] });

      pictureSearchAPI(this.props.query, 1)
        .then((images) => {
          this.setState({
            images: images.data.hits,
            status: "resolved",
            page: prevState.page + 1,
          });
        })
        .catch((error) =>
          this.setState({
            error: "Can not find any photos for your request",
            status: "rejected",
          })
        );
    }
  }

  onBtnClick = () => {
    pictureSearchAPI(this.props.query, this.state.page).then((images) => {
      console.log(images.data.hits);

      this.setState((prevState) => {
        return {
          images: [...prevState.images, ...images.data.hits],
          status: "resolved",
          page: prevState.page + 1,
        };
      });
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    });
  };

  render() {
    const { images, error, status } = this.state;

    if (status === "idle") {
      return <div className={s.error}>Type some request word</div>;
    }

    if (status === "pending") {
      return <ContentLoader />;
    }

    if (status === "rejected") {
      return <div className={s.error}>{error}</div>;
    }

    if (status === "resolved") {
      return (
        <>
          <ul className={s.imageGallery}>
            <ImageGalleryItem images={images} />
          </ul>
          <Button onClick={this.onBtnClick} />
        </>
      );
    }
  }
}

export default ImageGallery;
