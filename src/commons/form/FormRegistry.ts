import { useForm } from "react-hook-form";

type FormRegistryMap = Map<string, ReturnType<typeof useForm>>;

const formRegistry: FormRegistryMap = new Map();

export const registerForm = (name: string, form: ReturnType<typeof useForm>) => {
    formRegistry.set(name, form);
};

export const getFormByName = (name: string) => {
    return formRegistry.get(name);
};

export const unregisterForm = (name: string) => {
    formRegistry.delete(name);
};
