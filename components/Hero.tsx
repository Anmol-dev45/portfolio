import Container from './Container'
import Button from './Button'

const Hero = () => (
  <section className='pb-11 pt-14 lg:pt-36 lg:pb-36'>
    <Container variant='primary'>
      <div className="flex flex-col lg:flex-row-reverse gap-x-[80px] gap-y-[52px] ">
        <div className='flex-1'>
          <img src="/hero.jpg" alt="" className='lg:-mt-14 lg:scale-x-110' />
        </div>
        <div className='flex-1 text-center lg:text-left'>
          <h1 className=' text-[30px] lg:text-[40px] leading-[100%]'>Web Wizardry: Crafting Digital Dreams</h1>
          <p className='body-text mt-[12px] mb-10'>Unleash the magic of captivating user experiences with our frontend expertise. We transform your visions into stunning, interactive digital realities that leave a lasting spell on your audience</p>
          <div className='flex items-center  gap-1 lg:gap-[17px] max-lg:justify-center max-vsm:flex-col'>
            <Button variant='primary'>Work with me</Button>
            <Button variant='secondary'>Download CV</Button>
          </div>
        </div>
      </div>
    </Container>
  </section>
)


export default Hero