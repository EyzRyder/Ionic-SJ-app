import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { queryClient } from './context/queryClient';
import { QueryClientProvider } from 'react-query';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);