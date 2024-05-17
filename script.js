const {  ipcRenderer } = require("electron");
const ipc=ipcRenderer;
document.querySelector("#minimize").addEventListener("click", () => {
    ipc.send("manualMinimize");
});
document.querySelector("#maximize").addEventListener("click", () => {
    ipc.send("manualMaximize");
});
document.querySelector("#close").addEventListener("click", () => {
    ipc.send("manualClose");
});
document.querySelector("#social").addEventListener("click", redirectToTikTok);
function redirectToTikTok() {
    
    window.location.href = 'https://sandbox.moomoo.io/?server=us-west:BD';
}
