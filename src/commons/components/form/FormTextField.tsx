import { TextFieldProps } from '@mui/material/TextField/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

type FormTextFieldProps = TextFieldProps & {
    name: string;
};

export const FormTextField = ({ name, ...rest }: FormTextFieldProps) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
                <TextField
                    value={value ?? ''}
                    error={!!error}
                    helperText={error?.message}
                    onChange={onChange}
                    {...rest}
                />
            )}
        />
    );
};