import React from 'react'
import Container from './Container'
import Icons from './Icons'

const About = () => {
    return (
        <section className='py-[59px] xl:py-[92px] bg-light'>
            <Container variant='secondary'>
                <div className="flex flex-col xl:flex-row gap-x-[76px] items-center xl:items-start xl:h-[470px]">
                    <h2 className='xl:hidden section-title text-center mb-6'>About-me</h2>
                    <div className='flex-1 xl:h-full'>
                        <img src="/about.jpg" alt="about image" className='h-[410px]  md:h-[520px] xl:h-full w-screen xl:w-full object-cover' />
                    </div>
                    <div className='flex-1  h-full flex flex-col md:items-start max-xl:items-center justify-between max-xl:gap-4   '>
                        <div>
                            <h2 className='section-title md:text-[40px] max-xl:hidden '>About me</h2>
                            <p className='body-text mt-8 xl:mt-4 text-center md:text-justify xl:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
                                <br />
                                <br />
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                <br />
                                <br />
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <Icons />

                    </div>
                </div>
            </Container>
        </section>
    )
}

export default About