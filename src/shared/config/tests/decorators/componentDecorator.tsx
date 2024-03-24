import { DeepPartial } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { RoutePaths } from 'app/router/RouterConfig';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from 'store';
import { IStateSchema } from 'store/types/StateSchema';

export interface IComponentDecoratorProps {
  route?: string;
  initialState?: DeepPartial<IStateSchema>;
}

export const ComponentDecorator = (component: ReactNode, options: IComponentDecoratorProps = {}) => {
  const {
    route = RoutePaths.main,
    initialState,
  } = options;

  return render(
    <StoreProvider initialState={initialState as IStateSchema}>
      <MemoryRouter initialEntries={[route]}>
        {component}
      </MemoryRouter>
    </StoreProvider>,
  );
};
