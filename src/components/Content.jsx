import React from 'react'

const Content = ({title,content}) => {
  return (
  <div className="content">
    <h3><strong>{title}</strong></h3>
    <p>{content}</p>
  </div>
 )
 }

export default Content