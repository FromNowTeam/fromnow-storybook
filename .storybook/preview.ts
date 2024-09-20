import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { Preview } from '@storybook/react';
import '../global.css';

const queryClient = new QueryClient();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
