import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { VisibilityFilter } from '../features/filters/filtersSlice'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink()
})

interface RootState {
  visibilityFilter: string
}

client.writeData<RootState>({
  data: { visibilityFilter: VisibilityFilter.SHOW_ALL }
})

export default client
