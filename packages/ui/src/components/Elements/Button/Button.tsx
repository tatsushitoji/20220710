import { Button as MaterialButton, ButtonProps } from '@mui/material'

type Props = ButtonProps & {
  label: string
}

export const Button = ({ label, onClick, ...props }: Props) => (
  <MaterialButton {...props} variant="contained" onClick={onClick}>
    {label}
  </MaterialButton>
)
