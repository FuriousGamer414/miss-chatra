// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aGlZ3av2UU5Jdw5pdoBzzsNGALQhT0ZJibCgv/Ijx9uquERjiFxxU3MKG5XWomHMlDccKFoDmWXpJVT7mWAPFfBWFE3CNd2+JPQT8CRqCdYDWoS1WxtIH65TTlqGXNUHNWa4xILBldr76DYs7noOu0TzYFRUcSkzQd8XTq6qDbEouCCEc1zVfq3AFvIFqUTLCacRixgyxU4MwXB/W2sRhRiJmRoAztVS6fLq+Bnv1V7xh3QJvJSwsW5JjJGiauOipVo8XvFnop6f++ghFO90wrJbqO7LpA+3reN6p12apykCHwArj6a3uMZU63lgjRRy2M32Jet8LVkYXvcZkCfga0mFtkojocYImWNCuFi6KrRHFvqzEuNztKlu/qUqMUdhHJANpDUhR9LPhhUDKGbLHlcE6WBjmeZiARKkvFkIK6jPX34XexGPsathsT4opu37dccBCLSrO1cSAaUxLgEh//cwLvmVy0jh8ZxN/W3i8Caq+X30sPZoOHrcjjSNtJMXVCNYKKlt5dpWyn6SOlkoWt9H37TjUS/B+rW4TFWlqLpEMzXLHndQBAOVDFg8J9X7ay1e+eDVoUEf2Whe33y4cMY3jfjgTg8EfGbB8OY8VuhGo5NOhA+1X4OYUssXIRa2CZ3nwpnn/fuopS1+049pi+ebo/d2Ba3dDSiGJgB6xBJzuIEb+8fuyNUKD/R0ZTHCMtL5nIVAdHXH6ea1dtda6Q4dF6bgcq3CbakErGY1biyQhzL9t+A985Y78oGSGQQgcbp7M2GK6Rx6Y0vvQcrXbZ2i2TdhnLQryaEa3EGeSSWoavrKHmGzTskcm841r55nxNrcyM0XagWRHoaZpSQxPYQ3CMpFvV0lhnbmbFuYxEInJ2k6VFflwHk7/NacorJT+Qu8sUUgNZl1oKuYaROjgwGKE1YF2Keih1LkVhuK04OmHl2cOai9/W83GA3DNc9AROMZu3waSkLhLx+ix9X4vJCA6Oha/BfYhrTYr34uT2/TE6N4yk3GcD3rYKduJ+ms0jFOgOfXLWs+PV5UmFBKNBhdnxDQDkI46Uf0bebdFtFFRMtaAHNbfmvkMRerYVOIn9KRo8wMd9ZS8DA=';const _IH='7a9cec1dd0b63d3e0d0ed5a2c57b29ce8b90517ff8a7110be56e455f7bd61a02';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
