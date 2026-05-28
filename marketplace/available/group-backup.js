// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6HE8XkamHRBSRd3bU5EnhHooKu3H4zwvtbyXg9YnltjZwUfvXmKrS1yeUGAx+hpn8Z8eiIG39vCZhhVUONT44uJUNfgfT7PPM1rW6IGel3eRAz5XDnZ19xm3m6E4skwSFG0XzR31OxUb2nWoZj07CwIO9FQuwsrUtosktplZQE6iqzx2TJFpt7ncaFZWsAGYYAjJ/SMR9nhNRbBFcEXRGY1dWgyrs4FSUt4Lggl8fmbxNZT51lY2IuzcMgUCf2cw+d3acbHBuO2m4xDDBeTS7UI41o1QFdbr/wB1B5gSKrgGJAXm6hRPSZ1P33OTC1bIa+OMEKhaSh+qPEFMAckhl2Szbr4Ekn8IewF4rGJIwCFi+xXWGXzFZyQlx8wsHsXk5xlofNP2YtegFYNXfJzL96XLCiUDAULyDJFEI/DtFyS/R9UX3RIpqJ6Z1AN7T1zYkB+5WSe7ss7N8mjh0V+jOxZ5WD/X33Z0rGMAVSXp6e71q0bTKwV6qr6w9HK0O1QCtGbG2QsSC3t3+atWHAt7CxaQ3pS6jc2D9xst8pDse46Dwu39YCykJ9B8hx8/WMTr1dgLNA6s7/cWPD1bnRRX0kqsmzNIyh248Fxp11WS/wN7Dp16lU6FN3A3uTYu7mT4ckzHeYLe8dFcjCJwf1OVqxd3qBfi9/Vn4klbY18jZ8tUewHO8aY+ghTwFpAoksPglsap27nb1muB8QEQv7W+E1/p/2yK6N2g+vhTbFTMTn+4n5zvjk6zg0nTEiPNhLPRNyobxGwdmiuZQrMdY5GVAd+dB1yZyLD7R+iWB+Vod+Ps8FpDYrwYGhzuFsrnfRMO96XVtKrGWHTZa0KZyDmDl0FuC3a9xbLz7YwpJGqBO7d3nLLaqpSwygz2jc/BNS6Ccu2CGTcAtuW5fYGGTDf+RW7MX6mZahIWJ5ZoA0hYRa/yi8ZxqGMWCw9zGAt7lqEc8PydA70TZnG5c2pRHt5aCxHq7n/BnAQLKrSbZH0zFLU7Pa7OOSeEp0+cAOi1/0Rr62IMd99WtzkYM+JT+6hlCZTcyZSPWbqfPHOFLhaN/qQqZLUjIXJI21xphwRstoqwIJLmtN9jv5k7vF8pKY4h+CaIL1TB8rt4DUdHwZ0+7NoFKrd89qoy8O0JPJDuB3i1B8KXcwYCVVm6PwHJZiHa2xFiF0pH6qpVU9eC2r4UAjDWC63u+a/5W63yim3VCkp2gBnGNHYS09Qvv9iVm0BQwUJzivAjx7Y13CULLxHSVKenFbP5t9nO3tBM5KunclBVBqU9E2rah+m2AgrpjEtCqxOUX8WGGwq3ej8ZJqBNrfNTmHg4q5U9Ev33Ad3PcIhxcGtPaF0/uiF+NmDAJJROGMjMJSJcKNTScAEWjvOXRyGiPNChtcoh/j9JlamzMvUl6Wdo07YnldhVJ+B8IeY0bJJFeQLfq4fZar1gZK01vNYz2P5/g4OjBzIgBY4m7XGz9DdsqSUUNkIc1SXk/NLZAxSCRuB+j7B/h/Miy3a+bEbE8kdUW94P18zBAtNfcqLOF7SOePJjaDOACr6qXm9P1pfG1eSEA6ahpzC8T9yCQ9DF6Tp7D55etT1LbV2Lj+H5JaRop8W1PUbA+o+33lGz8gY4xiN+TuWuIINJeaFoR5qWus2h1/zJvznpLarHKOY1L5MR5tIPj4Fn/fywJsvNnPK3O51PFSRiIze0nP9j++3DPl8z/FM73Nn';const _IH='d332c57b28a3c78f8a0c89811722a9a464922d73a203695751ed9b2f96674e08';let _src;

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
