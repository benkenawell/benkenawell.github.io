import {createElement as e } from 'react';
import { Position } from '../components';
import {Category} from '../data/category';

const resumeToComponent = (item) => {
  switch(item.category) {
    case Category.education:
      return educationToComponent(item);
    case Category.work:
      return workToComponent(item);
    case Category.volunteer:
      return volunteerToComponent(item);
    case Category.accomplishments:
      return accomplishmentToComponent(item);
    case Category.programming:
      return programmingToComponent(item);
  }
}

const workToComponent = ({category, company, startDate, endDate, location, title, description}) => {
  return e(Position, {
    title: `${title} at ${company}`,
    location,
    date:`${startDate}-${!!endDate ? endDate : "Present"}`,
    description
  });
}

const educationToComponent = ({category, school, location, graduationYear, major, minor}) => {
  return e(Position, {
    title: school,
    location,
    date: `Class of ${graduationYear}`,
    description: [`Major: ${major}`, `Minor: ${minor}`]
  })
}

const volunteerToComponent = ({category, organization, startDate, endDate}) => {
  return e(Position, {
    title: organization,
    location: "",
    date: `${startDate}-${!!endDate ? endDate : "Present"}`,

  });
}

const accomplishmentToComponent = ({category, award, date}) => {
  return e(Position, {
    title: award,
    date
  });
}

const programmingToComponent = ({category, description}) => {
  return e(Position, {
    description
  });
}

export { resumeToComponent }