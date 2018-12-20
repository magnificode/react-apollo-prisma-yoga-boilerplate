import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header';
import Meta from './Meta';

const theme = {
  codGray: '#2b2b2b',
  gallery: '#eeeeee',
  maxWidth: '1000px',
}

createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  body {
    font-size: 1.5rem;
    line-height: 2;
    margin: 0;
    padding: 0;
  }

  a {
    color: ${theme.black};
    text-decoration: none;
  }
`;

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.codGray};
`;


const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>
            {this.props.children}
          </Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;