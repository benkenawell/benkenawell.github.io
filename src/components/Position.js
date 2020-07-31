import React from 'React';

/**
 * This will be for each position or subsection.
 * Will probably contain other information
 * example, one degree or one job
 */
const Position = ({title, date, description = [], location}) => {

  // this could probably stand to be broken up more
  return <div>
    <div style={{width: "100%"}}><span>{title}{!!location ? `, ${location}`: ""}</span><span style={{float: "right"}}>{date}</span></div>
    <ul>
      {description.map(val => <li>{val}</li>)}
    </ul>
  </div>;
}

export { Position };