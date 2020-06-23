require('dotenv/config')

const MyClient = require('./Base/Struct/MyClient');

const client = new MyClient();

client.launch();
