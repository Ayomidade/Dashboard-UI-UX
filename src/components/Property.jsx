import React from 'react'
import data from './product.json'

const Property = () => {
  let propertyIndex = data.findIndex((props) => props.title === title);
  let currentPost = data[propertyIndex];
  console.log(currentPost);
  return (
    <>
    </>
  )
}

export default Property