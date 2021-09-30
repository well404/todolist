import styled from 'styled-components'

export const TodoContainer = styled.main`

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme: { colors } }) => colors.background};

    .todo{
        width: 100%;
        max-width: 500px;

        background-color: ${({ theme: { colors } }) => colors.backgroundTodo};
        padding: 40px 20px;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);

        button{
                background-color: ${({ theme: { colors } }) => colors.primary};
            }
        form{
            display: flex;
            align-items:center;
            gap: 5px;
            margin-bottom: 50px;
            padding: 0 9px;

            input{
                width: 100%;
                height: 40px;
                padding: 0 8px;
                border-radius: 4px;
                border: 1px solid #bebbbb;
                background-color: ${({ theme: { colors } }) => colors.backgroundTodo};
                outline: none;

                &::placeholder{
                    opacity: 1;
                }
            }


        }

        ul{
            margin-bottom: 30px;
        }
    }
`

export const TaskContainer = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    transition: all .2s linear;

    &.completed{
        background: #cacaca;
        text-decoration: line-through;
        opacity: .5;
    }

    span{
        svg{
            color: ${({ theme: { colors } }) => colors.primary};
        }
    }

    .remove{
        display: block;
        margin-left: auto;
        margin-right: 9px;
        cursor: pointer;
        color: ${({ theme: { colors } }) => colors.primary};

        &:hover{
            filter: brightness(.8)
        }
    }
    
`