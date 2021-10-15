import axios from "axios";
import { Component } from "react";

class ImageGallery extends Component {
  state = {
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    axios.defaults.baseURL = "https://pixabay.com/api/";
    const key = "23875883-62ec2e0d3177fc3e314277236";
    const parameters = `?key=${key}&q=${this.props.query}&per_page=12&page${this.state.page}`;

    if (prevProps.query !== this.props.query) {
      axios.get(parameters).then((data) => console.log(data));
    }
  }
  render() {
    return (
      <ul className="ImageGallery">
        <li className="ImageGalleryItem">
          <img src="" alt="" className="ImageGalleryItem-image" />
        </li>
      </ul>
    );
  }
}

export default ImageGallery;
