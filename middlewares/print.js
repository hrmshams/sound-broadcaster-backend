function print(req, res, next){
  console.log('a request got from : ' + req.url)
  res.send('i am stronger than you!')
  // next()
}

module.exports = print
