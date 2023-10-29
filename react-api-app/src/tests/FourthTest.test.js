import { render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import TestingAPICallsImgpath from './TestingAPICallsAvatarImgpath';
import * as services from './ServicesAvatar';

const mockData = [
  {
    poster_path: 'kyeqWdyUXW608qlYkRqosgbbJyK.jpg',
  },
  {
    poster_path: 'gmnD2e1RvMdCl9D1rsDEQaQlJxK.jpg.jpg',
  },
];

test('Fetch Data API called', async () => {
  const mockFetchData = jest
    .spyOn(services, 'FetchData')
    .mockImplementation(async () => {
      return [
        {
          poster_path: 't6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        },
      ];
    });

  render(<TestingAPICallsImgpath />);
  expect(mockFetchData).toHaveBeenCalled();
  await waitFor(() => {
    expect(
      screen.getByText(/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg/i),
    ).toBeInTheDocument();
  });
});

// npm test
