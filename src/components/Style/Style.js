import { Wrapper, StyledNavLink } from './Style.styled.jsx';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function Style() {
    return (
        <>
            <Wrapper>
                <StyledNavLink to="/home" end>
                    Home
                </StyledNavLink>
                <StyledNavLink to="/movies">Movies</StyledNavLink>
            </Wrapper>
            <Suspense fallback={<h1>Download</h1>}>
                <Outlet />
            </Suspense>
        </>
    );
}