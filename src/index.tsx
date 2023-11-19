import { render } from 'react-dom';
import { App } from './app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './app/lib/context/ContextProvider';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <App/>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.querySelector('.root'),
);
