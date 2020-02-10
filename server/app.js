'use strict'

 const {db} = require('./db')
const app = require('./index')
const PORT = 8080

const init = async() => {
  db.authenticate().then(() => {
    console.log('connected to the database');
  })
  db.sync().then(() => {
    console.log('database synced!')
    app.listen(PORT, () => console.log(`server on port ${PORT}`))
  })
}

init()
