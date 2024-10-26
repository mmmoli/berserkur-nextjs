"use server";

import { signOut } from "@auth/shared/services/auth";

export const signOutAction = async () => {
  await signOut();
};
