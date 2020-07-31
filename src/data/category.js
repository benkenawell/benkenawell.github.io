/**
 * This file holds an Object (should be a ts enum)
 * which holds all the kinds of categories I have on my resume
 */

 const Category = {
   education: "education",
   work: "work",
   volunteer: "volunteer",
   accomplishments: "accomplishments",
   programming: "coding"
 }


 const sections = [
   {
     label: "Education",
     key: Category.education
   },
   {
     label: "Professional Experience",
     key: Category.work
   },
   {
     label: "Volunteer Activities",
     key: Category.volunteer
   },
   {
     label: "Additional Accomplishments and Awards",
     key: Category.accomplishments
   },
   {
     label: "Familiar Programming Languages, Frameworks, and Technologies",
     key: Category.programming
   }
 ];

 export {sections, Category};