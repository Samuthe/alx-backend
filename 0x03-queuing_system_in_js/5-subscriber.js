import { createClient } from "redis";

// On connect, it should log the message R
// On error, it should log the message Redis client not connected to the server: ERROR MESSAGE
// It should subscribe to the channel holberton school channel
// When it receives message on the channel holberton school channel, it should log the message to the console
// When the message is KILL_SERVER, it should unsubscribe and quit

const redis_client = createClient();

redis_client.on('connect', () => {
    console.log('Redis client connected to the server');
});

redis_client.on('error', (error) => {
    console.log(`Redis client not connected to the server: ${error.message}`)
})

redis_client.on('message', (channel, message) => {
    console.log(message);
    if(message === 'KILL_SERVER') {
        redis_client.unsubscribe(channel);
        redis_client.quit();
    }

    redis_client.subscribe('holberton school channel');

});