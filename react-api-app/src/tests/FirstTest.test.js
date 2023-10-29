import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingAPICalls from './TestingAPICalls';
import * as services from './Services';

const mockData = [
  {
    title: 'The Lord of the Rings: The Return of the King',
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [
        {
          title: 'The Lord of the Rings: The Two Towers',
        },
      ];
    });

  render(<TestingAPICalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(
      screen.getByText(/The Lord of the Rings: The Two Towers/i),
    ).toBeInTheDocument();
  });
});

// npm test
