import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { MainProps } from "./types";

export const Main = styled.main<MainProps>`
    background-image: url(${props => props.src});
`;

export const MainWrapper = styled.div`
	text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: transparent;
	margin-bottom: 2rem;

    h1 {
        color: ${props => props.theme.colors.textColorTitle};
        font-size: 7rem;
		font-family: "mynotes";
		line-height: 7rem;
		font-weight: 100;

		span {
			background:
				linear-gradient(
						to right,
						${variables.primaryColor} 20%,
						${variables.orange} 40%,
						${variables.orange} 60%,
						${variables.primaryColor} 80%
					);
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			background-size: 200% auto;
			background-clip: text;
			animation: shine 3s linear infinite;

			@keyframes shine {
				to {
      				background-position: 200% center;
				}
			}
		}
    }

    p {
        margin-top: 2rem;
        color: ${props => props.theme.colors.textColorParagraph};
    }

    div {
        margin-top: 2rem;

        button {
            background-color: ${variables.primaryColor};
            border: 0;
        }
    }

	@media(max-width: 600px) {
		h1 {
			font-size: 4rem;
    		line-height: inherit;
		}

		p {
			margin-top: 1rem;
		}

		div {
			margin-top: 1rem;
		}
  	}
`;

export const CardContainer = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 2rem;
`;

export const CardHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-bottom: 2rem;
`;

export const Card = styled.div`
	padding: 2rem;
	border-radius: 0.5rem;
	max-width: 22rem;
	min-height: 10rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: ${props => props.theme.colors.backgroundPrimary};
	border: 0.01rem solid ${variables.grayMedium2};
`;

export const CardContent = styled.div`
	h2 {
		color: ${props => props.theme.colors.textColorTitle};
	}

	p {
		color: ${props => props.theme.colors.textColorParagraph};
	}
`;

export const Quotes = styled.div`
	margin: 10rem 0;
	padding: 5rem 1rem;
	border-radius: 0.5rem;
	text-align: center;
	background-color: ${variables.primaryColor};
	color: ${variables.white};
`;

export const Footer = styled.footer`
	border: 0.01rem solid ${variables.grayMedium2};
	border-right: 0;
	border-left: 0;
	border-bottom: 0;
	padding: 5rem 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;