
function getQueryParams (queryString) {
  if (!queryString) {
    return {};
  }

  return (/^[?#]/.test(queryString) ? queryString.slice(1) : queryString)
    .split(`&`)
    .reduce((params, param) => {
      let [key, value] = param.split(`=`);
      value = value ? decodeURIComponent(value.replace(/\+/g, ` `)) : ``;
      params[key] = params.hasOwnProperty(key) ? [value].concat(params[key]) : value;
      return params;
    }, {});
}

console.log(getQueryParams(location.search));