import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";

type ThemeType = "dark" | "light";

type ThemeContextStateType = {
  theme: ThemeType;
};

export const ThemeContext =
  createContextId<ThemeContextStateType>("theme-context");

export const ThemeProvider = component$(() => {
  const theme = useStore<ThemeContextStateType>({
    theme: "dark",
  });

  useContextProvider(ThemeContext, theme);

  useVisibleTask$(() => {
    const currentTheme = localStorage.getItem('theme') ?? 'dark'
    document.documentElement.setAttribute("data-theme", currentTheme);
    theme.theme = currentTheme as ThemeType
  });

  useVisibleTask$(({ track }) => {
    track(() => theme.theme);
    document.documentElement.setAttribute("data-theme", theme.theme);
    localStorage.setItem("theme", theme.theme);
  });

  return <Slot />;
});
