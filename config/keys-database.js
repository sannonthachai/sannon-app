const dbPassword = 'mongodb+srv://chaizaaa:chai41742@cluster0-svfcn.mongodb.net/test?retryWrites=true&w=majority'
const setMongoose = { useCreateIndex: true , useNewUrlParser: true , useFindAndModify: false }
const setMongo = { useNewUrlParser: true ,  useUnifiedTopology: true }

module.exports = {
    mongoURI: dbPassword,
    mongoose: setMongoose,
    mongo: setMongo
}