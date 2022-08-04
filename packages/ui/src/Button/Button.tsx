import { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode
}

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
  return <button {...props}>{children}</button>
}

export default Button
