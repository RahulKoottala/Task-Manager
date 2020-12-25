// CRUD
const {MongoClient, ObjectID} = require('mongodb')

//upper is a shorthand syntax for the above code
/* const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectID = mongodb.ObjectID */

const id = new ObjectID()
console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if(error) {
        return console.log('UYnable to connect to database')
    }

    const db = client.db(databaseName)

/*     db.collection('users').insertOne({
        _id: id,
        name: 'mum',
        age: 54
    }, (error,result) => {
        if(error) {
            return console.log('Unable to enter user')
        }
        console.log(result.ops)
    }) */

/*     db.collection('users').insertMany ([
        {
            name: 'Rohan',
            age: 32
        },
        {
            name: 'Aach',
            age: 26
        }
    ], (error,result) => {
        if(error) {
            return console.log('Unable to enter user')
        }
        console.log(result.ops)
        console.log(result.insertedCount)
    }) */

/*     db.collection('tasks').insertMany ([
        {
            Description: 'task1',
            completed : true
        },
        {
            Description: 'task2',
            completed : false
        },
        {
            Description: 'task3',
            completed : true
        }
    ], (error,result) => {
        if(error) {
            return console.log('Unable to enter user')
        }
        console.log(result.ops)
        console.log(result.insertedCount)
    }) */
})