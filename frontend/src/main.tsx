import { StrictMode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  uri: "http://localhost:5173/api/",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
