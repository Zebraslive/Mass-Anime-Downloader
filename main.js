// Modules to control application life and create native browser window
const {app, session, BrowserWindow, ipcMain} = require('electron')
const {download} = require('electron-dl');
var os = require('os');
 require('ssl-root-cas').inject();

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1334,
    height: 660,
    setOpacity: 0.8,
    transparent: true, frame: false,
    vibrancy: 'ultra-dark',
    webPreferences: {
      nodeIntegration: true,
      backgroundThrottling: false
    }
  })
 session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36';
    callback({
        cancel: false,
        requestHeaders: details.requestHeaders
    });
});
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
//mainWindow.webContents.openDevTools({mode:'undocked'})
 const userDataPath = (app || remote.app).getPath(
  'userData'
);
   const winf = BrowserWindow.getFocusedWindow();


}
app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
app.commandLine.appendSwitch('allow-insecure-localhost', 'true');
app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
    // On certificate error we disable default behaviour (stop loading the page)
    // and we then say "it is all fine - true" to the callback
    event.preventDefault();
    callback(true);
});
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function () {
    setTimeout(function() {
        createWindow();
    }, 10);
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
