require('../../modules/esnext.array.flat');
require('../../modules/esnext.array.unscopables.flat');

module.exports = require('../../internals/entry-unbind')('Array', 'flat');
