import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TaskList from './TaskList';

const rootElement = document.getElementById('root');

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <TaskList />
    </StrictMode>,
  );
} else {
  throw new Error('Root element not found');
}
