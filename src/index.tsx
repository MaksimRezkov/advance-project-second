import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './app/lib/context/ContextProvider';
import { WithApp } from 'app/WithApp';
import { StoreProvider } from 'store';

render(
  <StoreProvider>
    <BrowserRouter>
      <ContextProvider>
        <WithApp/>
      </ContextProvider>
    </BrowserRouter>
  </StoreProvider>,
  document.querySelector('.root'),
);
