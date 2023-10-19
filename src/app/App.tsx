import { ApolloProvider } from '@apollo/client'
import ApolloClient from 'app/utils/apollo'
import Router from 'app/Router'

const App = (): any => {
  return (
    <ApolloProvider client={ApolloClient}>
      <Router />
    </ApolloProvider>
  )
}

export default App
