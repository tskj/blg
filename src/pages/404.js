import * as React from 'react';
import { Link } from 'gatsby';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Ikkje funne</title>
      <Link to='/'>Dra heim</Link>.
    </main>
  );
};

export default NotFoundPage;
