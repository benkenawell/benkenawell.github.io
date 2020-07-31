import React from 'React';


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
const Position = ({title, date, description = [], location}: Partial<IPositionProps>): JSX.Element => {

  // this could probably stand to be broken up more
  return <div>
    <div style={{width: "100%"}}><span>{title}{!!location ? `, ${location}`: ""}</span><span style={{float: "right"}}>{date}</span></div>
    <ul>
      {description.map(val => <li>{val}</li>)}
    </ul>
  </div>;
}

export { Position };