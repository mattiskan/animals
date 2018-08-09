import * as React from "react";

import {Layer, Rect, Stage, Group} from "react-konva";
import * as Konva from "konva";

type MapTileProps = {};
type MapTileState = {x: number, y: number};


export class MapTile extends React.Component<MapTileProps, MapTileState> {
    constructor(...args: any[]) {
	super(args);
	this.state = {x: 10, y: 10}
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
	this.setState({x: this.state.x + 1, y: this.state.y + 1})
    }
    
    render() {
        return (
          <Rect
            x={this.state.x} y={this.state.y} width={100} height={50}
            fill={Konva.Util.getRandomColor()}
            onClick={this.handleClick}
    	  /> 
        );
    }
}
