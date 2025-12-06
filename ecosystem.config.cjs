module.exports = {
    apps: [
      {
        name: "site", 
        script: "node_modules/next/dist/bin/next",
        args: "start",
        interpreter: '/home/ubuntu/.local/share/fnm/node-versions/v20.18.0/installation/bin/node', 
        cwd: "/home/ubuntu/staskazakovcom", 
        env: {
          NODE_ENV: "production", 
          PORT: 3000, 
        },
      },
    ],
  };
  