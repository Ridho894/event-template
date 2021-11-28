import { InMemoryCache, ApolloClient, HttpLink, from } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: `https://dev-eventsuq8vp.microgen.id/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("bda-token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache,
  link: from([authLink, link]),
});

export default client;