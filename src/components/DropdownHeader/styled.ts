import styled from "styled-components";
import * as variables from "assets/styles/variables";

export const DropdownHeaderWrapper = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
    z-index: 1;
    
    &.dropdown {
        & > div {            
            .arrow-chevron {
                transition: .3s;
                transform: rotate(0deg);
            }
        }
    }

    &.active-dropdown {
        & > div {            
            .arrow-chevron {
                transition: .3s;
                transform: rotate(180deg);
            }
        }
    }   
`

export const ButtonDropdown = styled.div`
    border: 0.03rem solid ${variables.white};
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 2rem;
    background-color: ${variables.black};
    position: relative;

    span {
        color: ${variables.white};            
    } 
`

export const Dropdown = styled.div`
    position: absolute;
    top: 5rem;
    padding: 2rem;
    background-color: ${variables.black};   
    color: ${variables.white};   
    border: 0.03rem solid ${variables.white};
    border-radius: 0.5rem;

    ul {
        list-style: none;
        text-align: right;

        li {
            margin-bottom: 1rem;
            a {
                color: ${variables.white};            
            }

            &:last-child {
                margin-bottom: 0rem;
                color: ${variables.red};
            }
        }
    }
`