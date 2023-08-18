interface ICategory {
  /** the label or title used for the Card */
  label: string;
  /** the key associated with this category.  use the enum! */
  key: string;
  /** the keyboard code associated with this category. */
  keyCode: string;
}

import { Category } from '../data';

type IResume = IEducation | IWork | IVolunteer | IAccomplishments | IProgramming;

interface IEducation {
  /** the education category, any IResume with the education category can be identified this way */
  category: Category.Education;
  /** the school I went to */
  school: string;
  /** the location of the school */
  location: string;
  /** the year I graduated from the school */
  graduationYear: string;
  /** major at that school */
  major: string;
  /** minor at that school */
  minor: string;
}

interface IWork {
  /** Identify IResume subtype of IWork */
  category: Category.Work;
  /** the company I worked for */
  company: string;
  /** the date I started working for that company */
  startDate: string;
  /** the date I finished working for that company.
   * undefined if I am still working for that company
   */
  endDate: string | undefined;
  /** the location of the company */
  location: string;
  /** my job title at that company */
  title: string;
  /** description of this job */
  description: string[];
}

interface IVolunteer {
  /** identify IResume subtype as IVolunteer */
  category: Category.Volunteer;
  /** the organization I'm volunteering for */
  organization: string;
  /** the date/year I started volunteering */
  startDate: string;
  /** the date/year I ended volunteering.  undefined if I still am volunteering there */
  endDate: string | undefined;
}

interface IAccomplishments {
  /** Identify IResume subtype as IAccomplishments */
  category: Category.Accomplishments;
  /** award I've received */
  award: string;
  /** date I achieved award */
  date: string;
}

/**
 * I see this interface changing the most, I feel like
 * I could do so much more with displaying what I know of
 * programming languages, maybe demos?
 */
interface IProgramming {
  /** Identify the IResume subtype as IProgramming */
  category: Category.Programming;
  /** used for list of languages */
  description: string[];
}

export {IResume, IEducation, IWork, IAccomplishments, IVolunteer, IProgramming};
