import jsMd5 from "js-md5";

function generateSign(params, key) {
  const sortedParams = Object.keys(params)
    .filter((key) => params[key] !== "")
    .sort()
    .reduce((result, key) => {
      result[key] = params[key];
      return result;
    }, {});

  const stringA = Object.entries(sortedParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  const stringSignTemp = `${stringA}&key=${key}`;

  const signValue = jsMd5(stringSignTemp).toUpperCase();

  return signValue;
}

const params = {
  store_id: 294,
  type: 1,
};
const key = "019776af1ec28f0ec4162d10655b4fe3";
const sign = generateSign(params, key);
console.log(sign);
