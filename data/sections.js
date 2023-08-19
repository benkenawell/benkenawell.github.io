import {Category} from './category';
import { ICategory } from '../types';

/**
 * @type ICategory[]
 */
 const sections = [
   {
     label: "Education",
     key: Category.Education,
     keyCode: 'KeyE'
   },
   {
     label: "Professional Experience",
     key: Category.Work,
     keyCode: 'KeyP'
   },
   {
     label: "Volunteer Activities",
     key: Category.Volunteer,
     keyCode: 'KeyV'
   },
   {
     label: "Additional Accomplishments and Awards",
     key: Category.Accomplishments,
     keyCode: 'KeyA'
   },
   {
     label: "Familiar Programming Languages, Frameworks, and Technologies",
     key: Category.Programming,
     keyCode: 'KeyC'
   }
];

export { sections };
