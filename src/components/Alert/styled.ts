import styled from "styled-components";
import { IAlertSeverityOption, IAlertSeverityOptionStyled, IAlertStyled } from "./types/types.styled";
import * as variables from "assets/styles/variables";

const AlertSeverity = (severity: string): IAlertSeverityOptionStyled => {
	const alertSeverityOption: IAlertSeverityOption = {
		success: {
			backgroundColor: variables.color_green_light,
			color: variables.color_success
		},
		error: {
			backgroundColor: variables.color_red_light,
			color: variables.color_danger
		},
		warning: {
			backgroundColor: variables.color_yellow_light,
			color: variables.color_warning
		},
		info: {
			backgroundColor: variables.color_blue_light,
			color: variables.color_info
		}
	};
	return alertSeverityOption[severity];
};

export const Alert = styled.div<IAlertStyled>`
    width: auto;
    padding: 1rem;
    background-color: ${({ severity }) => AlertSeverity(severity).backgroundColor};
    color: ${({ severity }) => AlertSeverity(severity).color};
    border-radius: 0.5rem;
    border: 0.1rem solid ${({ severity }) => AlertSeverity(severity).color};

    > p, ul {
        color: ${({ severity }) => AlertSeverity(severity).color};
    }

    ul {
        margin-left: 1.5rem;
    }
`;

export const AlertHeader = styled.div<IAlertStyled>`
    display: flex;
    align-itens: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;

    > strong {
        text-transform: capitalize;
        color: ${({ severity }) => AlertSeverity(severity).color};
    }
`;