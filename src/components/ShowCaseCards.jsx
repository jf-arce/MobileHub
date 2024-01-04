import React from 'react'

export const ShowCaseCards = ({children}) => {
  return (
    <div className='grid grid-cols-8 gap-4 bg-gray-100 p-6 rounded-lg'>
        {children}
    </div>
  )
}
