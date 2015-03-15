let diff = (function () {
  let _toLinesArray = (...files) => files.map(file => file.split('\n'));
  let _line = (number, added = '', deleted = '') => ({ number, added, deleted });

  let linediff = (oldfile, newfile) => {
    let [oldlines, newlines] = _toLinesArray(oldfile, newfile);
    let oldlength = oldlines.length;

    return oldlines
      // diff between old and new lines
      .reduce((m, l, i) => {
        if (l !== newlines[i])  {
          m.push(_line(i + 1, newlines[i], l));
        }
        return m;
      }, [])
      // add new lines to the end
      .concat(newlines
        .slice(oldlength)
        .map((l, i) => _line(i + oldlength + 1, l))
      );
  }

  return linediff;
}());
