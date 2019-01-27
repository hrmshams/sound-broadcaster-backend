function print(req, res, next){
  let url = req.url
  if (url != '/favicon.ico')
    console.log('a request got from : ' + url)

  next()
}

module.exports = print
