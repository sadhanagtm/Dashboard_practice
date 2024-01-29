import React from 'react'
import { useParams } from 'react-router-dom'

function Singleproduct() {
    const {slug}=useParams();
  return (
    <div>
ded|{slug}
    </div>
  )
}

export default Singleproduct