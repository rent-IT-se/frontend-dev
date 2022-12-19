import * as yup from "yup";
export const validationLogin = yup.object({
    email: yup
      .string("Enter your email")
      .email("Введенный email недействителен")
      .required("Это поле обязательное"),
    password: yup
      .string("Enter your password")
      .min(1, "Пароль должен быть не меньше 8 символов")
      .required("Это поле обязательное"),
  });
export const validationRegister = yup.object({
    email: yup
      .string("Enter your email")
      .email("Введенный email недействителен")
      .required("Это поле обязательное"),
    password: yup
      .string("Enter your password")
      .min(8, "Пароль должен быть не меньше 8 символов")
      .required("Это поле обязательное"),
    first_name:yup
      .string("Enter your name")
      .required("Это поле обязательное"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Пароли не совпадают")
      .required("Подтвердите пароль"),
  });
  export const validationEmail = yup.object({
    email: yup
      .string("Enter your email")
      .email("Введенный email недействителен")
      .required("Это поле обязательное"),
  });