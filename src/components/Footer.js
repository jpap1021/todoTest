import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = (todos) => (
  <div style={{borderColor:'black' }}>
  <p style={{fontSize:'10px'}}>
    <span style={{padding:'20px'}}>
    items left
    </span>
    <FilterLink  filter="SHOW_ALL" >
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <span style={{padding:'20px'}}>
      clear completed
      </span >
  </p>
  </div>
)

export default Footer
