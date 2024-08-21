import React, { PropsWithChildren } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

type FormWrapperProps<Form extends Record<string, any>> = {
    submit(data: Form): void;
    defaultValues: Partial<Form> | null;
} & PropsWithChildren

export const FormWrapper = <T extends Record<string, any>>({submit, defaultValues = null, children}: FormWrapperProps<T>) => {
    const form = useForm<T>({
        values: defaultValues as T,
        mode: 'onChange',
    });

    const onSubmit = form.handleSubmit((data, e) => {
        e?.preventDefault();
        submit(data);
    })

    return (
        <FormProvider {...form}>
            <form
                onSubmit={onSubmit}
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                }}
            >
                {children}
            </form>
        </FormProvider>
    );
}
