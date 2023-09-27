import { AuthFormError, Button, Input, ModalWindow } from "../../components";
import { useForm } from "react-hook-form";
import { authSchema } from "../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const AuthorizeContainter = ({ className }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(authSchema),
  });
  const navigate = useNavigate();
  const formError = errors?.login?.message || errors?.password?.message;
  const error = formError;

  const onFormSubmit = ({ login, password }) => {
    console.log(login, password);
    reset();
    navigate("/");
  };

  return (
    <div className={className}>
      {/* <ModalWindow title="Авторизация"> */}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Input type="text" placeholder="Логин" {...register("login")} />
        <Input type="password" placeholder="Пароль" {...register("password")} />
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
      <div className="registration-question-block">
        Еще не зарегистрированы?
        <Link to="/registration">
          <Button includeIcon={false} margin="0 0.5rem" padding="0.5rem 2rem">
            Регистрация!
          </Button>
        </Link>
      </div>
      {/* </ModalWindow> */}
    </div>
  );
};

export const Authorize = styled(AuthorizeContainter)`
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

  & .registration-question-block {
    display: flex;
    align-items: center;
    margin-top: 5%;
  }
`;
