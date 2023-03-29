import {createClient} from 'redis';

const redis_client = createClient();

redis_client.on('error', (error) => {
	console.log(`Redis client not connected to the server: ERROR_MESSAGE}`);
	redis_client.quit();
});

redis_client.on('connect', () => console.log('Redis client connected to the server'));

const setNewSchool = ((schoolName, value) => {
        redis_client.set(schoolName, value);
});

const displaySchoolValue = ((schoolName) => {
        redis_client.get(schoolName, (_error, value) => {
                if (value) console.log(value);
        });
});

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFranscisco', '100');
displaySchoolValue('HolbertonSanFranscisco')
