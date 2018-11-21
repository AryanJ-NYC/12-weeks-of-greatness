import { TextField } from '@material-ui/core';
import { asField } from 'informed';

const MaterialText = asField(({ fieldState, fieldApi, ...props }) => {
  const { value } = fieldState;
  const { setValue, setTouched } = fieldApi;
  const { onChange, onBlur, initialValue, forwardedRef, ...rest } = props;
  return (
    <>
      <TextField
        {...rest}
        ref={forwardedRef}
        value={!value && value !== 0 ? '' : value}
        onChange={(e) => {
          setValue(e.target.value);
          if (onChange) {
            onChange(e);
          }
        }}
        onBlur={(e) => {
          setTouched();
          if (onBlur) {
            onBlur(e);
          }
        }}
      />
    </>
  );
});

export default MaterialText;
