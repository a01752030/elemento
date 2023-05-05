const mongoose = require('mongoose')

mongoose.connection.on('open', ()=> console.log('Conexion exitosa'))

async function conectDB({ host, port, dbName }) {
    const uri = `mongodb://${host}:${port}/${dbName}`
    await mongoose.connect(uri, { useNewUrlParser: true })

}
module.exports = conectDB