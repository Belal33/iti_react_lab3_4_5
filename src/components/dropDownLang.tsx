import { useContext } from "react";
import { Dropdown } from "react-bootstrap";
import { LangContext } from "../context/pageLangContext";

export default function DropDownLang() {
	const { language, setLanguage } = useContext(LangContext);

	return (
		<Dropdown>
			<Dropdown.Toggle variant="light" id="language-dropdown">
				{language.toUpperCase()}
			</Dropdown.Toggle>
			<Dropdown.Menu>
				<Dropdown.Item
					active={language === "en"}
					onClick={() => setLanguage("en")}
				>
					English
				</Dropdown.Item>
				<Dropdown.Item
					active={language === "ar"}
					onClick={() => setLanguage("ar")}
				>
					العربية
				</Dropdown.Item>
			</Dropdown.Menu>
		</Dropdown>
	);
}
