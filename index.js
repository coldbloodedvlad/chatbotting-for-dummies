const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
    let window = new BrowserWindow({
        show: false
    });

    window.on('ready-to-show', () => {
        window.setMenu(null);
        window.maximize();
        window.show();
    });

    window.on('closed', () => window = null);

    window.loadURL('http://vk.com/');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
