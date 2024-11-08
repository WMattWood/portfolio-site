import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* https://colorhunt.co/palette/13005a00337c1c82ad03c988 */
    /* https://colorhunt.co/palette/08d9d6252a34ff2e63eaeaea */
    /* https://colorhunt.co/palette/222831393e4600adb5eeeeee */
    /* https://colorhunt.co/palette/0c134f1d267d5c469cd4adfc */

    :root{

        /*v2*/
        --primary: #345995;
        --secondary: #091132;
        --tertiary: #B0C8A7;
        --emphasis: #a92b2b;
        --text: #dfeed9;
        --links: #ffffff;

        /*v1        
        --dark: #1B5A57;
        --bright: #FFFFFF;
        --text: rgba(255, 255, 255, 0.7);
        --highlight-bright: #67f5dd;
        --highlight-dark: #576CBC;
        --paragraph-box: #204c6d;
        */
        /* --dark: #193D67; */
        /* --dark: #0B2447; */
        /* --dark: #1C1056; */
        /* --bright: #F5F5F5; */
        /* --text: #A5D7E8; */
        /* --text: #F3F7FC; */
        /* --text: #576CBC; */
        /* --text: #99ACC4; */
        /* --bright: #E1E4E8; */
        /* --highlight-dark: #142c3c; */
        /* --highlight-dark: #193D67; */
        /* --highlight-dark: #19376D; */
        /* --paragraph-box: #698F3F; */
        /* overflow-x: hidden; */
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
    html{
        overflow-x: hidden;
        height: 100%;
        /* scroll-behavior: smooth; */
    }
    body {
        overflow-x: hidden;
        /* scroll-behavior: smooth; */
        font-family: 'Montserrat', sans-serif;
        background: var(--secondary);
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
        /* @media (max-width: 895px) {
            max-width: 500px;
        } */
    }


    
    *{
        color: var(--text);
        /* -webkit-font-smoothing: antialiased; */
        font-weight: 400;
        letter-spacing: 0.3px;
        /* margin-left: 0.4em; */
    }

    h1{
        padding-bottom: 20px;
        color: var(--text);
        font-weight: 500;
        font-size: 80px;
        font-variation-settings: "wght" 450;
        background: transparent;
        /* -webkit-font-smoothing: antialiased; */

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
        /* color: var(--text);
        font-weight: 600;
        font-size: 20px;
        font-variation-settings: "wght" 450;
        border-bottom: 3px solid black; */
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