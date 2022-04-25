import { RouteProps } from "react-router-dom";

export interface ICustomRoute extends RouteProps {
    isPrivate?: boolean;
    path?: string;
}