import * as React from "react";

import {RegularPolygon} from "react-konva";
import * as Konva from "konva";

type MapTileProps = {q: number, r: number};
type MapTileState = {q: number, r: number};

const Center = {x: 600, y: 500};

const TILE_WIDTH = 100;

export class MapTile extends React.Component<MapTileProps, MapTileState> {
    constructor(props: MapTileProps) {
	super(props);
	this.state = props;	
	this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
	this.setState({q: this.state.q + 1, r: this.state.r - 1})
    }

    render() {
        return (
          <RegularPolygon
            x={Center.x + TILE_WIDTH * Math.sqrt(3)/2 * (this.state.r/2 + this.state.q)}
	    y={Center.y + TILE_WIDTH * 3/4 * this.state.r}
	    sides={6}
	    radius={TILE_WIDTH / 2}
            fill={Konva.Util.getRandomColor()}
//	    stroke='black'
//	    strokeWidth={1}
            onClick={this.handleClick}
    	  /> 
        );
    }
}
