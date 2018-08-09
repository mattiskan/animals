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
	return this.state.grassiness < 0.9? 'green' : 'yellow';
    }
};
