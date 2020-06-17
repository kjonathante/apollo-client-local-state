import React from 'react'
import FilterLink from './FilterLink'
import { VisibilityFilter } from './filtersSlice'

const Footer = () => (
  <div>
    <FilterLink filter={VisibilityFilter.SHOW_ALL}>{VisibilityFilter.SHOW_ALL}</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>{VisibilityFilter.SHOW_ACTIVE}</FilterLink>
    <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>{VisibilityFilter.SHOW_COMPLETED}</FilterLink>
  </div>
)

export default Footer
