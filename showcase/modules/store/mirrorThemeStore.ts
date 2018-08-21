import {observable} from "mobx";

export class MirrorThemeStore {
    public static readonly THEME_KEY = "bambu-code-tsx-theme";
    public static readonly HTML_THEME_KEY = "bambu-code-html-theme";
    public static readonly DEFAULT_THEME = "panda-syntax";
    public static readonly DEFAULT_HTML_THEME = "mdn-like";

    @observable
    private _theme: string;

    @observable
    private _htmlTheme: string;

    public constructor() {
        this._theme = localStorage.getItem(MirrorThemeStore.THEME_KEY) || MirrorThemeStore.DEFAULT_THEME;
        this._htmlTheme = localStorage.getItem(MirrorThemeStore.HTML_THEME_KEY) || MirrorThemeStore.DEFAULT_HTML_THEME;
    }

    public get theme(): string {
        return this._theme;
    }

    public setTheme(value: string) {
        this._theme = value;
        localStorage.setItem(MirrorThemeStore.THEME_KEY, value);
    }

    public get htmlTheme(): string {
        return this._htmlTheme;
    }

    public setHtmlTheme(value: string) {
        this._htmlTheme = value;
        localStorage.setItem(MirrorThemeStore.HTML_THEME_KEY, value);
    }
}

const mirrorThemeStore = new MirrorThemeStore();

export default mirrorThemeStore;
