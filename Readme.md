# Master Inquisitor

Wrapper for various [inquirer](https://www.npmjs.com/package/inquirer) libraries to suit most of your requirements!

## Install

`npm i master-inquisitor --save`

Node.js `require`

```
const inquisitor = require('master-inquisitor')
```

ES6 modules `import`

```
import inquisitor from 'master-inquisitor'
```

Import selected namespaces

```
import { folder, repoName } from 'master-inquisitor'
```

## Demo

The file `demo.js` in the repo currently contains some "demo code".

## Usage

The main API is based on [inquirer-shortcuts](https://www.npmjs.com/package/inquirer-shortcuts) which wraps inquirer with some additional useful methods.

```js
const inquisitor = require('master-inquisitor')

// multiple questions
inquirer.prompt([{
  type: "input",
  name: "animal",
  message: "Favorite animal?",
  default: "wapiti"}
])
.then(results => console.log(results.animal));

// single question
inquisitor.question({
  type: "input",
  message: "Favorite animal?",
  default: "wapiti"
})
.then(animal => console.log(animal));

inquisitor.input("Favorite animal?", {default: "wapiti"})
  .then(animal => console.log(animal));

inquirer.confirm("Is the wapiti your favorite animal?")
  .then(answer => console.log(answer));

// choose single option from list
inquirer.list("Favorite animal?", ["cat", "dog", "wapiti"])
  .then(animal => console.log(animal));

// choose single option from "raw" list
inquirer.rawlist("Favorite animal?", ["cat", "dog", "wapiti"])
  .then(animal => console.log(animal));

// press key and make single selection
inquirer.expand("Favorite animal?",
                [{key: "c", name: "cat"}
                 {key: "d", name: "dog"}
                 {key: "w", name: "wapiti"}])
  .then(animal => console.log(animal));

// choose multiple options from checkbox list
inquirer.checkbox("Favorite animals?", ["cat", "dog", "wapiti"])
  .then(animals => console.log(animals));

// enter secret
inquirer.password("Enter password.")
  .then(password => console.log("Don't print passwords!"));
```

## Extensions

- [inquirer-list-input](https://www.npmjs.com/package/inquirer-list-input)
- [inquirer-directory](https://www.npmjs.com/package/inquirer-directory)
- [inquirer-path](https://www.npmjs.com/package/inquirer-path)

### List and text input combined

```js
inquirer..question({
  type: 'list-input',
  // ...
})
```

### Directory

Select a directory

```js
inquirer..question({
  type: 'directory',
  // ...
})
```

### Path

*Currently unavailable* [babel-runtime error](https://github.com/aam229/inquirer-path/issues/1)

Select a path

```js
inquirer..question({
  type: 'path',
  // ...
})
```

## Folder explorer

- [inquirer-folder-explorer](https://www.npmjs.com/package/inquirer-folder-explorer)

```js
inquirer.folder('Please choose a folder', 'src')
.then(folder => console.log(`you selected: ${folder}`))
.catch(err => console.error(err));
```

## Traverse

- [inquirer-traverser](https://www.npmjs.com/package/inquirer-traverser)

For usage, see this [basic example](https://github.com/ta2edchimp/inquiry-traverser/blob/master/examples/basic-usage.js#L7) or the [advanced example](https://github.com/ta2edchimp/inquiry-traverser/blob/master/examples/advanced-usage.js)

```js
traverse({
  /* Put your branched questions object here */
  })
  .then((value) => {
    // Handle a successfull resolution ...
  })
  .catch((err) => {
    // Handle a rejection ...
  });
```


## Menus

Choose from nested menus:
- [inquirer-menu](https://github.com/ewnd9/inquirer-menu/issues/1)

```js
let level = 0;

const redMenu = {
  message: 'red-menu',
  choices: {
    callApi: function() {
      console.log('red-api called');
      return;
    }
  }
};

const blueMenu = {
  message: 'blue-menu',
  choices: {
    callApi: function() {
      console.log('blue-api called');
      return;
    }
  }
};

createMenu() => {
  return {
    message: 'main-menu level ' + level,
    choices: {
      setupData: () => {
        level++;
        return;
      },
      blueMenu: blueMenu,
      redMenu: redMenu
    }
  };
};

inquisitor.menu(createMenu)
  .then(() => {
    // do sth
  })
  .catch((err) => {
    console.log(err.stack);
  });
```

## Ask for repo and npm module name

- [inquirer-npm-name](https://www.npmjs.com/package/inquirer-npm-name)
- [inquirer-repo-exists](https://www.npmjs.com/package/inquirer-repo-exists)

```js
inquisitor.npmName({
  name: 'name',
  message: 'Module Name'
})
.then(answer => console.log(answer.name))

inquisitor.repoName({
  name: 'repoUrl',
  message: 'GitHub repository link (username/repo pair)'
})
.then((repoUrl) => {
})
```

## Secret Credentials

- [inquirer-credentials](https://www.npmjs.com/package/inquirer-credentials)

Example will store the secrets prompted for in the file `.secrets`
Note: `result` is an instance of [dot-file-config](https://github.com/ewnd9/dot-file-config)

```js
let creds = inquisitor.credentials('.secrets')
creds.prompt([
  username,
  password
])
.then((result) => {
  result.data //=> { username: 'string', password: 'string' } 
  result.save() // persists config to fs

  Object.keys(creds.config.data) //=> ['username', 'password'] })
})
```

## Test inquirer

Test your `inquire` prompts, when you write code generators CLI binaries etc.

Save as dev dependency: `npm i master-inquisitor --save-dev`

See [inquirer-test](https://www.npmjs.com/package/inquirer-test) for test examples.

```js
const inquisitor = require('master-inquisitor');
const testRun, { UP, DOWN, ENTER } = inquisitor;
// ...
```

ES6 modules

```js
import testRun, { UP, DOWN, ENTER } from 'master-inquisitor';
// ...
```

## Test suite for this project
TODO

## Development
Just do it!

## License

MIT