import { createElement as e} from 'react';
import { Card, ICardProps, Container, IContainerProps } from '../components';
import {resume, sections} from '../data';
import {resumeToComponent} from '../transformations';
import { ICategory } from '../types';

export default function Home(): JSX.Element {
  return e(Container, { onClick: clickHandler} as IContainerProps, 
    sections.map((cate) =>
    e(Card, 
      {
        title: cate.label
      } as ICardProps, // assertion because I'm having trouble with children
      resume.filter(x => x.category === cate.key).map(resumeToComponent)
    )
  ));

}

const clickHandler = (ev): void => {
  const category: ICategory | undefined = sections.find(({keyCode}) => keyCode === ev.code);
  const title: string | undefined = !!category ? category.label : undefined;
  if(!!title) {
    const elem = ev.currentTarget.getElementById(title);
    if (!!elem) elem.scrollIntoView();
  }
}
