
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

const queryParams = getQueryParams(location.search);
const successUrl = queryParams['successUrl'] || '#';
const failureUrl = queryParams['failureUrl'] || '#';
const cancelUrl = queryParams['cancelUrl'] || '#';
document.querySelector('#successLink').setAttribute('href', successUrl);
document.querySelector('#failureLink').setAttribute('href', failureUrl);
document.querySelector('#cancelLink').setAttribute('href', cancelUrl);