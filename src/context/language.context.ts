import { createContext, Dispatch, SetStateAction } from "react";

type LanguageContextType = {
  language: "en" | "fr";
  setLanguage:
    | Dispatch<SetStateAction<"en" | "fr">>
    | ((language: string) => void);
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: (language: string) => {},
});
