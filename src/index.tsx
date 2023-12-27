import { render } from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './app/lib/context/ContextProvider';

render(
  <BrowserRouter>
    <ContextProvider>
      <App/>
    </ContextProvider>
  </BrowserRouter>,
  document.querySelector('.root'),
);
