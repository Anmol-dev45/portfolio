import React from 'react'
import Container from './Container'
import Icons from './Icons'

const About = () => {
    return (
        <section className='py-[59px] md:py-[92px] bg-light'>
            <Container variant='secondary'>
                <div className="flex flex-col md:flex-row gap-x-[76px] items-center md:items-start md:h-[480px]">
                    <h2 className='md:hidden section-title text-center mb-6'>About-me</h2>
                    <div className='flex-1 md:h-full'>
                        <img src="/about.jpg" alt="about image" className='h-[420px] md:h-full w-screen md:w-full object-cover' />
                    </div>
                    <div className='flex-1  h-full flex flex-col max-md:items-center justify-between max-md:gap-4   '>
                        <div>
                            <h2 className='section-title max-md:hidden '>About me</h2>
                            <p className='body-text mt-8 max-md:text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia
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