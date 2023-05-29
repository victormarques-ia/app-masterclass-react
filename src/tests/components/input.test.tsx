import { fireEvent, render, screen } from "@testing-library/react";
import Input from "../../components/Input";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { vi } from "vitest";

const TestWrapper = ({ children }: { children: JSX.Element }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Input component", () => {
  it("renders correctly", () => {
    render(
      <TestWrapper>
        <Input />
      </TestWrapper>
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("receives props correctly", () => {
    render(
      <TestWrapper>
        <Input placeholder="Test" />
      </TestWrapper>
    );
    const input = screen.getByPlaceholderText("Test");
    expect(input).toBeInTheDocument();
  });

  it("updates on change", () => {
    render(
      <TestWrapper>
        <Input />
      </TestWrapper>
    );
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "test value" } });
    expect(input.value).toBe("test value");
  });

  it("calls onChange handler when value is changed", () => {
    const handleChange = vi.fn();
    render(
      <TestWrapper>
        <Input onChange={handleChange} />
      </TestWrapper>
    );
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("displays error message when error prop is passed", () => {
    render(
      <TestWrapper>
        <Input error="Test error message" />
      </TestWrapper>
    );
    const errorMessage = screen.getByText("Test error message");
    expect(errorMessage).toBeInTheDocument();
  });
});
