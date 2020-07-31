import {createElement as e } from 'react';
import { Position } from '../components';
import {Category} from '../data/category';
import { assertNever } from '../utilities';
import { IResume, IWork, IEducation, IVolunteer, IAccomplishments, IProgramming } from '../types';

const resumeToComponent = (item: IResume) => {
  switch(item.category) {
    case Category.Education:
      return educationToComponent(item);
    case Category.Work:
      return workToComponent(item);
    case Category.Volunteer:
      return volunteerToComponent(item);
    case Category.Accomplishments:
      return accomplishmentToComponent(item);
    case Category.Programming:
      return programmingToComponent(item);
    default:
      assertNever(item);
  }
}

const workToComponent = ({category, company, startDate, endDate, location, title, description}: IWork): JSX.Element => {
  return e(Position, {
    title: `${title} at ${company}`,
    location,
    date:`${startDate}-${!!endDate ? endDate : "Present"}`,
    description
  });
}

const educationToComponent = ({category, school, location, graduationYear, major, minor}: IEducation): JSX.Element => {
  return e(Position, {
    title: school,
    location,
    date: `Class of ${graduationYear}`,
    description: [`Major: ${major}`, `Minor: ${minor}`]
  })
}

const volunteerToComponent = ({category, organization, startDate, endDate}: IVolunteer): JSX.Element => {
  return e(Position, {
    title: organization,
    location: "",
    date: `${startDate}-${!!endDate ? endDate : "Present"}`,
    
  });
}

const accomplishmentToComponent = ({category, award, date}: IAccomplishments): JSX.Element => {
  return e(Position, {
    title: award,
    date
  });
}

const programmingToComponent = ({category, description}: IProgramming): JSX.Element => {
  return e(Position, {
    description
  });
}

export { resumeToComponent }