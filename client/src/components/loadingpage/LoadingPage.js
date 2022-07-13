import React from 'react'
import { Body, DotContainer, DotOne, Main, Spinner, DotTwo, DotThree } from './styles'

const LoadingPage = () => {
    return (
        <Main>
            <Body>
                <Spinner />
                <DotContainer>
                    <DotOne />
                    <DotTwo />
                    <DotThree />
                </DotContainer>
            </Body>
        </Main>
    )
}


export default LoadingPage