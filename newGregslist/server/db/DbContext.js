import mongoose from 'mongoose'
import { AccountSchema, ProfileSchema } from '../models/Account'
import { GameSchema } from '../models/Game';
import { ValueSchema } from '../models/Value'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Games = mongoose.model('Game', GameSchema);
  Consoles = mongoose.model('Console', ConsoleSchema)
  Profiles = mongoose.model('Profile', ProfileSchema, 'accounts');
}

export const dbContext = new DbContext()
