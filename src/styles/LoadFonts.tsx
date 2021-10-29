import * as React from 'react';
import { Helmet } from 'react-helmet';

export const LoadFonts = () => {
  return (
    <Helmet>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link
        rel='preconnect'
        href='https://fonts.gstatic.com'
        crossOrigin='anonymous'
      />
      {/* Catamaran, heading font: */}
      <link
        href='https://fonts.googleapis.com/css2?family=Catamaran:wght@900&display=swap'
        rel='stylesheet'
      />
      {/* Karla, regular and subheading font: */}
      <link
        href='https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,400;0,800;1,200;1,400;1,800&display=swap'
        rel='stylesheet'
      />
    </Helmet>
  );
};
