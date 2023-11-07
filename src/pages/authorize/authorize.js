import { AuthFormError, Button, Icon, Input, Loader } from "../../components";
import { useForm } from "react-hook-form";
import { authSchema } from "../utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsModalOpen,
  setIsPasswordVisible,
  setUser,
} from "../../store/actions";
import { selectIsPasswordVisible } from "../../store/selectors";
import { useState } from "react";
import { request } from "../../utils";
import styled from "styled-components";

const AuthorizeContainter = ({ className }) => {
  const [serverError, setServerError] = useState(null);
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
  const [isAwait, setIsAwait] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isPasswordVisible = useSelector(selectIsPasswordVisible);

  const formError = errors?.login?.message || errors?.password?.message;
  const error = formError || serverError;

  const onFormSubmit = ({ login, password }) => {
    setIsAwait(true);
    dispatch(setIsPasswordVisible(false));
    request("/login", "POST", { login, password })
      .then(({ error, data }) => {
        if (error) {
          setServerError(error);
          return;
        }
        dispatch(setUser(data));
        sessionStorage.setItem("user", JSON.stringify(data));
        reset();
        dispatch(setIsModalOpen(false));
        navigate("/");
      })
      .finally(() => setIsAwait(false));
  };

  const onPassViewClickOrExit = () =>
    dispatch(setIsPasswordVisible(!isPasswordVisible));

  const onRegButtonCLick = () => {
    dispatch(setIsPasswordVisible(false));
  };

  return (
    <div className={className}>
      {isAwait && <Loader />}
      <h2>Авторизация</h2>

      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div>
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

          <Button
            includeIcon={false}
            width="100%"
            padding=".5rem 0"
            type="submit"
            disabled={!!formError}
          >
            Войти!
          </Button>
        </div>

        {!!error && <AuthFormError>{error}</AuthFormError>}
      </form>
      <hr />
      <div className="registration-question-block">
        Еще не зарегистрированы?
        <Link onClick={onRegButtonCLick} to="/registration">
          <Button
            includeIcon={false}
            padding="0.5rem 2rem"
            onClick={onPassViewClickOrExit}
          >
            Регистрация!
          </Button>
        </Link>
      </div>
    </div>
  );
};

export const Authorize = styled(AuthorizeContainter)`
  display: flex;
  flex-direction: column;
  font-family: rubik;

  & input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.2rem 0;
    font-family: rubik;
  }

  & i {
    position: absolute;
    top: 9.1rem;
    right: 12rem;
  }

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & hr {
    width: 100%;
  }

  & .registration-question-block {
    display: flex;
    padding: 0.5rem 0;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
  }
`;
