import React from 'react';
import { createAnchor } from '../utilities';

/**
 * This will be for each top level section.
 * Example of a card: Professional Experience, Education
 * @param {{title: string}} props
 */
const Card = ({children, title}) => {
  return <div id={title} style={{border: "solid", paddingLeft: "10px", paddingRight: "10px", margin: "10px"}}>
   <a name={`${createAnchor(title)}`}><h2>{title}</h2></a>
   {children} 
  </div>;
}

export { Card };