const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

// init win
let win; // global reference to the window object, prevents garbage collection

function createWindow() {
  // create browser window
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/paperStackLogo.svg'});

  // load index.html
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true // loads the index.html file
  }));

  // open devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  })
}

// run create window function
app.on('ready', createWindow);

// quit when all windows are closed
app.on('window-all-closed', () => {
  // check for macs
  if(process.platform !== 'darwin') {
    app.quit();
  }
})