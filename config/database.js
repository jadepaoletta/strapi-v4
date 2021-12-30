/* const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: env('DATABASE_FILENAME', path.join(__dirname, '..', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
}); */
// const parse = require('connection-string');

// const { host, port, database, user, password } = parse(env("DATABASE_URL"));
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', '127.0.0.1'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'bipolab'),
      url: env('DATABASE_URL'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', '1234'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
/* DATABASE_URL=postgres://strapi_mz5d_user:wNuXC8mjGv7jkgWBSGTTjq9Qlo0xXtS1@dpg-c76nm79g7hp8rc6mqukg/strapi_mz5d */
