import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ContextProvider } from './app/lib/context/ContextProvider';
import { WithApp } from 'app/WithApp';

render(
  <BrowserRouter>
    <ContextProvider>
      <WithApp/>
    </ContextProvider>
  </BrowserRouter>,
  document.querySelector('.root'),
);
