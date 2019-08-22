const withCss = require( '@zeit/next-css' );

module.exports = withCss();

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/basket': { page: '/basket' }
    }
  },
  assetPrefix: !debug ? '/Next-gh-page-example/' : ''
}
