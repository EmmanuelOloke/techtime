import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import HighQualitySection from '../HighQualitySection';

describe('HighQualitySection', () => {
  it('renders a paragraph with specific text', () => {
    const { getByText } = render(<HighQualitySection />);
    expect(getByText('High quality video, audio & live classes')).toBeInTheDocument();
  });
});
