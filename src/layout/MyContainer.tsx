import { Container } from "@mui/material";
import { ReactNode } from "react";

type MyContainerProps = {
    children: ReactNode;
};

export default function MyContainer({ children }: MyContainerProps) {
    return <Container maxWidth="sm">{children}</Container>;
}