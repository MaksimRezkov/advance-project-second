import { render } from '@testing-library/react';
import { RoutePaths } from 'app/router/RouterConfig';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

export interface IComponentDecoratorProps {
  route?: string
}

export const ComponentDecorator = (component: ReactNode, options: IComponentDecoratorProps = {}) => {
  const {
    route = RoutePaths.main,
  } = options;

  return render(
    <MemoryRouter initialEntries={[route]}>
      {component}
    </MemoryRouter>,
  );
};
