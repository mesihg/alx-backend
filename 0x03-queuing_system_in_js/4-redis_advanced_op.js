import redis from 'redis';

const client = redis.createClient();

client.on('connect', () => {
  console.log('Redis client connected to the server');
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});

function setNewSchool(schoolName, value) {
  client.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
  const getAsync = promisify(client.get).bind(client);
  const value = await getAsync(schoolName);
  console.log(value);
}

function createHash(hashName, values) {
  client.hmset(hashName, values, redis.print);
}

function displayHash(hashName) {
  client.hgetall(hashName, (error, value) => {
    if (error) console.log(error);
    console.log(value);
  });
}

createHash('HolbertonSchools', 'Portland', '50', 'Seattle', '80', 'New York', '20', 'Bogota', '20', 'Cali', '40', 'Paris', '2');
displayHash('HolbertonSchools');
