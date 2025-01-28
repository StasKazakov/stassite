module.exports = {
    apps: [
      {
        name: "site", 
        script: "npm",
        args: "start", 
        cwd: "/home/ubuntu/stassite", 
        env: {
          NODE_ENV: "production", 
          PORT: 3000, 
        },
      },
    ],
  };
  