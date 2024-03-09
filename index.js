const axios = require('axios');

async function getFact() {
  const url = 'https://api.aakhilv.me/fun/facts';
  const { data } = await axios.get(url);
  return data[0];
}

async function main() {
  console.time('getFactTimer');
  const promises = [];
  for (let i = 0; i < 5; i++) {
    promises.push(getFact());
  }
  const results = await Promise.all(promises);
  for (let i = 0; i < 5; i++) {
    console.log(`result no.${i + 1} : `, results[i]);
  }
  console.timeEnd('getFactTimer');
}

main();
