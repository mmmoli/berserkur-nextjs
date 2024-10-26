"use server";

import { auth } from "@auth/shared/services/auth";
import { redirect } from "next/navigation";

export type OnFailFunc = (destinationUrl: string) => never;

export interface AssertUserOpts {
  next?: string;
  onFail?: OnFailFunc;
  redirectTo?: string;
}

export const assertUser = async (opts?: AssertUserOpts) => {
  const onFail = opts?.onFail ?? redirect;
  const redirectTo = opts?.redirectTo ?? "/";
  const session = await auth();
  if (!session) return onFail(redirectTo);
  return session;
};
