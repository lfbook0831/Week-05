import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
 
describe('Home', () => {
  it('renders a heading', () => {
    const mockProps = { allData: [] };
    render(<Home {...mockProps} />);
    const heading = screen.getByRole('heading', {
      name: /List of Names/i,
    });
    expect(heading).toBeInTheDocument();
  });
   it('renders correct number of list items', () => {
    const mockProps = {
      allData: [
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
        { id: '3', name: 'Doe' },
      ],
    };
    render(<Home {...mockProps} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockProps.allData.length);
  });
   it('renders list items with correct names', () => {
    const mockProps = {
      allData: [
        { id: '1', name: 'John' },
        { id: '2', name: 'Jane' },
        { id: '3', name: 'Doe' },
      ],
    };
    render(<Home {...mockProps} />);
    mockProps.allData.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});