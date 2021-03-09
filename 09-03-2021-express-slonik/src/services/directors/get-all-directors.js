const { getAllDirectors } = require('../../queries/directors')

module.exports = db => async (_, res, next) => {
  const queryResult = await getAllDirectors(db)

  if(!queryResult) {
    next(new Error('something went wrong!'))
    return
  }

  const { rows, rowCount } = queryResult

  res.status(200).json({
    success: true,
    data: rows,
    length: rowCount
  })
}