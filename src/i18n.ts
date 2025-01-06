import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Manually import the translation files
import vieTranslation from "./locales/vi/translation.json";

// Initialize i18next with configurations
i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources: {
      vi: {
        translation: vieTranslation,
      },
    },
    fallbackLng: "vi", // Fallback language if the translation is not available
    debug: true, // Enable debug for development
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    react: {
      useSuspense: false, // Disable suspense for SSR (Server-Side Rendering)
    },
  });

export default i18n;
