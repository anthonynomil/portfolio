import { createContext, Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  setTheme:
    | Dispatch<SetStateAction<"dark" | "light">>
    | ((theme: string) => void);
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: (theme: string) => {},
});
