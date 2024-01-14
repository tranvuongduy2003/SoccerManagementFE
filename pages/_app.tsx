import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/interfaces';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Poppins } from 'next/font/google';

import '@/styles/globals.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AuthProvider from '@/contexts/AuthProvider';

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
});

const theme = extendTheme({
  fonts: {
    body: poppins.style.fontFamily
  },
  colors: {
    clifford: '#da373d',
    'body-color': '#071952',
    'btn-color': '#75C2F6'
  }
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Layout>
          <QueryClientProvider client={client}>
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </QueryClientProvider>
        </Layout>
      </AuthProvider>
    </ChakraProvider>
  );
}
