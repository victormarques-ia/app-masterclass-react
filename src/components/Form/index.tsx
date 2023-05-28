import { FormHTMLAttributes } from "react";
import { StyledForm } from "./styles";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export default function Form(props: FormProps): JSX.Element {
  return <StyledForm {...props}>{props.children}</StyledForm>;
}
