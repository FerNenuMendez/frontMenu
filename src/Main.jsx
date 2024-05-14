import { createRoot } from 'react-dom/client'; // Importar createRoot desde react-dom/client
import App from './App.jsx';
import './index.css';

const appContainer = document.createElement('div');
appContainer.id = 'root';
document.body.appendChild(appContainer);

createRoot(appContainer).render(
  // <React.StrictMode>
    <App />
  //{/* </React.StrictMode> */}
);
