import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

//TODO build out pages based on features we want to implement

import Home from "./pages/Home";
import Signup from "./pages/CreateUser";
import Login from "./pages/Login";
import Header from "./components/Header";
import LoggedHeader from "./components/LoggedHeader";
import Footer from "./components/Footer";
import AddPark from "./pages/addPark";
import Dashboard from "./pages/Dashboard";
import ParksPage from "./pages/ParksPage";
// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return (
      <ApolloProvider client={httpLink}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/createUser" component={Signup} />
              <Route exact path="/addPark" component={AddPark} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/parks" component={ParksPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={httpLink}>
        <Router>
          <LoggedHeader />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/createUser" component={Signup} />
            <Route exact path="/addPark" component={AddPark} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
