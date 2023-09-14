import Container from './Container'
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
  return (
    <header>
      <Container variant='primary'>
        <div className='flex justify-between items-center'>
          <a href=""><h1 className='font-advent text-[54px] text-primary font-medium uppercase'>anmol</h1></a>
          <nav className='flex'>
            {ITEMS?.map(item => <a href={item.path} key={item.name} className={`capitalize text-base md:text-lg px-[42px] py-[15px] hover:bg-primary ${item.name == "home" ? "bg-primary text-white" : "bg-light text-dark"} transition-colors duration-300`}>{item.name}</a>)}
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header