import "tailwindcss/tailwind.css";

import RootLayout from "../app/layout.js";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createContext } from "react";

const queryClient = new QueryClient();

const AppContext = createContext();

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{}}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </AppContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
