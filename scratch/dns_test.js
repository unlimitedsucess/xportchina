const dns = require('dns');

dns.lookup('smtp.gmail.com', (err, address, family) => {
  if (err) {
    console.error('DNS Lookup Failed:', err);
  } else {
    console.log('Address:', address);
    console.log('Family: IPv', family);
  }
});
