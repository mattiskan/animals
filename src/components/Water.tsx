import * as React from "react";

import { MapTile, MapTileProps, MapTileState } from "./MapTile";


export class Water extends MapTile<MapTileProps, MapTileState> {

    getColor() {
	return 'blue';
    }
};
