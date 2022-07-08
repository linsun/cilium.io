import React from 'react';

import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import CalendarIcon from 'icons/calendar.inline.svg';

const items = [
  {
    year: '2022',
    issues: [
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
    ],
  },
  {
    year: '2021',
    issues: [
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
      { title: 'eCHO News #21', date: 'December 10', link: '/' },
    ],
  },
];

const Issues = () => (
  <div className="bg-white py-10 md:py-20 lg:py-28">
    <Container>
      {items.map(({ year, issues }, index) => (
        <div className="mt-10 first:mt-0 md:mt-20 lg:mt-24" key={index}>
          <Heading className="flat-breaks xl:flat-none" tag="h3" size="md" asHTML>
            {year}
          </Heading>
          <div className="mt-8 grid grid-cols-1 gap-6 xs:grid-cols-2 sm:gap-8 md:mt-10 md:grid-cols-3 lg:mt-12 lg:grid-cols-4">
            {issues.map(({ title, date, link }, index) => (
              <Link
                className="min-w-[180px] rounded-lg border-2 border-gray-6 p-4 sm:min-w-[200px] lg:p-6 xl:min-w-[280px]"
                key={index}
                to={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heading tag="h4" size="2xs">
                  {title}
                </Heading>
                <div className="mt-3 flex items-center space-x-2">
                  <CalendarIcon className="h-4 w-4 shrink-0" />
                  <span>{date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </Container>
  </div>
);

export default Issues;
