import React from "react";
import { useTranslation } from "react-i18next";

const Foo = () => {
  const { i18n, t } = useTranslation(["Foo"]);

  return (
    <>
      <p>Idioma de la app : {i18n.language}</p>
      <p>{t("Hola mundo")}</p>
      <button onClick={() => i18n.changeLanguage("es")}>ES</button>
      <button onClick={() => i18n.changeLanguage("en")}>EN</button>
    </>
  );
};

export default Foo;
