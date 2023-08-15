import { TextField } from "@mui/material";

type InputProps = {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onChange?: () => void;
};

export const TextInput = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: InputProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <TextField
      label={label}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={{ backgroundColor }}
      {...props}
    ></TextField>
  );
};

export default TextInput;
