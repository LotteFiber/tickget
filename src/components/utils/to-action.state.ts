import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldError: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    console.log(error.flatten().fieldErrors);
    return {
      message: "",
      fieldError: error.flatten().fieldErrors,
      payload: formData,
    };
  } else if (error instanceof Error) {
    return {
      message: error.message,
      fieldError: {},
      payload: formData,
    };
  } else {
    return {
      message: "An unknown error occured",
      fieldError: {},
      payload: formData,
    };
  }
};
