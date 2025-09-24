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
  
})();
