// middleware/checkLoggedIn.js
function checkLoggedIn(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: 'Not logged in' });
  }
  next();
}

module.exports = checkLoggedIn;