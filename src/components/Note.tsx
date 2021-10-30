import * as React from 'react';
import * as style from './Article.css';

type Props = {
  children: React.ReactNode;
};

export const Note = ({ children }: Props) => {
  return (
    <div className={style.note}>
      <div className={style.justify}>
        <div className={style.flex}>
          <div className={style.paddingRight}>💡</div> <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
