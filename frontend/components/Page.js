import Header from "./Header";
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2');
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    html {
        --red: #ff1234;
        --black: #393939;
        --gray: #3a3a3a;
        --light-Gray: #e1e1e1;
        --green: #1DB954;
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.99);
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'radnika_next', 'Open Sans', 'Helvetica Neue', sans-seriff;
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }

    a { 
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        text-decoration: underline;
    }
`

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 2rem;
`

export default function Page({ children }) {
    return (
        <div>
            <GlobalStyles />
            <Header />
            <InnerStyles>{children}</InnerStyles>
        </div>
    );
}

Page.propTypes = {
    children: PropTypes.any,
};