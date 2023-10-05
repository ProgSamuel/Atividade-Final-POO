import { randomUUID } from 'crypto';
import {  tweets_db } from "./database";
import { User } from './user';

export enum typeTwitter {
  Origin = 'origin',
  Reply = 'reply',
}

export class Tweet {
  private idTweet: string;
  constructor(private content: string, private type: typeTwitter) {
    this.idTweet = randomUUID();
    tweets_db.push(this)
  }

  public createTweet(content: string, type: typeTwitter): Tweet {
    const tweet = new Tweet(content, type);
    return tweet;
  }
}

