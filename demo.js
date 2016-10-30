const inquisitor = require('./index')

function multiple() {
  // multiple questions
  inquirer.prompt([{
    type: "input",
    name: "animal",
    message: "Favorite animal?",
    default: "wapiti"}
  ])
  .then(results => console.log(results.animal));
}

function single() {
  // single question
  inquisitor.question({
    type: "input",
    message: "Favorite animal?",
    default: "wapiti"
  })
  .then(animal => console.log(animal));
}

function input() {
  inquisitor.input("Favorite animal?", {default: "wapiti"})
    .then(animal => console.log(animal));
}

function confirm() {
  inquirer.confirm("Is the wapiti your favorite animal?")
    .then(answer => console.log(answer));
}

function list() {
  // choose single option from list
  inquirer.list("Favorite animal?", ["cat", "dog", "wapiti"])
    .then(animal => console.log(animal));
}

function rawList() {
  // choose single option from "raw" list
  inquirer.rawlist("Favorite animal?", ["cat", "dog", "wapiti"])
    .then(animal => console.log(animal));
}

function keySelect() {
  // press key and make single selection
  inquirer.expand("Favorite animal?",
                  [{key: "c", name: "cat"}
                   {key: "d", name: "dog"}
                   {key: "w", name: "wapiti"}])
    .then(animal => console.log(animal));
}

function checkboxes() {
  // choose multiple options from checkbox list
  inquirer.checkbox("Favorite animals?", ["cat", "dog", "wapiti"])
    .then(animals => console.log(animals));
}

function seret() {
  // enter secret
  inquirer.password("Enter password.")
    .then(password => console.log("Don't print passwords!"));
}


function listInput() {
  inquirer.question({
    type: 'list-input',
    name: 'colors',
    message: 'Pick favorite color',
    choices: ['red', 'green', 'blue'],
    default: 'red'
  }).then(color => console.log('color:', color))
}


function chooseDir() {
  inquirer.question({
    type: 'directory',
    message: 'Pick favorite folder',
    name: 'folder'
  }).then(folder => console.log('folder:', folder))
}

// TODO: more
