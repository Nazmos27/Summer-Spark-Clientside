import React from 'react'

const useTooken = () => {
  const token = localStorage.getItem('access-token')
    return token
}

export default useTooken