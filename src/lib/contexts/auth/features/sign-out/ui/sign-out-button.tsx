import { Button, ButtonProps } from "@ui/button";

import { signOutAction } from "../api/sign-out-action";
import { FC } from "react";

export type SignOutButtonProps = ButtonProps;

export const SignOutButton: FC<SignOutButtonProps> = (props) => {
  return (
    <form action={signOutAction}>
      <Button {...props} type="submit">
        Sign Out
      </Button>
    </form>
  );
};
