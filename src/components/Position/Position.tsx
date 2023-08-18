import React from 'React';
import positionStyles from './position.module.scss';

interface IPositionProps {
  title: string;
  date: string;
  description: string[];
  location: string;
}

/**
 * This will be for each position or subsection.
 * Will probably contain other information
 * example, one degree or one job
 */
const Position: React.FunctionComponent<Partial<IPositionProps>> = ({title, date, description = [], location}) => {

  // this could probably stand to be broken up more
  return <div className={positionStyles.positionContainer}>
    <div className={positionStyles.position}>
      <span>{title}{!!location ? `, ${location}`: ""}</span>
      <span style={{float: "right"}}>{date}</span>
    </div>
    <ul>
      {description.map(val => <li>{val}</li>)}
    </ul>
  </div>;
}

export { Position };