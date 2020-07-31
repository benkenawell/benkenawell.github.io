import { createElement as e, Fragment} from 'react';
import { Card, ICardProps } from '../components';
import {resume} from '../data/data';
import { sections } from "../data/sections";
import {resumeToComponent} from '../transformations';
import { ICategory } from '../types';

export default function Home(): JSX.Element {
  return e(Fragment, {}, 
    sections.map((cate) =>
      e(Card, 
        {
          title: cate.label
        } as ICardProps, // assertion because I'm having trouble with children
        resume.filter(x => x.category === cate.key).map(resumeToComponent)
      )
    )
  );
}

const clickHandler = (ev) => {
  const category: ICategory | undefined = sections.find(({keyCode}) => keyCode === ev.code);
  const title: string | undefined = !!category ? category.label : undefined;
  if(!!title) document.getElementById(title).scrollIntoView();
  // switch (ev.code) {
  //   case 'KeyP':
  //     document.getElementById('Professional Experience').scrollIntoView();
  //     break;
  //   case 'KeyE':
  //     document.getElementById('Education').scrollIntoView();
  //     break;
  //   case 'KeyV':
  //     document.getElementById('Volunteer Activities').scrollIntoView();
  //     break;
  //   case 'KeyA':
  //     document.getElementById('Additional Accomplishments and Awards').scrollIntoView();
  //   case 'KeyC':
  //     document.getElementById('Familiar Programming Languages, Frameworks, and Technologies').scrollIntoView();
  // }
}
document.onkeydown = clickHandler;