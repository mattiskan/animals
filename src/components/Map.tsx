import * as React from "react";

import {Layer, Rect, Stage, Group} from "react-konva";
import * as Konva from "konva";

import { Grass } from "./Grass";
import { Water } from "./Water";


export class Map extends React.Component<{}, {}> {

    statics = {
	width: 1200,
	height: 1000,
	mapRadiusInTiles: 50,
	tileWidth: 10,
    }

    render() {

	var tiles = [];
	for(var r=-this.statics.mapRadiusInTiles; r <= this.statics.mapRadiusInTiles; r++)
	    for(var q=-this.statics.mapRadiusInTiles; q <= this.statics.mapRadiusInTiles; q++)
		if(Math.abs(r + q) <= this.statics.mapRadiusInTiles)

		    if(Math.random() * Math.abs(r + q)  * Math.abs(r - q) < this.statics.mapRadiusInTiles * 10)
    			tiles.push(
                            <Grass
                            key={[r,q].join(',')}
                            r={r}
                            q={q}
                            width={this.statics.tileWidth}
                            center_x={this.statics.width / 2}
                            center_y={this.statics.height / 2}
                            />
    		        )
	             else
    			tiles.push(
                            <Water
                            key={[r,q].join(',')}
                            r={r}
                            q={q}
                            width={this.statics.tileWidth}
                            center_x={this.statics.width / 2}
                            center_y={this.statics.height / 2}
                            />
    		        )
	return (
	  <Stage width={this.statics.width} height={this.statics.height}>
		<Layer >{tiles}</Layer>
	  </Stage>
        );
    }
}
