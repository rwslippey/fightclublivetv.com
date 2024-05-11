module.exports = ({ env }) => ({
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
  },
   'transformer': {
      enabled: true,
      config: {
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
        requestTransforms : {
          wrapBodyWithDataKey: true
        },
        hooks: {
          preResponseTransform : (ctx) => console.log('hello from the preResponseTransform hook!'),
          postResponseTransform : (ctx) => console.log('hello from the postResponseTransform hook!')
        },
        contentTypeFilter: {
          mode: 'allow',
          uids: {
            'api::event.event': true,
            'api::promoter.promoter': {
              'GET':true,
            }
          }
        },
        plugins: {
          ids: {
            'slugify': true,
          }
        }
      }
    },
    // ..
  });