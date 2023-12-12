import { fireEvent, render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import styleClasses from './Sidebar.module.scss';
import { ComponentDecorator } from 'shared/config/tests/decorators/componentDecorator';

describe('Sidebar', () => {
  test('check render', () => {
    ComponentDecorator(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('check toggle', () => {
    ComponentDecorator(<Sidebar/>);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('toggleBtn');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass(styleClasses.appSidebarCollapsed);
  });
});
