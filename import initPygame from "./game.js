import initPygame from "./main.wasm";

async function init() {
    try {
        await initPygame();
        console.log("Pygame WASM initialized successfully.");
    } catch (error) {
        console.error("Failed to initialize Pygame WASM:", error);
    }
}

export default init;
