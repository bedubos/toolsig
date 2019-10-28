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
  message: "[AUTO RUN] Select tools:\n  F-L-C ? Follow-Like-Comment!\n\n",
  choices: [
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

      case "❆ Bom Like Target":
        const bomliketarget = require('../tools/bomliketarget.js');
        await bomliketarget();
        break;

      case "❆ Bot Like Timeline v1":
        const botlike = require('../tools/botlike.js');
        await botlike();
        break;

      case "❆ Bot Like Timeline v2":
        const botlike2 = require('../tools/botlike2.js');
        await botlike2();
        break;
        
      case "❆ Mass Delete Post/Photo":
        const dellallphoto = require('../tools/dellallphoto.js');
        await dellallphoto();
        break;

      case "❆ Unfollow All Following":
        const unfollall = require('../tools/unfollall.js');
        await unfollall();
        break;

      case "❆ Unfollow Not Followback":
        const unfollnotfollback = require('../tools/unfollnotfollback.js');
        await unfollnotfollback();
        break;

      case "❆ L-C with Followers Target":
        const lnktauto = require('../tools/lnktauto.js');
        await unfollnotfollback();
        break;

      case "❆ F-L with Followers Target":
        const fnlauto = require('../tools/fnlauto.js');
        await unfollnotfollback();
        break;

      case "❆ F-L-C with Followers Target":
        const fftauto = require('../tools/fftauto.js');
        await fftauto();
        break;

      case "❆ F-L-C with Media Target":
        const flmauto = require('../tools/fmtauto.js');
        await flmauto();
        break;

      case "❆ F-L-C with Hashtag Target":
        const fah = require('../tools/fhtauto.js');
        await fah();
        break;

      case "❆ F-L-C with Location Target":
        const flaauto = require('../tools/fltauto.js');
        await flaauto();
        break;

      default:
        console.log("\n ERROR:".red.bold, "Aw, Snap! Something went wrong while displaying this tool!\n".green.bold, "NOT FOUND! Please try again!".yellow.bold);
    }
  } catch (e) {}
}
console.log(chalk `{bold.yellow
  ❆ Bom Like Target = Fitur Bom Like Post/Media Target
  ❆ Bot Like Timeline v1 = Fitur Like Timeline/Beranda dengan Ittyw+Delay!
  ❆ Bot Like Timeline v2 = Fitur Like Timeline/Beranda Otomatis dengan Cursor!
  ❆ Mass Delete Post/Photo = Hapus Semua Foto/Post/Video Akun!
  ❆ Unfollow All Following = Hapus Semua Following Akun!
  ❆ Unfollow Not Followback = Hapus Semua Following Yang Tidak Follback Akun!
  ❆ L-C with Followers Target = Like & Comment Only dengan Followers Target!
  ❆ F-L with Followers Target = Follow & Comment Only dengan Followers Target!
  ❆ F-L-C with Followers Target = Follow, Like, Comment dengan Followers Target!
  ❆ F-L-C with Media Target = Follow, Like, Comment dengan Media/Post Target!
  ❆ F-L-C with Hastag Target = Follow, Like, Comment dengan Hashtag Target!
  ❆ F-L-C with Location Target = Follow, Like, Comment dengan IDLokasi Target!
  }`);
main();
//by 1dcea8095a18ac73b764c19e40644b52
