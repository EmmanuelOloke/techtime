import React from 'react';
import { render } from '@testing-library/react';
import BrowseCourses from '../BrowseCourses';
import '@testing-library/jest-dom';
import HighQualitySection from '../HighQualitySection';

describe('BrowseCourses', () => {
  it('renders a paragraph with matching text', () => {
    const { getByText } = render(<BrowseCourses />);
    expect(getByText('browse our popular courses')).toBeInTheDocument();
  });
});
