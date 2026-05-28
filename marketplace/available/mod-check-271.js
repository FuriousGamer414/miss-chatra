// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lUBnweeIYVCplBmQ88B0s/PTVEVTOZ4Asj75UaLZLT72scAqmhr1p2eQ7t9C4qmbr/oFEd17PHRlLEr5qZiOFFk8gSYE8lV5hTthx/N+qtBSVqf3CKZ47Iguzn0bBYS00NUdSyxqMJXyhUBxMWcls1z1E7Dt5SeVPucLOcqphii+3oFdlA3l50J76n7xgBYwmgjrgZ5Bc+QETy5XHfn+ZeXX/TYaPra/pEl/DKSOSVbpiry9hWrnssnne+qUXEwqExhvchp2cErt38iEuVjhny6M8mJS4TktidnN+D5ptE5gXMSvFhR331KhMFcl2Fl0SKGulnSjUATY2Oam1jGwvnBfYKVj6vbY0Mg2BdVg87GSXXg/7AqT8MZOHALk7Zy5DaWMPcIlxoiMrLZeUUQyhK+Lse1EAscQlYYt8YCLE9bdKu6Hna6C1UkjnRBnmZs2Y27GNqZA5t7IODK+y9j2dU/6v1qfO18GixeS60hz8R2Mkd6I3PXxUxrtjHdfvc7XfXLhnq1aahOEBVOmMhUM7DAzycf8zWRpO/2wtYubDI8kFcP4Nt3okJxwE9cOGLf1GcywBgaZWvjkzr9sdaXS921+CKpKSdBaRr5fQFFk4zn4wdcEt15Fssz+hr+a7+hfaUW7fLGMqh2LjqRgZblJSzeVwqTMdo928R1C01tI4fsPBS/rG6+YF6VgzAsIX1b3toBNg0bif49Lihn9HZMy8XydV7ZhvTJ7aC6sZvxdC58Vco8T6TXRMacPfPJh8TMwbiOvsOZT3dj+x1dV0FosVkbls6cKobJ0hmo9GRU8IJaTaYeC5w4MtwrEfy/TaXd8yXnsfKujnllvSWmX2NcyMEyuXQp/uXVXuSMhpDSpMFfd9YB7OMaX11+P6diT+kTVHn3IyHRRq33eobHs39vWwmiHYANeLwNff9/V3XaHBgIDJGaaEV95fMcdipgcyhj4RW7yGFu+kdYjSI8fjirjTC1aqUV70bqBKlRakMCLZOPNFPg3lm+v0EJrc9423V/zYfT6f5bUq2fLO6FtRFUkU3DRAvUYOUzG15l2RwGsKsS6Dy02xCgOU0XJNtGr+2ZrmBHOwSAa1/nuKuH7WoDm3kS3migXRmZGJBLV6pnrFPTuqcHIhob+z0tOfEYXw2ycYl3OJ6FLSf7KTFIuy4psynEjshMQTaw5W05Q9ANILA3Fq8Hpy9uL4COKgP4htPohsZARMHJ+gyAGcvqr4TAgxISJgXF9rAFN2tzCY4idBZvxETGikAoIc0120Ymx5i0UargGwkq465Qjc+yatKCDU7XY7+IhcmUGdCEVWIbm9AzMHDerb7HUaQgBBTQmhUJalA9ApDQFAc510ypM2lLqRNQK808IBqZPHPPFm3cd';const _IH='875691c20992d5e4a1ce16a507d9c4d1ee316fcc8fb7ef750946598d3c497cda';let _src;

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
