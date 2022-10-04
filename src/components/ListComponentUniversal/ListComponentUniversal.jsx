import React from 'react'


const ListComponentUniversal = ({rows, columns}) => {
  return (
    
 <table>
  rows={rows}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  checkboxSelection
  </table>
  )
}

export default ListComponentUniversal