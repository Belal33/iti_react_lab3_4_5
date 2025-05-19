import { createContext } from "react";

export type Language = "en" | "ar";

export interface LangContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
}

export const LangContext = createContext<LangContextType>({
	language: "en",
	setLanguage: () => {},
});
