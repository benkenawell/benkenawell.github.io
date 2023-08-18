import React, { useState } from 'react';
import cardStyles from './card.module.scss';


interface ICardProps {
  title: string;
  children: React.ReactNode;
}

/**
 * This will be for each top level section.
 * Example of a card: Professional Experience, Education
 */
const Card: React.FunctionComponent<ICardProps> = ({children, title}) => {

  const [isExpanded, toggleExpanded, expandLabel]: [boolean, (() => void), string] = useLabelledToggle(true, 'collapse', 'expand');

  return <div id={title} className={cardStyles.card} >
    <div className={cardStyles.title}>
      <h2>{title}</h2>
      <button aria-label={`${expandLabel} ${title} section`} onClick={toggleExpanded}>{expandLabel}</button>
    </div>
    {isExpanded && children} 
  </div>;
}


const useLabelledToggle = (startVal: boolean, trueLabel: string, falseLabel: string): [boolean, () => void, string] => {
  const [toggle, setToggle] = useState<boolean>(startVal);

  return [toggle, () => setToggle(!toggle), toggle ? trueLabel : falseLabel];
}

export { Card, ICardProps };