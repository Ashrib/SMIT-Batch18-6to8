import Redis from "ioredis";


const redis = new Redis({
    port: 6379, // Redis port
    host: "172.28.240.1", // Redis host
    username: "default", // needs Redis >= 6
    db: 0, // Defaults to 0
})



redis.on("connect", () => {
    console.log("redis connected")
})


redis.on("error", (err) => {
    console.log("redis error")
    console.log(err)

})

export { redis }