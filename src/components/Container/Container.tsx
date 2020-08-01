import React from 'react';
import containerStyles from './container.module.scss';


interface IContainerProps {
  children: React.ReactNode;
  onKeyDown?: (ev: React.KeyboardEvent<HTMLDivElement>) => void;
}

/**
 * main container for whole website
 * @param props 
 */
const Container = (props: IContainerProps): JSX.Element => {
  return <div onKeyDown={(ev) => {!!props.onKeyDown ? props.onKeyDown(ev) : () => {}}}>
    <h1 role="banner">Benjamin Kenawell</h1>
    {props.children}
    <div className={containerStyles.footer} role="contentinfo">Created with React, Gatsby, and Typescript</div>
  </div>
}

export { Container, IContainerProps };