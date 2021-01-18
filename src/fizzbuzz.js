module.exports = (n) => {
  
  if (n % 5 === 0 && n % 3 === 0) {
    return 'lazy chiru'
  }

  if (n % 5 === 0) {
    return 'chiru'
  }
  if (n % 3 === 0) {
    return 'lazy'
  }
    return ''
}
