"use server";

import { signIn } from "@auth/shared/services/auth";

export type Provider = "google";

export const signInAction = async (data: FormData) => {
  const provider = data.get("provider") as Provider;
  const redirectTo = data.get("redirectTo") as string | undefined;

  await signIn(provider, {
    redirectTo,
  });
};
