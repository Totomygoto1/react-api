import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingAPICallsId from './TestingAPICallsId';
import * as services from './Services';

const mockData = [
  {
    id: 120,
  },
  {
    id: 121,
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [
        {
          id: 122,
        },
      ];
    });

  render(<TestingAPICallsId />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(screen.getByText(/122/i)).toBeInTheDocument();
  });
});

// npm test
