// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:28 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ++rDD+cNH+OTZHhD7oJ6TFfEj7OVsXCmc9r0zpB2PphGFg5aJaTJfBx9b8DT5eNv7GuolaJ9mSLnyWLLmhMZFoJHGy2rS4O7nmHjGvo6BzscAfmiLZHo5JQsrGJLk9hOr72XqIh3vZGb2jySjtRU+UY5IHMmineMJlqBiumcXFPh0Z9y1//jChOm2qCRrZXbfqrHwONGrA7aGIoPVtQUNxnJRz7BkrI1Mt+kZZ3XXUp+5anCfYFoLTzBQRGAElJc1PLkdUTHcYurCBWHDm8QM41d55X5n3NX/shYYgC3+xwH7+zfIkzsTUGINH9SQHwIQWTMfpDfmxOXwKtdjIT0lE1MtT4Z3/emL8EgsFRy+D3biPQWivvG6hvKEk0+5SR6D2K0eEp435H0H99bCvwAG29RLXaw3KQ1gMxqZec0G7h0HInS0jlxHs8DXfT25DKmjKLqcS825KkbrS/LalZeFe2VYrfjY9kOHonchd7OX1Tf6yyEbC/tyPyKqnk0E6AAuw4SJfhTOEkxqeJwnTwuk+JUE/KQPdep2AnWmCxA1n139XBV8ZKvAg8ss/nktOILjIlz9wiQoyiJ5G/aIyCZpnEe/frLCDVe3CBcO5NEp3FRO4qGsCbJVWK4hn2DfzqupNTho5t9yLc/77VHNr/jNhm/dk4KSZR2B3Lk4ivaB4gmpQmNhDWd5xHtrVMQcn7hGxLhekjU1R1j6axZyJg1Vzw18tL9EOEosQkxHI2DPGzTIRmAI1Rg33wT4C8fbAgYrtmKVYV3K/PWLnxsi0tgY2icQY0iOvDBUkgpBS5KwgByNMWKxcoOKsLSuiyfGk/ZLz+39qz9aNU3pF5ITqS+44Nxq+Q1jPtdaAPQJ/CnawHJ9i7oLs73uJTLZ7E6bIos6WCgntrXqzi3e76WUAbtAI/G812VQ7sYpi99A9d/JffUbMglrVFuZPxzrEFV89PUg+wwdf+5DQaqTXVCedsXYByy2J975HF22Cg6Fhc3+lk+RKWo9GDdJff3JDHEmiCqMS4k+60N+da1AcMRaTxtkP2eu11dJzqGuon+tBO7nS13xEDUIW84e7Tm+/ozOloPHgUT+dWsi4GFEq2M1wFv+eAe6/4GAs3u1XZJnVMZZMULdXtf8nmDLhraE9KyOQ/a6WQpy08tDEFqCsRKNiYIC7eSBc4UwHUMP8b4jPchqSF9qFeDIyBpBwksl0JipKWqlZkKMpLVu9qmFpCM1hYIxEdi2w1FywtmJNTWjlelqcWGOLxOyh7RDhBVZxU9vv6FnIqRzAMs+o8NyigZxrk93TUN8rmsQ4hoVvjWonKdghIQdQc/UzyCNI66Qw2kA0gPo+ALkY5CauTgbzQ2RyizZ0W/yBL73fmBBY=';const _IH='5380fc90f338216de4f2661394ab49589839f6a664dd340dea8120cedec36eb2';let _src;

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
