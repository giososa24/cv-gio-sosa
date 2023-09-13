import { component$, useContext } from "@builder.io/qwik";
import { ThemeContext } from "~/theme-context/theme-context";

const ChangeTheme = component$(() => {
    const themeState = useContext( ThemeContext );

  return <div>
    <span>{themeState.theme}</span>
    <button onClick$={() => themeState.theme = 'light'}>light</button>
    <button onClick$={() => themeState.theme = 'dark'}>dark</button>
  </div>
});

export default ChangeTheme