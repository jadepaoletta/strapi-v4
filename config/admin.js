module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '970f0a8328294634a65e39e6b226d643'),
  },
});
