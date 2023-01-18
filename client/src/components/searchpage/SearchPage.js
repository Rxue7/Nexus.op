import { Header, Main, Search, SubBody, SearchBox, SearchIcon, SearchButton, TopBarContainer, TopBarLogo, BackgroundImage } from './styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const SearchPage = () => {

    const [name, setName] = useState();
    const navigate = useNavigate();

    const handleOnChange = (e) => {
        e.preventDefault();
        const value = e.target.value;
        setName(value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/StatsPage/${name} `)
    };

    return (
        <>
            <BackgroundImage />
            <TopBarContainer>
                <TopBarLogo />
            </TopBarContainer>
            <Main>
                <Header />
            </Main>
            <SubBody>
                <Search onSubmit={handleSubmit}>
                    <SearchBox type="text" placeholder='Search for Summoner' onChange={handleOnChange}></SearchBox>
                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </Search>
            </SubBody>
        </>
    )
}

export default SearchPage