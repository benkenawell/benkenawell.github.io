import { Category } from '../data/category';

type IResume = IEducation | IWork | IVolunteer | IAccomplishments | IProgramming;

interface IEducation {
  category: Category.Education;
  school: string;
  location: string;
  graduationYear: string;
  major: string;
  minor: string;
}

interface IWork {
  category: Category.Work;
  company: string;
  startDate: string;
  endDate: string;
  location: string;
  title: string;
  description: string[];
}

interface IVolunteer {
  category: Category.Volunteer;
  organization: string;
  startDate: string;
  endDate: string;
}

interface IAccomplishments {
  category: Category.Accomplishments;
  award: string;
  date: string;
}

interface IProgramming {
  category: Category.Programming;
  description: string[];
}

export {IResume, IEducation, IWork, IAccomplishments, IVolunteer, IProgramming};