// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
 const {BrowserWindow} = require('electron').remote;


const { ipcRenderer } = require('electron');
var request = require('request');
const cheerio = require('cheerio');
const path = require('path');
var fs = require('fs');
require('ssl-root-cas').inject();


 function init() {
 $('.openConsole').click(function() {
 var windoxwf = BrowserWindow.getFocusedWindow();
 windoxwf.webContents.openDevTools({mode:'undocked'}) //uncomment to open dev tools on app load.
});
  if (fs.existsSync('./p_k.txt')) {
    var dataihg = fs.readFileSync('./p_k.txt');
  $('#access_key').val(dataihg);
  }



                // Minimize task
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
