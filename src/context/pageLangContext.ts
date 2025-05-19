import { createContext } from "react";

export type Language = "en" | "ar";
export type Direction = "ltr" | "rtl";

export interface LangContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
}

export const LangContext = createContext<LangContextType>({
	language: "en",
	setLanguage: () => {},
});
