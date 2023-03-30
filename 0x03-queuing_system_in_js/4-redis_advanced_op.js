import redis from 'redis';

const client = redis.createClient();

function createHash (hashName, fieldName, fieldValue) {
  client.hmset(hashName, fieldName, fieldValue, redis.print);
}

function displayHash (hashName) {
  client.hgetall(hashName, (error, value) => {
    if (error) console.log(error);
    console.log(value);
  });
}

function getAll () {
  const obj = {
    Portland: 50,
    Seattle: 80,
    'New York': 20,
    Bogota: 20,
    Cali: 40,
    Paris: 2
  };

  for (const [field, value] of Object.entries(obj)) {
    createHash('HolbertonSchools', field, value);
  }
  displayHash('HolbertonSchools');
}

client.on('connect', () => {
  console.log('Redis client connected to the server');
  getAll();
});

client.on('error', (error) => {
  console.log(`Redis client not connected to the server: ${error}`);
});
