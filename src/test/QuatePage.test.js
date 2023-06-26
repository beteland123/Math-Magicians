import { render, screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import Quate from '../components/Quot';

describe('Check Quote page ', () => {
  test('renders the Quate component with data', async () => {
    const mockData = [
      {
        quote: 'Test quote',
        author: 'Test author',
      },
    ];

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    render(
      <MemoryRouter initialEntries={['/Quote']}>
        <Routes>
          <Route path="/Quote" element={<Quate />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('loading ...')).toBeInTheDocument();

    const quoteElement = await screen.findByText(/Test quote/);
    const authorElement = await screen.findByText(/Test author/);

    expect(quoteElement).toBeInTheDocument();
    expect(authorElement).toBeInTheDocument();

    global.fetch.mockRestore();
  });
});
