// import "tailwindcss/tailwind.css";

//  import {
//    useQuery,
//    useMutation,
//    useQueryClient,
//   QueryClient,
//   QueryClientProvider,
//  } from "@tanstack/react-query";
//  import { createContext } from "react";

//  const queryClient = new QueryClient();

// const AppContext = createContext();

// function layout({ Component, pageProps }) {
//   return (
//      <QueryClientProvider client={queryClient}>
//        <AppContext.Provider value={{}}>
//     <RootLayout>
//        <Component {...pageProps} />
//      </RootLayout>
//       </AppContext.Provider>
//      </QueryClientProvider>

//     <section>{children}</section>
//   );
// }

// export default layout;

export default function DashboardLayout({ children }) {
  return <section>{children}</section>;
}
