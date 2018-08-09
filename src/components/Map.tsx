import * as React from "react";

import {Layer, Rect, Stage, Group} from "react-konva";
import * as Konva from "konva";

import { MapTile } from "./MapTile";



export class Map extends React.Component<{}, {}> {
    render() {
        return (
	  <Stage width={1200} height={1000}>
	    <Layer>
	    	<MapTile q={0} r={0}/>
	    	<MapTile q={0} r={1}/>
		<MapTile q={1} r={0}/>
		<MapTile q={1} r={1}/>
		<MapTile q={2} r={0}/>
		<MapTile q={2} r={1}/>
	    </Layer>
	  </Stage>
        );
    }
}
