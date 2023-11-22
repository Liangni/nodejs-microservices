const path = require('path')

const basePath = path.join(__dirname, '/packages')

module.exports = {
    apps : [
        // API GATEWAY
        {
            name: 'Gateway',
            script: basePath + '/gateway/server.js',
            watch: true,
            env: {
            PORT: '<YOUR_GATEWAY_PORT>',
            SERVICE_DB_PORT: '<YOUR_DB_SERVICE_PORT>',
            Q_URI: '<YOUR_Q_URI>'
            }
        }, 
    // DB SERVICE
        {
            name: 'DB Service',
            script: basePath + '/database_service/server.js',
            watch: true,
            env: {
            PORT: '<YOUR_DB_SERVICE_PORT>',
            MONGO_URI:'<YOUR_MONGO_URI>'
            }
        },
        // MAILING SERVICE
        {
            name: 'Mailing Service',
            script: basePath + '/mailing_service/index.js',
            watch: true,
            env: {
                MJ_API_PUBLIC: '<YOUR_MJ_API_PUBLIC>',
                MJ_API_SECRET: '<YOUR_MJ_API_SECRET>',
                FROM_EMAIL: '<YOUR_FROM_EMAIL>',
                FROM_NAME: '<YOUR_FROM_NAME>',
                Q_URI: '<YOUR_Q_URI>'
            }
        }
    ],

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
