import React from "react";
import { Card } from '../components';
import {resume} from '../data/data';
import { sections, Category } from "../data/category";
import {resumeToComponent} from '../transformations';

export default function Home() {
  return <>
    {sections.map((cate) => {
      return <Card title={cate.label}>
        {resume.filter(x => x.category === cate.key).map(resumeToComponent)}
      </Card>
    })}
  </>;
}

const clickHandler = (ev) => {
  console.log(ev.code);
  switch (ev.code) {
    case 'KeyP':
      document.getElementById('Professional Experience').scrollIntoView();
      break;
    case 'KeyE':
      document.getElementById('Education').scrollIntoView();
      break;
    case 'KeyV':
      document.getElementById('Volunteer Activities').scrollIntoView();
      break;
  }
}
document.onkeydown = clickHandler;