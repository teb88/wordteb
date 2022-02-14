import dict from '../assets/dict';

export function hash(str) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return hash;
}

function getDateString() {
  const date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function dateToHash() {
  return hash(getDateString());
}

export function dateToIndex() {
  return Math.abs(dateToHash() % dict.length);
}

export function getWinnerWord() {
  return dict[dateToIndex()];
}
