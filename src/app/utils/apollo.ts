import { ApolloClient, from, HttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import config from 'app/config'
// import { getJwt } from 'app/utils/auth'

const httpLink = new HttpLink({
  uri: config.gateway.graphqlUrl
})

const authMiddleware = setContext(async (request, previousContext) => {
  const jwt = 'test' // await getJwt()

  return {
    headers: {
      ...(jwt && { authorization: `Bearer ${jwt}` })
    }
  }
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (process.env.NODE_ENV === 'development') {
    if (graphQLErrors) {
      console.log('--------graphQLErrors', graphQLErrors)
    }
    if (networkError) {
      console.log('--------networkError', networkError)
    }
  }
})

const client = new ApolloClient({
  link: from([errorLink, authMiddleware, httpLink]),
  cache: new InMemoryCache({ addTypename: false }), // disable typename field
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network'
    }
  }
})

export default client
