module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e19dde81027d553c1832f106df4fde48'),
  },
});
