import { render, screen, fireEvent } from '@testing-library/react';
import Button from '@/components/Button'; 

describe('Button component', () => {
  it('calls handleButtonClick on click', () => {
    const mockClickHandler = jest.fn(); 

    render(<Button text="Click me" handleButtonClick={mockClickHandler} />);

    const buttonElement = screen.getByRole('button', { name: 'Click me' });
    fireEvent.click(buttonElement);

    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
