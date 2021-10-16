import { Component } from "react";
import s from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} type="button" className={s.button}>
        Load more
      </button>
    );
  }
}

export default Button;
