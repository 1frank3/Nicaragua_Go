import { FormGroup, FormLabel, FormControl, InputGroup } from "react-bootstrap";
import _ from "lodash";
import { SimpleControl } from "./SimpleControl";

export function TextField({
  htmlAs = "input",
  margin = "mb-2",
  infoText,
  invalid,
  valid,
  ...props
}) {
  const {
    field: { ...fields },
    form: { errors, touched, ...rest },
  } = props;

  const fieldErrors = _.get(errors, fields.name);

  invalid =
    typeof invalid != "undefined"
      ? invalid && _.get(touched, fields.name)
      : Boolean(fieldErrors && _.get(touched, fields.name));

  valid =
    typeof valid != "undefined" ? valid : Boolean(!fieldErrors && fields.value);

  return (
    <FormGroup className={margin}>
      {props.label && (
        <FormLabel htmlFor={props.id} className={"label-color"}>
          {props.label}
        </FormLabel>
      )}
      <InputGroup hasValidation>
        <SimpleControl as={htmlAs} invalid={invalid} valid={valid} {...props} />
        {props.inputadornment}
        {invalid && (
          <FormControl.Feedback type="invalid">
            {fieldErrors}
          </FormControl.Feedback>
        )}
      </InputGroup>
      {!invalid && infoText != false && (
        <div className="form-text">{infoText}&nbsp;</div>
      )}
    </FormGroup>
  );
}
