### Usage

```javascript
let file1 = `first line
second line
third line`;

let file2 =
  `first line
second line`;

var differences = diff(file1, file2);

console.log(differences); // [ { line: 3, added: undefined, removed: 'third line' } ]
```
