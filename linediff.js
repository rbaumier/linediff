var diff = (function () {
  let _toLineArray = files => files.map(file => file.split('\n'));

  let diff = (oldfile, newfile) => {
    let [oldlines, newlines] = _toLineArray([oldfile, newfile]);
    return oldlines.reduce((m, l, i) => {
      if (l !== newlines[i])  {
        m.push({
          line: i + 1,
          added: newlines[i],
          removed: l
        });
      }
      return m;
    }, []);
  }

  return diff;
}());
