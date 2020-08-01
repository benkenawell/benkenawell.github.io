import React from 'react';


interface IContainerProps {
  children: React.ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

/**
 * main container for whole website
 * @param props 
 */
const Container = (props: IContainerProps): JSX.Element => {
  return <div onClick={(ev) => {!!props.onClick ? props.onClick(ev) : () => {}}}>
    {props.children}
    <div>Created with React, Gatsby, and Typescript</div>
  </div>
}

export { Container, IContainerProps };