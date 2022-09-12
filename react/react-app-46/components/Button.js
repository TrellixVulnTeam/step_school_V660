import { Component } from "react";

export default class Button extends Component {

    handelClick = () => this.props.onMove(this.props.text);

    render() {
        return (
            <button onClick={this.handelClick}>
                {this.props.text}
            </button>
        )
    }
}
