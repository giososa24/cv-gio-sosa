import type { RequestHandler } from "@builder.io/qwik-city";
import { config } from "~/qwik-speak-setup";

export const onRequest: RequestHandler = ({ params, locale }) => {
    const lang = params.lang;

    // Set Qwik locale
    locale(lang || config.defaultLocale.lang);
};