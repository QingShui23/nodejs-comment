exports.success = (code = 200, url = '', data = {}) => {
  if( typeof code === 'object' )
    return { code: 200, data: code };
  return { code: code, url: url, data: data };
}

exports.fail = (code = 403, reason = '', url = '') => {
  return { code: code, reason: reason, url: url };
}

