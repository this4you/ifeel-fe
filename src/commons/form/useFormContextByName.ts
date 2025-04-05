import { getFormByName } from "@commons/form/FormRegistry.ts";
import { useForm } from "react-hook-form";

export const useFormContextByName = <T extends Record<string, any>>(name: string): ReturnType<typeof useForm<T>> => {
    const form = getFormByName(name);

    if (!form) throw new Error(`Form with name "${name}" is not registered`);

    return form as ReturnType<typeof useForm<T>>;
};
