import { Component } from "react";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";

class App extends Component {
  state = {
    query: "",
  };

  handleFormSubmit = (query) => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <ToastContainer autoClose={3500} />
        <Searchbar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery query={this.state.query} />
      </div>
    );
  }
}

export default App;
