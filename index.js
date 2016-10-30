const inquirer = require('inquirer-shortcuts')
const menu = require('inquirer-menu');
const askNpmName = require('inquirer-npm-name');
const askRepoName = require('inquirer-repo-exists');
const folder = require('inquirer-folder-explorer');
const askCredentials = require('inquirer-credentials');
const test = require('inquirer-test');

import { PathPrompt } from 'inquirer-path';

inquirer.registerPrompt('path', PathPrompt);
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

module.exports = merge(inquirer, {
  menu,
  folder,
  npm,
  repo,
  credentials,
  testRun
})