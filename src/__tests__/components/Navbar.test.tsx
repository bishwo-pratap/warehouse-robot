import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '@/components/NavBar';

describe('Testing NavBar Component', () => {
  test('it should have a header present', () => {
    const { getByText } = render(<NavBar />);
    expect(getByText('Warehouse Robot')).toBeInTheDocument();
  })
})
