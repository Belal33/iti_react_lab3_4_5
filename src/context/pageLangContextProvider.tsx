import type { ReactNode } from "react";
import { useState } from "react";
import { LangContext, type Language } from "./pageLangContext";

export default function LangProvider({ children }: { children: ReactNode }) {
	const [language, setLanguage] = useState<Language>("en");

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
	};

	const contextValue = {
		language,
		setLanguage: handleLanguageChange,
	};

	return (
		<LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
	);
}
