// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:05 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ97pnWpAa13IpHQzA0Rq8q3tIP5eVSg+nAq7763CF8CfuGR22hBcZqQpIsgHJSbTGJqa9pRvuiD9NLiQEjvTyZCsJt3Oaguz+yfXgHqujPbPrfTjIsPxpwwvrdMvJfoxYrbEGApDR/08D1GRwSz5Z0heHarsN7RLQD8OF7s0qgvI/97osKQT9KLmFTLDL6YrX7tJ+JTi08zJWBSxLCrQ02qF0bUff69EwTh3/iT4/qjDenOijQd0TaJubclZ5CXO3aNDBHSPoGAzz76ClPxtymDIsNGkOmIDn+Uzti7RLMj5Lwkt4ImplEuLB/833Z6zFJLkX4hJ8+Qpk3O6sS0scFS5jau5WoWp/K1bWj0eTFRYp7n+cJYSYk52iS1vMJacqw8WwjIb+lVbbb5nnLN0akrUT+KzYrq77RgtQNOjC4HHAqFiX3/W8Npjp4AlcervD/6mYpQKgbkQj6wYWvM0Ged7KhefQUOSLAA6N7B3OXqPaDc6MKPHfFMdMDWdaFV1SUNTJVWx5E38PedcoMUjePra6c7xa4biUvl2mEypv1Qf4VuqhzyuwD6jlcB6QI0J8Qo3it9eKwgjdCE+VtPI5oZUwef3s9vDflKDAozwRw2CqNViKRPiBVY/ntahPbBY3ltBHfqa97ciqfMUo+21kSuaL22W+VjSXM3BDgRgY7QQXiMxi+sifVRfmLTJ2OC97OEcBjLmMdPOTIrD6S9Vpg+6tTV/TbyIKnGngXCm3iQyK+cVw6web6EiMAkUqa+ERdvoUeXRjxf8rDkEa2UM5g7I2qNFx1oGM7iTsn2i7LQ30fTDXC39HxRrv5wDsKNdywtZDEs0Bbj8S2FZJda041H7c92JarrTGdIzMseQmR1XYIFx3wu+OB2Z+Q52ygacMEA/homTqNjs3VXBImZAjC1geIUllkbXXaG4fkj4jXjf8IZ1x5UjoI8/avrcfPNREFuThyDDjPi1c2u/unzrlDHQ6cE3FlK+TADjb9EMWIXrLPTQmHR+GQtqvKTQs1t1JT5nLr16EN3XhOG+JtpNwYqYJdRyjpD9MEOnKPMPvLoCfN8SaPNsfuWI/vJSQc64l0q80hNBkODVZ0oB+RWzAZFnin1W1zSdxQ69yDaDdcSgPJW5fTk68q63516kU5Avfq5vcu3r/upyyiDT5Kkd/DhlPZ/wNnVbGbZYbqFM5BaeV4glW402pGycyLNO+2MfHk5J95jH';const _IH='70e649bb50cc93940ddbb914164abea5f7aaa5c9c7dc8a5c2a5e74381e85769d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
