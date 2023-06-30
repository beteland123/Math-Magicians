import { render, screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import Calculator from '../components/Calculator';

describe('Check Calculator page ', () => {
  test('renders the calculator component with the data when navigating to /calculator', () => {
    render(
      <MemoryRouter initialEntries={['/Calculator']}>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText('Lets do some math')).toBeInTheDocument();
  });
  test(' it should match the snapshoot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/Calculator']}>
        <Routes>
          <Route path="/Calculator" element={<Calculator />} />
        </Routes>
      </MemoryRouter>,
    );
    expect(container).toMatchSnapshot();
  });
});
