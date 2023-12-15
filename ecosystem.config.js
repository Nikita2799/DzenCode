module.exports = {
  apps: [
    {
      name: "code",
      script: "./dist/server.js",
      watch: true,
      watch_delay: 1000,
      ignore_watch: ["node_modules", "./img"],
    },
  ],
};
