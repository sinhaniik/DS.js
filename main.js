
// The app module, which controls your application's event lifecycle.
// The BrowserWindow module, which creates and manages application windows.

const {app, BrowserWindow} = require("electron");

const createWindow = () => {
    const wind = new BrowserWindow({
        width: 500,
        height: 500
    })

    wind.loadFile("index.html")
}

// In Electron, browser windows can only be created after the app module's ready event is fired.
// You can wait for this event by using the app.whenReady() API
app.whenReady().then(() => {
  createWindow()
})

// On Windows and Linux, exiting all windows generally quits an application entirely
// To implement this, listen for the app module's 'window-all-closed' event, and call app.quit()
// if the user is not on macOS (darwin).
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})