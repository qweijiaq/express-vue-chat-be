import mongoose from "mongoose"

const db = mongoose.createConnection('mongodb://localhost:27017/chat')
db.on('error', console.error.bind(console, 'MongoDB connect error'))
db.once('open', () => {
    console.info('MongoDB connect success')
})

export default db