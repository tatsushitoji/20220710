import type { ComponentProps, VFC } from "react";
import { Button as MaterialButton } from "@mui/material";

type Props = {
  label: string;
  onClick?: ComponentProps<typeof MaterialButton>["onClick"];
};

export const Button: VFC<Props> = ({ label, onClick }) => (
  <MaterialButton variant="contained" onClick={onClick}>
    {label}
  </MaterialButton>
);
