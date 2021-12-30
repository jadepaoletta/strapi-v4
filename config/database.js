const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});

/* Original
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bipolab'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
*/