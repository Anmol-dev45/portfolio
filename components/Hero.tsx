import Container from './Container'
import Button from './Button'

const Hero = () => (
  <section className='pb-11 pt-14 xl:pt-36 xl:pb-36'>
    <Container variant='primary'>
      <div className="flex flex-col xl:flex-row-reverse gap-x-20 gap-y-[52px] ">
        <div className='flex-1'>
          <img src="/hero.jpg" alt="" className='xl:-mt-14 xl:scale-x-110 xl:h-fullś object-fill' />
        </div>
        <div className='flex-1 text-center xl:text-left'>
          <h1 className=' text-[30px] xl:text-[40px] leading-[100%]'>Crafting Digital Experiences</h1>
          <p className='body-text mt-[12px] mb-10 md:px-16 xl:pr-12 xl:pl-0'>I&apos;m a <span className='text-primary'>frontend developer</span> with a passion for designing seamless user interfaces. Explore my portfolio to witness the fusion of creativity and functionality in every project.</p>
          <div className='flex items-center gap-y-4 gap-1 xl:gap-[17px] max-xl:justify-center flex-wrap'>
            <Button variant='primary'>Work with me</Button>
            <Button variant='secondary'>Download CV</Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
)


export default Hero