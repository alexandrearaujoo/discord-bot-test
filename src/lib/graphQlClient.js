const { ApolloClient, HttpLink, InMemoryCache } = require("@apollo/client/core");
const fetch = require("node-fetch");

const graphQlClient = new ApolloClient({
  link: new HttpLink({
    uri: "https://lizvrgxyxanjqyltiyyy.supabase.co/graphql/v1",
    fetch,
    headers: {
      apiKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxpenZyZ3h5eGFuanF5bHRpeXl5Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY2Njk4MzcxOCwiZXhwIjoxOTgyNTU5NzE4fQ.iKEBWN7ZFU0wZN2q9CDD1LxnRLQ6OxvUehz3wg2ZnAs",
    },
  }),
  cache: new InMemoryCache(),
});

module.exports = { graphQlClient };
