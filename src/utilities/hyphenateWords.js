function hyphenateWords(str) {
  return str.replace(/[_']\w/g, '-').toLowerCase()
}

export default hyphenateWords
