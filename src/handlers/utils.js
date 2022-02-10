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

export function dateToIndex() {
  const date = new Date();
  const dateStr = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;
  return Math.abs(hash(dateStr) % dict.length);
}

export function getWinnerWord() {
  return dict[dateToIndex()];
}
