import type { SpeakConfig } from 'qwik-speak';

/**
 * Speak config
 */
export const config: SpeakConfig = {
  defaultLocale: { lang: 'en' },
  supportedLocales: [
    { lang: 'en', dir: 'ltr' },
    { lang: 'it', dir: 'ltr' }
  ],
  assets: [
    'app' // Translations shared by the pages
  ],
  runtimeAssets: [
    'runtime' // Translations with dynamic keys or parameters
  ]
};
