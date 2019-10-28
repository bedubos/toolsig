'use strict'
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
var moment = require("moment");
var colors = require('colors');
var userHome = require('user-home');

//DETECT IP *START!
var os = require('os');
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
  for (var k2 in interfaces[k]) {
    var address = interfaces[k][k2];
    if (address.family === 'IPv4' && !address.internal) {
      addresses.push(address.address);
    }
  }
}
//DETECT IP *END!

const questionTools = [{
  type: "list",
  name: "Tools",
  message: "Select tools:\n  F-L-C ? Follow-Like-Comment!\n\n",
  choices: [
    "❆ Information",
    "❆ Bom Like Target",
    "❆ Bot Like Timeline v1",
    "❆ Bot Like Timeline v2",
    "❆ Mass Delete Post/Photo",
    "❆ Unfollow All Following",
    "❆ Unfollow Not Followback",
    "❆ L-C with Followers Target",
    "❆ F-L with Followers Target",
    "❆ F-L-C with Followers Target",
    "❆ F-L-C with Media Target",
    "❆ F-L-C with Hashtag Target",
    "❆ F-L-C with Location Target",
    "\n"
  ]
}]
const main = async() => {
  try {
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch (toolChoise) {

      case "❆ Information":
        const informationtools = require('./tools/infotools.js');
        await infotools();
        break;

      case "❆ Bom Like Target":
        const bomliketarget = require('./tools/bomliketarget.js');
        await bomliketarget();
        break;

      case "❆ Bot Like Timeline v1":
        const botlike = require('./tools/botlike.js');
        await botlike();
        break;

      case "❆ Bot Like Timeline v2":
        const botlike2 = require('./tools/botlike2.js');
        await botlike2();
        break;

      case "❆ Mass Delete Post/Photo":
        const dellallphoto = require('./tools/dellallphoto.js');
        await dellallphoto();
        break;

      case "❆ Unfollow All Following":
        const unfollall = require('./tools/unfollall.js');
        await unfollall();
        break;

      case "❆ Unfollow Not Followback":
        const unfollnotfollback = require('./tools/unfollnotfollback.js');
        await unfollnotfollback();
        break;

      case "❆ L-C with Followers Target":
        const lnktauto = require('./tools/lnktauto.js');
        await unfollnotfollback();
        break;

      case "❆ F-L with Followers Target":
        const fnlauto = require('./tools/fnlauto.js');
        await unfollnotfollback();
        break;

      case "❆ F-L-C with Followers Target":
        const fftauto = require('./tools/fftauto.js');
        await fftauto();
        break;

      case "❆ F-L-C with Media Target":
        const flmauto = require('./tools/fmtauto.js');
        await flmauto();
        break;

      case "❆ F-L-C with Hashtag Target":
        const fah = require('./tools/fhtauto.js');
        await fah();
        break;

      case "❆ F-L-C with Location Target":
        const flaauto = require('./tools/fltauto.js');
        await flaauto();
        break;

      default:
        console.log("\n ERROR:".red.bold, "Aw, Snap! Something went wrong while displaying this tool!\n".green.bold, "NOT FOUND! Please try again!".yellow.bold);
    }
  } catch (e) {}
}

console.log(chalk `{bold.green
  Ξ TITLE  : Instagram Private Tools x toolsig v2
  Ξ UPLOAD : C:/Users/IPutuJayaAdiPranata/Desktop
  Ξ CODEBY : Aldi Nugraha [Ccocot Ccocot]
  Ξ UPDATE : officialputuid:28/10/2019:12:00:12
  Ξ FILES  : https://github.com/officialputuid/toolsig
  }`);
console.log(chalk `{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log("  Ξ START  : ".bold.red + moment().format('D MMMM YYYY, h:mm:ss a'));
console.log("  Ξ YPATH  : ".bold.red + userHome);
console.log("  Ξ YOUIP  : ".bold.red + addresses);
console.log(chalk `{bold.red   •••••••••••••••••••••••••••••••••••••••••}`);
console.log(chalk `{bold.yellow
  Ξ THANKS : Instagram Private Tools [Original Source File]
           : Zerobyte.ID | BC0DE.NET | NAONLAH.NET | WingkoColi
           : ccocot@bc0de.net and Thank's To SGB TEAM REBORN}`);
console.log('\n')
main();
//by 1dcea8095a18ac73b764c19e40644b52
