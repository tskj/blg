import * as React from 'react';
import * as style from './Article.css';
import '../styles/reset.css';
import { LoadFonts } from '../styles/LoadFonts';

type Props = {
  title: string | React.ReactNode;
  date: string;
  lastModified: string;
  children: React.ReactNode;
};

export const Article = ({ title, date, lastModified, children }: Props) => {
  return (
    <>
      <LoadFonts />
      <div className={style.articleStyle}>
        <h1>{title}</h1>
        <span className={style.byLine}>{date}</span>
        {lastModified !== date && (
          <span className={style.modifiedDate}>
            , last modified {lastModified}
          </span>
        )}
        {children}
      </div>
    </>
  );
};
