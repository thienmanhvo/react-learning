import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }

  return { value: "", isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.value, isValid: action.value.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  return { value: "", isValid: false };
};

const Login = () => {
  const authCtx = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const { isValid: isValidEmail } = emailState;
  const { isValid: isValidPassword } = passwordState;
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("check form");
      setFormIsValid(isValidEmail && isValidPassword);
    }, 500);

    return () => {
      console.log("Clearnup");
      clearTimeout(identifier);
    };
  }, [isValidEmail, isValidPassword]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", value: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", value: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      authCtx.onLogin(emailState.value, passwordState.value);
      return;
    }
    if (!isValidEmail) {
      emailInputRef.current.focus();
      return;
    }
    if (!isValidPassword) {
      passwordInputRef.current.focus();
      return;
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          isValid={emailState.isValid}
          id="email"
          label="E-mail"
          type="email"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          isValid={passwordState.isValid}
          id="password"
          label="Password"
          type="password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
