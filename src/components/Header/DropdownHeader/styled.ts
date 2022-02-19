import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { ButtonDropdownProps } from "./types";

export const DropdownHeaderContainer = styled.div`
    background: #000000bf;
    width: 100%;
    height: 100vh;
    position: absolute;
    margin: 0;
    right: 0;
    top: 0;
    display: flex;
    justify-content: end;
`

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

export const ButtonDropdown = styled.div<ButtonDropdownProps>`
    border: 0.03rem solid ${variables.grayBorder};
    font-size: 0.9rem;
    padding: 0.45rem 0.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    border-radius: 0.3125rem;
    background-color: ${variables.black};
    position: relative;
    z-index: ${props => props.zIndex && "1"};

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
    border-radius: 0.3125rem;
    right: 0.85rem;

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