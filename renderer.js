// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 const {BrowserWindow} = require('electron').remote;


const { ipcRenderer } = require('electron');
var request = require('request');
const cheerio = require('cheerio');
const {shell} = require('electron') // deconstructing assignment
const path = require('path');
const Store = require('electron-store');
const store = new Store();
var fs = require('fs');
require('ssl-root-cas').inject();


 function init() {
 $('.openConsole').click(function() {
 var windoxwf = BrowserWindow.getFocusedWindow();
 windoxwf.webContents.openDevTools({mode:'undocked'}) //uncomment to open dev tools on app load.
});
 $('.viewfilesx').click(function() {
  console.log(__dirname+'\\..\\..\\anime_downloads\\');
  shell.openExternal('file://' + __dirname+'\\..\\..\\anime_downloads\\');

});
 $('#access_key').val(store.get('api_access_key'));
 $('#proxydx').val(store.get('proxies_list'));

                document.getElementById("min-btn").addEventListener("click", (e) => {

                 var window = BrowserWindow.getFocusedWindow();
                 window.minimize();


                });


                document.getElementById("close-btn").addEventListener("click", (e) => {

            var window = BrowserWindow.getFocusedWindow(); window.close();
                });
            };

            document.onreadystatechange =  () => {
                if (document.readyState == "complete") {
                    init();
                }
            };
