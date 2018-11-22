import { TextField } from '@material-ui/core';
import { asField } from 'informed';
import { ChangeEvent } from 'react';

const MaterialText = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    setTouched();
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
    <>
      <TextField
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </>
  );
});

export default MaterialText;
