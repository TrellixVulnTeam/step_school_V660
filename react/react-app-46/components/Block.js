import { Component } from "react";
import Button from "./Button";

export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = { left: '0', top: '0' };
    }

    handleMove = text => {
        const direction = text === 'left' || text === 'right' ? 'left' : 'top';
        const distance = parseFloat(this.state[direction]) +
            (text === 'right' || text === 'bottom' ? 15 : -15);
        this.setState(state => ({ [direction]: `${distance}px` }));
    }

    render() {
        return (
            <div style={this.state}>
                <Button onMove={this.handleMove} text="top"/>
                <div>
                    <Button onMove={this.handleMove} text="left"/>
                    <Button onMove={this.handleMove} text="right"/>
                </div>
                <Button onMove={this.handleMove} text="bottom"/>
            </div>
        )
    }
}