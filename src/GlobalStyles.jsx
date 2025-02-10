import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    :root{
        --primary: #FDFFFC;
        --secondary: #235789;
        --tertiary: #C1292E;
        --text: black;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    html {
        overflow-x: hidden;
        height: 100%;
    }

    body {
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        background: var(--primary);
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .container {
        max-width: 1024px;
        margin: auto;
        padding: 5%;
        padding-top: min(24px, 5%);
    }
    
    *{
        color: var(--text);
        /* -webkit-font-smoothing: antialiased; */
        font-weight: 400;
        letter-spacing: 0.3px;
    }

    h1{
        padding-bottom: 20px;
        color: var(--text);
        font-weight: 500;
        font-size: 80px;
        font-variation-settings: "wght" 450;
        background: transparent;

        @media (max-width: 500px) {
            font-size: 16vw;
        }
    } 
    
    h2{
        color: var(--text);
        font-weight: 500;
        font-size: 48px;
        font-variation-settings: "wght" 450;

        @media (max-width: 500px) {
            font-size: 10vw;
        }
    }

    h3{
        color: var(--text);
        font-weight: 500;
        font-size: 48px;
        font-variation-settings: "wght" 450;
    }

    h4{
        color: var(--text);
        font-weight: 600;
        font-size: 20px;
        font-variation-settings: "wght" 450;
    }

    h5{
        padding-bottom: 2px;
    }

    p{
        overflow-wrap: break-word;
        margin-bottom: 18px;
        line-height: 25px;
    }
`

// OPTIONAL SCRIPT TO MAKE BACKGROUND DIFFERENT COLOR DEPENDING ON SCROLL POSITION
// let isCeiling = false;
// window.addEventListener('wheel', (e) => {
//     const delta = e.deltaY;
//     if (delta < 0 && !isCeiling) {
//         document.documentElement.style.background = '#19376D';
//         isCeiling = true;
//     } else if (delta > 0 && isCeiling) {
//         document.documentElement.style.background = '#576CBC';
//         isCeiling = false;
//     }
// });

export default GlobalStyle