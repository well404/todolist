
import styled, { css } from 'styled-components'

function createChildren() {
    let styles = '';
    for (let i = 0; i < 12; i++) {
        styles += `
                &:nth-child(${i + 1}) {
                    transform: rotate(${i * 30}deg);
                    animation-delay: ${i * 0.0836 - 0.9166}s;
                }
        `

    }

    return css`${styles}`;
}

export const LoadingContainer = styled.main`

    position: fixed;
    z-index: 1000;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #fff;
    opacity: 1;
   
    transition: 1s linear;

    &.out{
        opacity: 0;
        z-index: -1;
    }

    @keyframes ldio-1t7meh982b1 {
        0% { opacity: 1; }
        100% { opacity: 0; }
    }

    .spinner {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;
        background: #ffff;
        
        & > div{
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
            
            & > div{
                box-sizing: content-box; 
                left: 94px;
                top: 48px;
                position: absolute;
                animation: ldio-1t7meh982b1 linear 1s infinite;
                background: #1B1B3A;
                width: 12px;
                height: 24px;
                border-radius: 6px / 12px;
                transform-origin: 6px 52px;

                ${createChildren()}
            }

        }
    }




`
