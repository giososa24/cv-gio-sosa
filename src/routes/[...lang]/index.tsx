import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak, useTranslate } from "qwik-speak";

export default component$(() => {
  const t = useTranslate();

  return (
    <Speak assets={['app']}>
    <div>
      <h1>{t("title")}</h1> {/* Qwik Speak */}
    </div>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};