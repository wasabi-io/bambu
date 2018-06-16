export default class BrowserUtil {
    public static isMobile() {
        const agent = navigator.userAgent;
        if (agent.match(/Android/i)
            || agent.match(/webOS/i)
            || agent.match(/iPhone/i)
            || agent.match(/iPad/i)
            || agent.match(/iPod/i)
            || agent.match(/BlackBerry/i)
            || agent.match(/Windows Phone/i)
        ) return true;
        return false;
    }
}
