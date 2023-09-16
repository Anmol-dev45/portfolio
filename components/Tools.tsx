import React from 'react'
import Container from './Container'
import SkillsCard from './SkillsCard'

import { SiNextdotjs } from "react-icons/si"
import { BiLogoReact, BiLogoHtml5, BiLogoCss3, BiLogoFigma, BiLogoTailwindCss } from "react-icons/bi"

const Tools = () => {
    return (
        <section className='py-[59px] xl:py-[92px]'>
            <Container variant='secondary'>
                <div className="flex flex-col items-center gap-12">
                    <div className='text-center'>

                    <h2 className='section-title'>Tools</h2>
                    <p className='body-text md:mt-3'>I have been working with these tools for my creation.</p>
                    </div>
                    <div className='flex  flex-wrap gap-3 justify-center'>
                        <SkillsCard><BiLogoHtml5 /></SkillsCard>
                        <SkillsCard><BiLogoCss3 /></SkillsCard>
                        <SkillsCard><BiLogoFigma /></SkillsCard>
                        <SkillsCard><BiLogoReact /></SkillsCard>
                        <SkillsCard><SiNextdotjs /></SkillsCard>
                        <SkillsCard><BiLogoTailwindCss /></SkillsCard>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Tools