import { FormControl } from "react-bootstrap";

export function SimpleControl({
  invalid,
  valid,
  field: { ...control },
  ...props
}) {
  return (
    <FormControl {...props} {...control} isInvalid={invalid} isValid={valid} />
  );
}