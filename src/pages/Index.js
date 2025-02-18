import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import IndexSectionHeaders1 from '../components/headers/IndexSectionHeaders1';
import IndexSectionLogoClouds6 from '../components/logo-clouds/IndexSectionLogoClouds6';
import IndexSectionNewsletter5 from '../components/newsletter/IndexSectionNewsletter5';
import IndexSectionFooters4 from '../components/footers/IndexSectionFooters4';

const meta = {
  title: 'PT\u0020Hobimu\u0020Jadi\u0020Cuan',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  useEffect(() => {
    // Custom CSS classes for elements from the index.html
    const rootElement = document.getElementById('root');
    const classes = rootElement.classList;
    rootElement.classList.remove(...classes);
    rootElement.classList.add(...'bg-black'.split(' '));
  });

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <IndexSectionHeaders1 />
      <IndexSectionLogoClouds6 />
      <IndexSectionNewsletter5 />
      <IndexSectionFooters4 />
    </React.Fragment>
  );
}

