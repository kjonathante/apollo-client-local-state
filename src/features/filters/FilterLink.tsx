import React from 'react'
import gql from 'graphql-tag'

import Link from './Link'
import { useQuery } from '@apollo/react-hooks'

interface Props {
  filter: string
}

const GET_VISIBILITY_FILTER = gql`
  {
    visibilityFilter @client
  }
`

const FilterLink: React.FC<Props> = ({ children, filter }) => {
  const { data, client } = useQuery(GET_VISIBILITY_FILTER)
  return (
    <Link
      isDisabled={data.visibilityFilter === filter}
      onClick={() => client.writeData({ data: { visibilityFilter: filter } })}
    >
      {children}
    </Link>
  )
}
export default FilterLink
