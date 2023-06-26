import { render, screen } from '@testing-library/react';
import {
  MemoryRouter, Routes, Route,
} from 'react-router-dom';
import Home from '../components/Homepage';
describe('Check  home page ', () => {
    test('renders the Home component with the data when navigating to /', () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>,
      );
  
      expect(screen.getByText('Welcome to our page!')).toBeInTheDocument();
    });
    test('it should match the snapshoot', () => {
    const {container}=  render(
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </MemoryRouter>,
      );
  
     expect(container).toMatchSnapshot();
    });
    
});