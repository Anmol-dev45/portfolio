import React from 'react'
import Container from './Container'
import Contact from './Contact'

const Footer = () => {
  return (
    <section className='py-[59px] xl:py-[92px] bg-dark'>
      <Container variant='primary'>
        <div className="flex flex-wrap items-center">
          <Contact />
           
        </div>
      </Container>
    </section>
  )
}

export default Footer