import { Category } from './category';
export const resume = [
  {
    category: Category.education,
    school: "The Pennsylvania State University",
    location: "University Park, PA",
    graduationYear: "2018",
    major: "Computer Engineering",
    minor: "Entrepreneurship and Innovation"
  },
  {
    category: Category.work,
    company: "Microsoft",
    startDate: "2018",
    endDate: undefined,
    location: "Redmond, WA",
    title: "Software Engineer",
    description: [
      "Promote a better employee experience by writing intuitive and accessible internal web applications for enterprise by leveraging Typescript and React/Redux while maintaining team and organization coding standards"
      , "Create a better customer experience on the Sharepoint platform"
      , "Collaborate with other teams across products to deliver well-written, thoughtful improvements to SERP and employees' experience"
      , "Write, refactor, and modernize legacy C# applications to better connect disparate enterprise experiences"
      , "Facilitate strategic decisions to determine the highest priority work for the next sprint/quarter/year"
    ]
  },
  {
    category: Category.work,
    company: "Microsoft",
    title: "Software Development Intern",
    startDate: "2017",
    endDate: "2017",
    location: "Redmond, WA",
    description: [
      "Develop IT productivity tools and data driven graphics for highly visual internal telemetry (d3.js)"
      ,"Learn and teach team dynamics in a business programming environment"
    ]
  },
  {
    category: Category.work,
    company: "Penn State Residence Life",
    title: "Resident Assistant",
    startDate: "2016",
    endDate: "2017",
    location: "University Park, PA",
    description: [
      "Assist students in their transition from grade school at home to life in a residence hall at a university"
      , "Create a sense of community in a residence hall floor so it may be a place everyone has a voice and feels welcome"
    ]
  },
  {
    category: Category.work,
    company: "Army Research Lab",
    title: "Software Development Intern",
    startDate: "2015",
    endDate: "2016",
    location: "Adelphi, MD",
    description: [
      "Develop a GUI for a UWB radar system in Python with heavy Linux networking"
      , "Develop and implement a network for a cognitive radar system"
    ]
  },
  {
    category: Category.work,
    company: "Penn State ITS Lab Consultants",
    title: "Lab Consultant, Lab Consultant Supervisor",
    startDate: "2014",
    endDate: "2018",
    location: "University Park, PA",
    description: [
       "Assist students and faculty troubleshoot computer lab equipment"
      , "Maintain professionalism and improve community among the staff"
      , "Keep up-to-date inventory for labs across campus"
    ]
  },
  {
    category: Category.volunteer,
    organization: "King County Emergency Search and Rescue (KCESAR)",
    startDate: "2019",
    endDate: undefined,
  },
  {
    category: Category.volunteer,
    organization: "Technology Education and Literacy in Schools (TEALS)",
    startDate: "2019",
    endDate: "2020"
  },
  {
    category: Category.accomplishments,
    award: "Eagle Scout",
    date: "Class of 2013",
  },
  {
    category: Category.accomplishments,
    award: "SAFe 4.6 Certified",
    date: "2020"
  },
  {
    category: Category.programming,
    description: [
      "Use Professtionally: Typescript, React, Redux, RxJS, C#",
      "On my own time: Rust, Elixir, F#, RamdaJS, PureScript"
    ]
  }
];
