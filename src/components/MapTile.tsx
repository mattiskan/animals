import * as React from "react";

import {RegularPolygon} from "react-konva";

export interface MapTileProps {
    q: number;
    r: number;
    width: number;
    center_x: number;
    center_y: number;
};
export interface MapTileState {};


export abstract class MapTile<P extends MapTileProps, S extends MapTileState> extends React.Component<P, S> {

    abstract getColor() : string;

    render() {
        return (
          <RegularPolygon
            x={this.props.center_x + this.props.width * Math.sqrt(3)/2 * (this.props.r/2 + this.props.q)}
	    y={this.props.center_y + this.props.width * 3/4 * this.props.r}
	    sides={6}
	    radius={this.props.width / 2}
            fill={this.getColor()}
    	  /> 
        );
    }
}
