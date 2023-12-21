const defaultLang = "am";

const translationData = {
	am: {},
	en: {},
	ru: {},
};

async function getDataFromJSON(file) {
	try {
		const response = await fetch(file, { mode: "no-cors" });
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
		return {};
	}
}

async function setTranslationData() {
	translationData.am = await getDataFromJSON("assets/translations/am.json");
	translationData.en = await getDataFromJSON("assets/translations/en.json");
	translationData.ru = await getDataFromJSON("assets/translations/ru.json");

	$(document).ready(() => {
		updateUI();
	});
}

setTranslationData();

function changeLanguage(lang) {
	sessionStorage.setItem("language", lang);
	updateUI();
}

function updateUI() {
	const lang = sessionStorage.getItem("language") || defaultLang;
	const elementsToTranslate = document.querySelectorAll(".translate");

	elementsToTranslate.forEach((element) => {
		const key = element.getAttribute("data-id");
		element.innerHTML = translationData[lang][key] || key;
	});
}
