const config = require('../config/index.js');

exports.success = (code = 200, url = '', data = {}) => {
  if( typeof code === 'object' )
    return { code: 200, version: config.version, data: code };
  return { code: code, version: config.version, url: url, data: data };
}

exports.fail = (code = 403, reason = '', url = '') => {
  return { code: code, version: config.version, reason: reason, url: url };
}

