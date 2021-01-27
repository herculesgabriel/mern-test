import { MongoClient } from 'mongodb';

const DB_URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

const connection = () => MongoClient
  .connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(conn => conn.db(DB_NAME))
  .catch(err => {
    console.log(err)
    process.exit(1)
  });

export default connection;
