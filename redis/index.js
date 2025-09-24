import Redis from "ioredis";

const redis = new Redis({
  host: "localhost",
  port: 6379,
});

(async function () {
  //? List

  //* LPUSH
  // await redis.lpush("mylist:1", "a", "b", "c");

  //* RPUSH
  // await redis.rpush("mylist:2", "a", "b", "c");

  //* LPOP
  // const value = await redis.lpop("mylist:1");
  // console.log(value);

  //* LLEN
  // const len = await redis.llen("mylist:2");
  // console.log(len);

  //* LRANGE
  // const range = await redis.lrange("mylist:2", 0, -1);
  // console.log(range);

  //? Set
  //* SADD
  // const added = await redis.sadd("myset:1", "apple", "banana", "coconut");
  // console.log(added);

  //* SREM
  // const removed = await redis.srem("myset:1", "banana");
  // console.log(removed);

  //? Hash
  //* HSET
  // const added = await redis.hset("myhash:1", "name", "John", "age", 30);
  // console.log(added);

  // await redis.hset("user:2000", {
  //   name: "John",
  //   age: 30,
  //   email: "sYt4o@example.com",
  // });

  //* HGET
  const value = await redis.hget("myhash:1", "name");
  console.log(value);
})();
