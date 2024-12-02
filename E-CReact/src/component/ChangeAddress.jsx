import React from 'react'

const ChangeAddress = () => {
  return (
    <div>
      <input type="text"
      placeholder='Enter new address'
      className='border p-2 w-full md-4'
       />
      <div className='flex justity-end'>
        <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2'>Cancel</button>
        <button className='bg-blue-500 text-whit py-2 px-4 rounded'>Save Address</button>
      </div>
    </div>
  )
}

export default ChangeAddress
