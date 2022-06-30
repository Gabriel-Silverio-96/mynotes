import styled from "styled-components";
import * as variables from "assets/styles/variables";
import { MainProps } from "./types";

export const Main = styled.main<MainProps>`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 80vh;
    position: relative;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-color: transparent; // ${props => props.theme.colors.backgroundPrimary}

    h1 {
        color: ${props => props.theme.colors.textColorTitle};
        font-size: 7rem;
		font-family: "mynotes";
		line-height: 7rem;

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