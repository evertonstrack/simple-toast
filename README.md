# simple-toast

Simple toast in plain javascript in no dependencies. Build with ECMAScript 6, for compatibility with older browsers use a transpiler like [Babel](https://babeljs.io/)

# Features
- Build in plain javascript (no dependencies)
- 4 types o toast (Success, Error, Info, Warning)


..under construction

# Usage

```javascript

const Toast = new ToastMessenger();

// Exemple
// Toast.success(description, title)

// Description
Toast.success('Simple toast in plain javascript in no dependencies');

// Description and title
let message = [
  'Simple toast in plain javascript in no dependencies.', // description
  'Simple toast' // title - title has default texts: "Success", "Error", "Info", "Warning"
];

Toast.success(...message);


```


# Copyright

MIT © [Everton Strack](https://evertonstrack.com.br)
