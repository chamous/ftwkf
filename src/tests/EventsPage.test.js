import React from 'react';
import { render } from 'react-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import EventsPage from '../pages/EventsPage';

expect.extend(toHaveNoViolations);

it('should demonstrate this matcher`s usage with react', async () => {
  const dummyDiv = document.createElement('div');
  render(<EventsPage />, dummyDiv);
  const results = await axe(dummyDiv);
  expect(results).toHaveNoViolations();
});
