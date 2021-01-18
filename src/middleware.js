module.exports = (req, res, next) => {
  if(isNaN(req.query.n)) throw Error('Invalid input')
  next()
}