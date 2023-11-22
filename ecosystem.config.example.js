const path = require('path')

const basePath = path.join(__dirname, '/packages')

module.exports = {
  apps : [{
    name: 'Gateway',
    script: basePath + '/gateway/server.js',
    watch: true,
    env: {
      PORT: '<YOUR_GATEWAY_PORT>',
      SERVICE_DB_PORT: '<YOUR_DB_SERVICE_PORT>'
    }
  }, {
    name: 'DB Service',
    script: basePath + '/database_service/server.js',
    watch: true,
    env: {
      PORT: '<YOUR_DB_SERVICE_PORT>',
      MONGO_URI:'<YOUR_MONGO_URI>'
    }
  }],

  // deploy : {
  //   production : {
  //     user : 'SSH_USERNAME',
  //     host : 'SSH_HOSTMACHINE',
  //     ref  : 'origin/master',
  //     repo : 'GIT_REPOSITORY',
  //     path : 'DESTINATION_PATH',
  //     'pre-deploy-local': '',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
  //     'pre-setup': ''
  //   }
  // }
};
