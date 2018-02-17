import React from 'react'
import FilterLink from '../containers/FilterLink'


const Footer = ({total, totalunmarket}) => (
  <div style={{borderColor:'black' }}>
  <p style={{fontSize:'10px', display:'flex', justifyContent:'space-between'}}>
    <span>
    items left  {total}  
    </span>
    <span>
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
    </span>
    
    <span>
    {totalunmarket} clear completed
      </span >
  </p>
  </div>
)

export default Footer
