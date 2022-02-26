import React from "react";

export type TAlertSeverity = "error" | "warning" | "info" | "success";

export interface IAlert {
    children: React.ReactNode;
    severity: TAlertSeverity;
    alertHeader?: boolean;
    open?: boolean;
}