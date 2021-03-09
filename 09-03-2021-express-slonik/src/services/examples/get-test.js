// Require query if it is needed

module.exports = db => (req, res, next) => {
  // Use 'db' argument to passing it to query previously required

  res.status(200).json({
    success: true,
    data: 'test is working!'
  })
}