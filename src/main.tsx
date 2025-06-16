import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from "./components/App.tsx";
// styles
import './styles/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
  </StrictMode>,
)
