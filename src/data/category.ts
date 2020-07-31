/**
 * This file holds an Object (should be a ts enum)
 * which holds all the kinds of categories I have on my resume
 */

//  const Category = {
//    education: "education",
//    work: "work",
//    volunteer: "volunteer",
//    accomplishments: "accomplishments",
//    programming: "coding"
//  }

 enum Category {
  Education = 'education',
  Work = 'work',
  Volunteer = 'volunteer',
  Accomplishments = 'accomplishments',
  Programming = 'programming'
 }


 export {Category};