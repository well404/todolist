import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,body, button,input{
        font-family: 'Poppins', sans-serif;
    }

    ol,ul{
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`