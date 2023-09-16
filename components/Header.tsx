"use client"

import { useState } from 'react'
import Container from './Container'
import { HiMenu } from 'react-icons/hi'
const ITEMS = [
  {
    name: "home",
    path: "#"
  },
  {
    name: "about",
    path: "#about"
  },
  {
    name: "services",
    path: "#services"
  },
  {
    name: "blog",
    path: "#"
  }
]




const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <Container variant='primary'>
        <div className='flex justify-between items-center relative'>
          <a href=""><h1 className='font-advent text-[31px] md:text-[54px] text-primary font-medium uppercase'>anmol</h1></a>
          <nav className={`max-md:fixed md:rounded-full z-20 right-0 top-0 max-md:h-screen max-md:pt-16 bg-light  flex max-md:flex-col max-md:w-2/3  ${isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'} transition-all duration-300 ease-in-out`}>
            {ITEMS?.map(item => <a href={item.path} key={item.name} className={`capitalize md:rounded-full text-base text-center block md:text-lg md:px-[42px] py-[15px] hover:text-white ${item.name == "home" ? "bg-primary text-white" : "bg-light text-dark"} transition-colors duration-300`}>{item.name}</a>)}
          </nav>
          <div className='md:hidden z-40 fixed right-0 ' onClick={() => setIsOpen(!isOpen)}>
            <HiMenu size={35} />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header