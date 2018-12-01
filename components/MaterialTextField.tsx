import { TextField } from '@material-ui/core';
import { asField, FieldApi, FieldState, FormValue } from 'informed';
import { TextField as ITextField } from 'material-ui';
import { ChangeEvent, Ref } from 'react';

interface IMaterialTextProps {
  fieldState: FieldState<FormValue>;
  fieldApi: FieldApi<FormValue>;
  forwardedRef: Ref<ITextField>;
  value?: any;
  onBlur(event: any): void;
  onChange(event: any): void;
  onChange(event: any): void;
}

const MaterialText = ({ fieldState, fieldApi, ...props }: IMaterialTextProps) => {
  const value = fieldState.value || props.value;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, forwardedRef, ...rest } = props;

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setTouched(true);
    if (onBlur) {
      onBlur(e);
    }
  };
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <TextField
      {...rest}
      value={!value && value !== 0 ? '' : value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default asField(MaterialText);
