import { createClient, print } from 'redis';

const redis_client = createClient();

redis_client.on('error', (error) => {
  console.log(`Redis client not connected to server: ${error.message}`);
});

redis_client.on('connect', () => {
  console.log('Redis client connected to the server');
});

redis_client.hset('HolbertonSchools', 'Portland', 50, print);
redis_client.hset('HolbertonSchools', 'Seattle', 80, print);
redis_client.hset('HolbertonSchools', 'New York', 20, print);
redis_client.hset('HolbertonSchools', 'Bogota', 20, print);
redis_client.hset('HolbertonSchools', 'Cali', 40, print);
redis_client.hset('HolbertonSchools', 'Paris', 42, print);
redis_client.hgetall('HolbertonSchools', (_error, value) => console.log(value));






// import createClient from "redis";

// const redis_client = createClient();


// redis_client.on('error', (error) => {
//   console.log(`Redis client not connected to server: ${error.message}`);
// });

// redis_client.on('connect', () => {
//   console.log('Redis client connected to the server');
// });


// redis_client.on('error', (error) => {
//     console.log(`Redis client not connected to the server: ${error.message}`);
// });

// redis_client.on('connect', () => console.log('Redis client connected to the server'));

// redis_client.hset('HolbertonSchools', 'Portland', 50, print);
// redis_client.hset('HolbertonSchools', 'Seatle', 80, print);
// redis_client.hset('HolbertonSchools', 'New York', 20, print);
// redis_client.hset('HolbertonSchools', 'Bogota', 20, print);
// redis_client.hset('HolbertonSchools', 'Cali', 40, print);
// redis_client.hset('HolbertonSchools', 'Paris', 42, );
// redis_client.hgetall('HolbertonSchools', (_error, value) => console.log(value));