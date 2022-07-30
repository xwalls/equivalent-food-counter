
import React from 'react'
import Table from './Table';

export const Summary = ({ title, subtitle, name }) => {
  return (
      <>
        <h1>{ title }</h1>
        <Table/>
      </>
  )
}

Summary.defaultProps = {
    title: 'Resumen de Equivalencias',
}