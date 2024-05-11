module.exports = ({ env }) => ({
  auth: {
    secret: 'XhwZ8zfJClt6atArtag1/w==',
  },
  apiToken: {
    salt: 'XhwZ8zfJClt6atArtag1/w==',
  },
  transfer: {
    token: {
      salt: 'XhwZ8zfJClt6atArtag1/w==',
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
