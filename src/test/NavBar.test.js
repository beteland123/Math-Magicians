import { render } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('test navabar', () => {
  test('it should match the snapshoot', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/Navbar']}>
        <Routes>
          <Route path="/Navbar" element={<Navbar />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
