import React from 'react';
import type { Preview } from '@storybook/react';
import ModalManager from '../libs/fromnow/src/components/Modal/ModalManager';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import '../global.css';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: true,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 15,
    },
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <QueryClientProvider client={client}>
        <ModalManager>
          <Story />
        </ModalManager>
      </QueryClientProvider>
    )
  ]
};

export default preview;
