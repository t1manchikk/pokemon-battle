export function addLog(text) {
    const logBox = document.querySelector('#logs');
    const p = document.createElement('p');
    const time = new Date().toLocaleTimeString();
    p.innerText = `[${time}] ${text}`;
    logBox.prepend(p);
}
