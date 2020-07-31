import React from 'react';


interface ICardProps {
  title: string;
  children: React.ReactNode;
}

/**
 * This will be for each top level section.
 * Example of a card: Professional Experience, Education
 * @param {{title: string}} props
 */
const Card: React.FunctionComponent<ICardProps> = ({children, title}: ICardProps): JSX.Element => {
  return <div id={title} style={style}>
   <h2>{title}</h2>
   {children} 
  </div>;
}

const style: React.CSSProperties = {
  border: "solid",
  paddingLeft: "10px",
  paddingRight: "10px",
  margin: "10px",
  background: "lightblue",
  boxShadow: "5px 5px"
}

export { Card, ICardProps };