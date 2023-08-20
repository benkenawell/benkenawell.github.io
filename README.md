# Welcome to the README!

This is a quick run down of my current and future plans for this site.

---

- site will be completely static once built, it's a requirement for gh-pages anyway
- interactivity will be introduced via [Alpine.js](https://alpinejs.dev/)
- dev server will be [express](https://expressjs.com/) to more quickly build
- templates will be in [ejs](https://ejs.co/), leveraging the power of javascript in embedded templates
- I think I'll store the data in a sqlite database, using [sqlite](https://www.npmjs.com/package/sqlite)
  - can use tagged template literals via [sql-template-tags](https://www.npmjs.com/package/sql-template-strings)

---

### Data Format

The data format I have right now is very specific to each field.  Could I form a more agnostic data format?

- title
  - would be the title of the post, not necessarily my job title.  Although right now I think they would be the same
- category
  - a little bit of metadata to organize.  Might increase this to an actual key-value metdata table, is that a faux paux?
- description
  - description of the activity/job/etc.  Is currently an array for my jobs, might continue to be.
- start
  - start date of the job.  If no start date is given, I can assume an award or single date of some kind.
- end
  - end date of a job.  If no end date is given, it's still on going.
- location
  - simple, location of the job.
- organization (more broad than just company)
  - would encompass organizations for volunteer work, companies for jobs, maybe "brands" so I could list Outdoorly and Remark separately.
