import React, { PropsWithChildren, useEffect } from 'react';
import { FieldValues, FormProvider, useForm, UseFormReturn } from 'react-hook-form';
import { registerForm, unregisterForm } from "@commons/form/FormRegistry.ts";

type FormWrapperProps<Form extends Record<string, any>> = {
    submit(data: Form): void;
    formName: string;
    defaultValues: Partial<Form> | null;
} & PropsWithChildren

export const FormWrapper = <T extends Record<string, any>>({formName, submit, defaultValues = null, children}: FormWrapperProps<T>) => {
    const form = useForm<T>({
        values: defaultValues as T,
        mode: 'onChange',
    });

    const onSubmit = form.handleSubmit((data, e) => {
        e?.preventDefault();
        submit(data);
    });

    useEffect(() => {
        if (form) {
            registerForm(
                formName,
                form as UseFormReturn<FieldValues, unknown, FieldValues | undefined>
            );
        }

        return () => {
            unregisterForm(formName);
        }
    }, [form, formName]);

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
