import { Button, ButtonProps } from "@ui/button";
import { FC } from "react";

import { signInAction } from "../api/sign-in-action";

export interface SignInButtonProps extends ButtonProps {
  redirectTo?: string;
  provider: string;
}

export const SignInButton: FC<SignInButtonProps> = (props) => {
  return (
    <form action={signInAction}>
      <input type="hidden" name="provider" value={props.provider} />
      <input type="hidden" name="redirectTo" value={props.redirectTo} />
      <Button {...props} type="submit">
        Sign In
      </Button>
    </form>
  );
};
