module.exports = {
    apps: [
      {
        name: "site", 
        script: "npm",
        args: "start", 
        cwd: "/home/ubuntu/staskazakovcom", 
        env: {
          NODE_ENV: "production", 
          PORT: 3000, 
        },
      },
    ],
  };
  