"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React, { createContext, useContext, ReactNode } from "react";

const QueryClientContext = createContext<QueryClient | undefined>(undefined);

export const useQueryClient = () => {
  const context = useContext(QueryClientContext);
  if (context === undefined) {
    throw new Error("useQueryClient must be used within a QueryClientProvider");
  }
  return context;
};

export const QueryClientProviderWrapper: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientContext.Provider value={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </QueryClientContext.Provider>
  );
};
