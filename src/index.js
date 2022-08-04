import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import Logging from './lib/Logging.js';

dotenv.config();

const TOKEN = process.env.TOKEN || '';

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
  Logging.info('Ready!');
});

// Login to Discord with your client's token
client.login(TOKEN);
