import React from "react";
import { TextareaHTMLAttributes } from "react";
import { StyledTextArea, ErrorSpan } from "./styles";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <>
        <StyledTextArea ref={ref} {...props} />
        {props.error && <ErrorSpan>{props.error}</ErrorSpan>}
      </>
    );
  }
);

export default TextArea;
