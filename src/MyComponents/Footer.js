import React from 'react'

export const Footer = () => {
  // We can add css in this way
  // let footerStyle={
  //   position:'relative',
  //   top:'10vh',
  //   width: '100%',
  // }
  return (
    <footer className='bg-dark text-light py-3'>
     <p className='text-center'>
      Copyrights &copy; My TodosList.com
      </p>
    </footer>
  )
}

