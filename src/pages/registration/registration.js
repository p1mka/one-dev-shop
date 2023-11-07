import {
  AuthFormError,
  Button,
  Icon,
  Input,
  SimpleLoader,
} from "../../components";
import { useForm } from "react-hook-form";
import { regSchema } from "../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalOpen,
  setIsPasswordVisible,
  setUser,
} from "../../store/actions";
import { selectIsPasswordVisible } from "../../store/selectors";
import { request } from "../../utils";
import { useState } from "react";
import styled from "styled-components";

const RegistrationContainter = ({ className }) => {
  const [serverError, setServerError] = useState(null);
  const [isAwait, setIsAwait] = useState(false);
  const dispatch = useDispatch();

  const isPasswordVisible = useSelector(selectIsPasswordVisible);

  const onPassViewClickOrExit = () =>
    dispatch(setIsPasswordVisible(!isPasswordVisible));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    resolver: yupResolver(regSchema),
  });
  const navigate = useNavigate();

  const formError =
    errors?.login?.message ||
    errors?.password?.message ||
    errors?.passwordCheck?.message ||
    errors?.email?.message;

  const error = formError || serverError;

  const onFormSubmit = ({ email, login, password }) => {
    setIsAwait(true);
    dispatch(setIsPasswordVisible(false));
    request("/register", "POST", { login, password, email })
      .then(({ error, data }) => {
        if (error !== null) {
          setServerError(error);
          return;
        }
        reset();
        dispatch(setUser(data));
        sessionStorage.setItem("user", JSON.stringify(data));
        dispatch(setIsModalOpen(false));
        navigate("/");
      })
      .finally(() => setIsAwait(false));
  };

  return (
    <div className={className}>
      <h2> Регистрация </h2>
      {isAwait && <SimpleLoader />}
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <Input type="text" placeholder="E-mail" {...register("email")} />
        <Input type="text" placeholder="Логин" {...register("login")} />
        <Input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Пароль"
          {...register("password")}
        />
        <Icon
          id={isPasswordVisible ? "la-eye-slash" : "la-eye"}
          onClick={onPassViewClickOrExit}
        />

        <Input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Повтор пароля"
          {...register("passwordCheck")}
        />
        <Button
          includeIcon={false}
          padding=".5rem 2rem;"
          type="submit"
          disabled={!!formError}
        >
          Зарегистрироваться
        </Button>

        {!!error && <AuthFormError>{error}</AuthFormError>}
      </form>
    </div>
  );
};

export const Registration = styled(RegistrationContainter)`
  display: flex;
  flex-direction: column;
  padding-bottom: 2rem;

  & input {
    display: flex;
    margin: 0.2rem;
    font-family: rubik;
  }

  & i {
    position: absolute;
    top: 12.2rem;
    right: 12rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
