import { http } from "../utils/http";

export type User = {
  isAdmin?: boolean;
  email?: string;
};

export async function doLogin(email: string, senha: string): Promise<User> {
  const res = await http.post("/login", { email, senha });

  const user: User = {
    email: email,
    isAdmin: res.data.isAdmin,
  };

  return user;
}
