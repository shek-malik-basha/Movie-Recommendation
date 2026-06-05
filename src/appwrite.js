import { Client, Account, Databases, ID, Query } from 'appwrite'

const ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const COLLECTION_ID = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

console.log("ENDPOINT:", ENDPOINT);
console.log("PROJECT_ID:", PROJECT_ID);
console.log("DATABASE_ID:", DATABASE_ID);
console.log("COLLECTION_ID:", COLLECTION_ID);

const client = new Client();

client.setEndpoint(ENDPOINT);
client.setProject(PROJECT_ID);

const account = new Account(client);
const databases = new Databases(client);

// Ping the Appwrite backend to verify setup
client.call(() => {
  console.log('Appwrite connection verified');
}).catch(error => {
  console.error('Failed to connect to Appwrite:', error);
});

export const updateSearchCount = async (searchTerm, movie) => {
  // 1. Use Appwrite SDK to check if the search term exists in the database
 try {
  const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.equal('searchTerm', searchTerm),
  ])

  // 2. If it does, update the count
  if(result.documents.length > 0) {
   const doc = result.documents[0];

   await databases.updateDocument(DATABASE_ID, COLLECTION_ID, doc.$id, {
    count: doc.count + 1,
   })
  // 3. If it doesn't, create a new document with the search term and count as 1
  } else {
   await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
    searchTerm,
    count: 1,
    movie_id: movie.id,
    poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
   })
  }
 } catch (error) {
  console.error(error);
 }
}

export const getTrendingMovies = async () => {
 try {
  const result = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
    Query.limit(5),
    Query.orderDesc("count")
  ])

  return result.documents;
 } catch (error) {
  console.error(error);
 }
}

export { client, account, databases };
