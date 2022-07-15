import React from "react";
import MyComponent from "./MyComponent";
import MyClassComponent from "./MyClassComponent";

export default function Fcomponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <MyComponent data={{name: 'Custom', value: 38, other: 'Ha ha ha'}}/>
      <MyClassComponent className={'Jodano'}/>
    </div>
  )
}