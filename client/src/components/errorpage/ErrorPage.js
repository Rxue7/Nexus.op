import React from 'react'
import { Background, Main, TopBarContainer, TopBarLogo, Body } from './styles'

const styles = () => {
    return (
        <Main>
            <Background />
            <TopBarContainer>
                <TopBarLogo />
            </TopBarContainer>
            <Body>
                ERROR
            </Body>
        </Main>
    )
}

export default styles