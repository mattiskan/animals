import * as React from "react";

import {RegularPolygon} from "react-konva";
import * as Konva from "konva";

type MapTileProps = {q: number, r: number, width: number, center_x: number, center_y: number};
type MapTileState = {color: string};


export class MapTile extends React.Component<MapTileProps, MapTileState> {
    constructor(props: MapTileProps) {
	super(props);
	this.state = {color: Konva.Util.getRandomColor()}
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
	this.setState({color: Konva.Util.getRandomColor()})
    }

    render() {
        return (
          <RegularPolygon
            x={this.props.center_x + this.props.width * Math.sqrt(3)/2 * (this.props.r/2 + this.props.q)}
	    y={this.props.center_y + this.props.width * 3/4 * this.props.r}
	    sides={6}
	    radius={this.props.width / 2}
            fill={this.state.color}
            onClick={this.handleClick}
    	  /> 
        );
    }
}
