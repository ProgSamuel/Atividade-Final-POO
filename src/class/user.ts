import { randomUUID } from 'crypto';
import { Tweet, typeTwitter } from './tweet';
import {tweets_db, users_db } from './database'

function generateRandomString(numCharacters: number): string {
    const min = Math.pow(10, numCharacters - 1);
    const max = Math.pow(10, numCharacters) - 1;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber.toString().padStart(numCharacters, '0');
}

export class User {
private idUser: string;
private username: string
private tweets: Tweet[] = [];
private following: User[] = [];
private followers: User[] = [];


  constructor(private name: string, private email: string, private password: string) {
    this.idUser = randomUUID();
    this.username= name + generateRandomString(5);

    users_db.push(this)
  }

  public createTweet(content: string, type: typeTwitter):Tweet {
    const tweet = new Tweet(content, type);
    this.tweets.push(tweet);
    return tweet;
  }

  public follow(user: User): void {
    if (user !== this && !this.following.includes(user)) {
      this.following.push(user);
      user.followers.push(this)
    }
  }
  

  public getfollowing(): User[] {
    return this.following;
  }
  public getfollowers(): User[]{
    return this.followers
  }
}
