import { initConfig } from "./config.js";
import { registerSettings, setSetting } from "./settings.js";
import {setExpBarHooks} from "./app/ExpBar.js";
import {Socket} from "./lib/socket.js";

export const MODULE_ID = "expbar";

export const BAR_STYLES = {
    CLASSIC: 0,
    MATCHING_IMAGES: 1,
};

export const BAR_STYLE_SELECT = {
    0: "expbar.settings.barStyle.classic",
    1: "expbar.settings.barStyle.matchingImages",
};

export const TEXT_ALIGN = {
    "left": "expbar.settings.textAlign.left",
    "center": "expbar.settings.textAlign.center",
    "right": "expbar.settings.textAlign.right",
};

Hooks.on("init", () => {
    initConfig();
    registerSettings();
    setExpBarHooks();

    Socket.register("cameraPan", ({ uuid, scale, duration }) => {
        const token = fromUuidSync(uuid);
        if (token.parent !== canvas?.scene) return;
        canvas.animatePan({
            ...token.object.center,
            scale: scale,
            duration: duration,
        });
    });
});