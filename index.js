const inquirer = require('inquirer-shortcuts')
const menu = require('inquirer-menu');
const askNpmName = require('inquirer-npm-name');
const askRepoName = require('inquirer-repo-exists');
const folder = require('inquirer-folder-explorer');
const traverser = require('inquirer-traverser');
const askCredentials = require('inquirer-credentials');
const testRun = require('inquirer-test');

const traverse = traverser(inquirer);

// var MrInquirer = require('mr-inquirer');
//Adding Mr Inquirer to the propts as path
// Inquirer.registerPrompt('path', MrInquirer.path);
// Inquirer.registerPrompt('graph-path', MrInquirer.graphPath);

// const { PathPrompt } = require('inquirer-path');

// inquirer.registerPrompt('path', PathPrompt);
inquirer.registerPrompt('list-input', require('inquirer-list-input'));
inquirer.registerPrompt('directory', require('inquirer-directory'));

const npmName = () => {
  return (question) => {
    return askNpmName(question, inquirer);
  }
}

const repoName = () => {
  return (question) => {
    return askRepoName(question, inquirer);
  }
}

const credentials = (file) => {
  let obj = askCredentials(file);
  obj.prompt = obj.run;
  return obj
}

const { merge } = require('lodash');

module.exports = merge(inquirer, {
  menu,
  folder,
  traverse,
  npmName,
  repoName,
  credentials,
  testRun
})