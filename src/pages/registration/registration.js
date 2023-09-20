import { AuthFormError, Button, Input, ModalWindow } from "../../components";
import { useForm } from "react-hook-form";
import { regSchema } from "../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RegistrationContainter = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
      passwordCheck: "",
    },
    resolver: yupResolver(regSchema),
  });
  const navigate = useNavigate();
  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passwordCheck?.message;
  const error = formError;

  const onFormSubmit = ({ login, password }) => {
    console.log(login, password);
    reset();
    navigate("/");
  };

  return (
    <div className={className}>
      <ModalWindow title="Регистрация">
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <Input type="text" placeholder="Логин" {...register("login")} />
          <Input
            type="password"
            placeholder="Пароль"
            {...register("password")}
          />
          <Input
            type="password"
            placeholder="Повтор пароля"
            {...register("passwordCheck")}
          />
          <Button
            includeIcon={false}
            padding="0.5rem 5rem"
            type="submit"
            disabled={!!formError}
          >
            Войти!
          </Button>

          {!!error && <AuthFormError>{error}</AuthFormError>}
        </form>
      </ModalWindow>
    </div>
  );
};

export const Registration = styled(RegistrationContainter)`
  display: flex;

  & input {
    display: flex;
    margin: 0.2rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
