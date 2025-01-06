import { createI18n } from 'vue-i18n';
import zh from './modules/zh';
import tw from './modules/tw';
import en from './modules/en';
import jp from './modules/jp';
import ru from './modules/ru';
import ms from './modules/ms';

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        zh,
        tw,
        en,
        jp,
        ru,
        ms,
    },
    warnHtmlMessage: false,
});

export default i18n;
