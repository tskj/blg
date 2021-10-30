import * as React from 'react';
import * as style from './Article.css';

type Props = {
  children: React.ReactNode;
};

export const Aside = ({ children }: Props) => {
  return (
    <div className={style.aside}>
      <div className={style.justify}>
        <div className={style.flex}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
