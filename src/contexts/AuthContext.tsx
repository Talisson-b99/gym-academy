import { ReactNode, createContext, useState } from "react";
import { UserDTO } from "../dtos/UserDTO";

export type AuthContextDataProps = {
  user: UserDTO;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

// craia o contexto e define o valor inicial
export const AuthContext = createContext<AuthContextDataProps>(
  {} as AuthContextDataProps
);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({
    email: "talisson@gmail.com",
    name: "Talisson silva",
    id: "1",
  });
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
}
