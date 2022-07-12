import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { SocialIcons } from '../Header/HeaderStyles'

const SocialMedias = () => {
    return (
        <>
            <SocialIcons href="https://github.com/edmilsonferreiraf">
                <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkedin.com/in/edmilson-filho">
                <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
                <AiFillInstagram size="3rem" />
            </SocialIcons>
        </>
    )
}

export default SocialMedias