import { TAlertSeverity } from "./types.component";

export interface IAlertStyled {
    severity: TAlertSeverity;
}

export interface IAlertSeverityOptionStyled {
    backgroundColor: string;
    color: string;
}

export interface IAlertSeverityOption {
    error: IAlertSeverityOptionStyled;
    warning: IAlertSeverityOptionStyled;
    info: IAlertSeverityOptionStyled;
    success: IAlertSeverityOptionStyled;
    [key: string]: IAlertSeverityOptionStyled;
}