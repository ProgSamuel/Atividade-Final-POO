import { User } from './class/user';
import { typeTwitter } from './class/tweet';
import {tweets_db, users_db } from './class/database';

const user1 = new User('Sam', 'sam@example.com', 'senha1');
const user2 = new User('Alice', 'alice@example.com', 'senha2');
const user3 = new User('Bob', 'bob@example.com', 'senha3');

const tweet1 = user1.createTweet('Conteúdo do tweet normal', typeTwitter.Origin);
const tweet2 = user1.createTweet('Conteúdo da resposta', typeTwitter.Reply);
const tweet3 = user1.createTweet('age', typeTwitter.Origin)

// console.log('Tweet 1:', tweet1);
// console.log('Tweet 2:', tweet2);
// console.log(tweets_db);

user1.follow(user2);
user1.follow(user3);

console.log('Sam esta seguindo: ', user1.getfollowing()); // Deve imprimir [user2, user3]
console.log('Seguidores de Alice:', user2.getfollowers());