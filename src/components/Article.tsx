import * as React from 'react';
import { articleStyle } from './Article.css';

type Props = {
  title: string | React.ReactNode;
  children: React.ReactNode;
};

export const Article = ({ title, children }: Props) => {
  return (
    <div className={articleStyle}>
      <h1>{title}</h1>
      {children}
    </div>
  );
};
