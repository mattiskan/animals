import * as React from "react";

import {Layer, Rect, Stage, Group} from "react-konva";
import * as Konva from "konva";

import { MapTile } from "./MapTile";


export class Map extends React.Component<{}, {}> {
    render() {
        return (
	  <Stage width={700} height={700}>
	    <Layer>
		<MapTile/>
		<MapTile/>
	    </Layer>
	  </Stage>
        );
    }
}
