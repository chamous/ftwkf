import React from 'react';
import { render } from 'react-dom'
import EventsPage from '../pages/EventsPage';

import { axe, toHaveNoViolations } from 'jest-axe';
expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage with react', async() => {
    const dummyDiv = document.createElement("div");
    render( < EventsPage / > , dummyDiv)
    const results = await axe(dummyDiv)
    expect(results).toHaveNoViolations()
})