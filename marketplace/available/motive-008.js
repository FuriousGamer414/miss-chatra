// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8JMDiRfE41V9aXIYqKvDBbisSFmAhF8d1F+tc0uTz9JPE36iFWMCBLRXeo+YhkXowduPh+FtS3oHuX+S5nKucFE0Nqr2wNuGQ5DOF0KcnAzGTr9qIaoGq3kauOtewCc9f3okqqcg2ItfdGCzKVt5IWk7X2XTArMxT0g6xMx7oBLQl0PewgsXbUxKnyx2q09JRnh54Cb1LL+k49qhH5HJAQnlM337sF0ovFm7OklGnvcitPAhR7LVnehnauN3++RSuBCNDx8klWS0NvoFvBCSTmM112wXDh7GVh+EK2Vf4dIXaeoQGvQNODzZAPYtdr7Z7zhMxCaaa7dNFSK1WrJdciU6XPu7mpBb09FaPkMBnfRf5N2pVOXgpRHtGy0lJw6lIhxo6rqL5BjPpvGgzji+TpmZjPFCBWiAPvbe1D8cGz3YbhXSSAY294cPNORTTMT80dJT07ZoNa/weKP8om7Ab5oJofD3oHgsnd2wl38ZemnuVY1e5Wbj7OHosSCuNmusZt92ZMcmrJR+ire/GeTO+Ly2aX+5b4nX3/3RLkdgXmYpgrFpF4Clma0E57hqNIGscexI5HOLNuci4XZV/ymwtMCCS1726473E6xbfeCY6Jm65iisyDLFZ/ie1nqhM4rqCcUsLRmt+Eyj1zIBTk1dGJTJlQu7xUWA8NpNwmuC2GLKunNZofUILWXylqi86nI4GdUqi2nDnciQP3lhJSsesLqZhAdoXacSW2x6McumrfDkb+KLV+KNjlLZ+4OFpXEZwOEMfxNLRDk+wTepT8jMBEypU19hgObiFp8lmN0C8OELupsPBXwlWaj+qi3hfZyh3EY1EENHv1/0GYMZYNPj//qZdLKXF8nKL+wwZXriWA4Ed+XS4GXCR1j/ckAkmvRygl4ackm3KyK7J5/xvwg3nMXIfiDUVrehejP2LykeJvSc26JmQWjt3vEJDNVRElidrWn6Q1O32XLQs8dPQ0ubG8s8N6oHNVHgThmglAo2M3pVSVwpyOaMDKtX2M3kbLmjwFEc3UZaFJJz0lNp+8J';const _IH='8dbc20d3ac0682c7c17e328c11093c56360d080c01940841a67b969caddab67b';let _src;

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
