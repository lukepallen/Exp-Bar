import { ExpBarConfiguration } from "./app/ExpBarConfiguration.js";

export function initConfig() {
    Hooks.on("getSceneControlButtons", (controls) => {
        console.log("Exp Bar | getSceneControlButtons", controls);
        controls.tokens.tools.expBar = {
                name: "expBar",
                title: "expbar.controls.expUI.name",
                icon: "fas fa-pastafarianism",
                visible: game.user.isGM,
                button: true,
                onClick: async () => {
                    await ExpBarConfiguration.cleanUpActors();
                    new ExpBarConfiguration().render(true);
                },
            };
    });
}
