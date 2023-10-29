import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingAPICallsAvatarVideo from './TestingAPICallsAvatarVideo';
import * as services from './ServicesAvatarVideo';

const mockData = [
  {
    key: 'lWOPVDyZRxY',
  },
  {
    key: 'FVq8GX6DqTE',
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [
        {
          key: '5PSNL1qE6VY',
        },
      ];
    });

  render(<TestingAPICallsAvatarVideo />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/5PSNL1qE6VY/i)).toBeInTheDocument();
  });
});

// npm test
