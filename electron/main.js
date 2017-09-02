const electron = require('electron');
const path = require('path');
const url = require('url');

const app = electron.app;

const browserWindow = electron.BrowserWindow;

let mainWindow = null;

function createWindow() {
    mainWindow = new browserWindow({width: 800, height: 600});
    mainWindow.loadURL(url.format({
        pathname: path.resolve(__dirname, '../server/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {
        mainWindow = null
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});