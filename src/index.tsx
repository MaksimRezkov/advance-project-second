import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './app/lib/context/ContextProvider';
import { WithApp } from 'app/WithApp';
import { StoreProvider } from 'store';

render(
  <BrowserRouter>
    <StoreProvider>
      <ContextProvider>
        <WithApp/>
      </ContextProvider>
    </StoreProvider>
  </BrowserRouter>,
  document.querySelector('.root'),
);
