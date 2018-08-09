import * as React from "react";

import { MapTile, MapTileProps, MapTileState } from "./MapTile";


export interface GrassState extends MapTileState {
    grassiness: number;
}

export class Grass extends MapTile<MapTileProps, GrassState> {

    constructor(props: MapTileProps) {
	super(props);
	this.state = {grassiness: Math.random()};
    }

    getColor() {
	return 'rgb(' + this.state.grassiness * 255 + ',255,70)';
    }
};
