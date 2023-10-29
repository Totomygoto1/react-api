import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingAPICalls from './TestingAPICallsAvatar';
import * as services from './ServicesAvatar';

const mockData = [
  {
    title: 'Avatar',
  },
  {
    title: 'Avatar: The way of water',
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [
        {
          title: 'Avatar: The way of water',
        },
      ];
    });

  render(<TestingAPICalls />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/Avatar: The way of water/i)).toBeInTheDocument();
  });
});

// npm test
