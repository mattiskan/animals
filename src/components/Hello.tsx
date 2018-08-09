import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }

export function Hello(props: HelloProps) {
    console.log(props);
    return <h1>Hello from {props.compiler} and {props.framework}!</h1>

};
