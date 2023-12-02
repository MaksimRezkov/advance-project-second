import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('app button tests', () => {
  test('with only first param', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with disabled', () => {
    render(<Button disabled={true}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeDisabled();
  });
});
