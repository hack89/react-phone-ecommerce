import styled from 'styled-components'



export const ButtonContainer = styled.button `
    text-transform: capitalize;
    font-size: 1.4rem;
    background: transparent;
    border: 1px solid var(--lightBlue);
    border-color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${prop => (prop.cart? "var(--mainYellow)" : "var(--lightBlue)")};
    border-radius: 12px;
    padding: .2rem .5rem;
    color: var(--lightBlue);
    cursor: pointer;
    margin: .2rem .5rem .2rem 0;
    transition: all .5s ease-in-out;
    &:hover {
        background: ${prop => prop.cart? "var(--mainYellow)" : "var(--lightBlue)"};
        color: var(--mainBlue);
    }

    &:focus {
        outline: none;
    }
    

`