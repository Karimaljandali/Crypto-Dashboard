import React from 'react'
import ConvertCurrency from '/utils/ConvertCurrency'

const RowData = ({ name, value, currency = true }) => {
  return (
    <div className="flex justify-between my-2 py-2 border-b-2 border-slate-600">
      <span className="text-gray-300 text-md mr-8">{name}: </span>
      <span>{currency === true ? ConvertCurrency(value) : value }</span>
    </div>
  )
}

export default RowData