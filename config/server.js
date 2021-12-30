module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('DATABASE_URL')
});
/* DATABASE_URL=postgres://strapi_mz5d_user:wNuXC8mjGv7jkgWBSGTTjq9Qlo0xXtS1@dpg-c76nm79g7hp8rc6mqukg/strapi_mz5d */
