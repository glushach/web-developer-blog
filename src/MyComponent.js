import React from "react";

export default function MyComponent ({data}) {
  const {name, value, other} = data;
  return (
    <>
      <p>My custom html</p>
      <p>Name: {name}</p>
      <span>Age: {value}</span>
      <span>Text: {other}</span>
    </>
  )
}