import {createClient} from 'redis';
import {promisify} from 'util'

const redis_client = createClient();

redis_client.on('error', (error) => {
	console.log(`Redis client not connected to the server: ERROR_MESSAGE}`);
	redis_client.quit();
});

const getAsync = promisify(redis_client.get).bind(redis_client);

const setNewSchool = ((schoolName, value) => {
        redis_client.set(schoolName, value);
});

const displaySchoolValue = ((schoolName) => {
        redis_client.get(schoolName, (_error, value) => {
                if (value) console.log(value);
        });
});

async function main(){
    await displaySchoolValue('Holberton');
    setNewSchool('HolbertonSanFranscisco', '100');
    await displaySchoolValue('HolbertonSanFranscisco');
}

redis_client.on('connect', () => console.log('Redis client connected to the server'));
main();
