import React from "react";
import { InputHTMLAttributes } from "react";
import { StyledInput, ErrorSpan } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <StyledInput ref={ref} {...props} />
      {props.error && <ErrorSpan>{props.error}</ErrorSpan>}
    </>
  );
});

export default Input;
