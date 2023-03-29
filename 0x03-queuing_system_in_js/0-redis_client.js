import {createClient} from 'redis';

const redis_client = createClient();

redis_client.on('error', (error) => {
	console.log(`Redis client not connected to the server: ERROR_MESSAGE}`);
	redis_client.quit();
});

redis_client.on('connect', () => console.log('Redis client connected to the server'));
