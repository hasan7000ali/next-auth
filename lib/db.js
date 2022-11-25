import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  //remove dummypassword :p
  const client = await MongoClient.connect(
    'mongodb+srv://hasan7000ali:mydummypassword@cluster0.ntrwp.mongodb.net/next-auth?retryWrites=true&w=majority'
  );

  return client;
}
