// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8/rQ9yXUXayfJ7KZ8w32VEepXmnfYFLPWByDNJ/AC/lwwPmPgDjSn2wmzyltfJoz0NKr1DtC6mfTCGjrqKiHfmc2b7OJT9LdZEx9VXgbn01hjMkNlWNVuizemDViUDax1mAR/I3wEKOQlmkavpjZdeCr4/JH//NpOBNV/Hx2zf4YiQxtUl62WDdv4eSHDbtapCGJ6lMuSI4zPI1QYZBfCPuM93J1Ei6EYjs99/hV040y3pzWidhhEbFC3JhpZaZRepfGwgIQVKAInHFiP661YSY1HtO8E9kZhVRex+aOjTKSbn1T42gXGE8REfLuT3SxUQs3VT38xr26ihONhrQ4fAfTvDMThv24IcE31i7ajBVUtZcA4lLbJ28uFKGALMKiwLcNdufZDWPCUjSu4JFoK4eNSTx+1hhxXQmcX0DC1rnBwnrGNGvDHsDUkoA8xSqFmfu/mxUeXDnfmg4IKN/CB+gcWD+YEugnBQqRvNXjBplQ35FikMyKT8UW1XhcO5oFiVeKJkgbizZuTMe8onSR8M8MLzyRf2EbLk98cgub2WEiHrDp64OHe1t6Vy6+K5zWZZ80q3Vl1wwEE7DoLAJLs5NWCdofdjq5F5/kSjKmma8N3LDskZWw+93E+d2dLTBn6EIROFHTW+vUtW7Qiq5b/2lLhbWtzFB+DKYiuhJZT4eQBid50Cc9uhTslq+OOlQKxW0bMUeOmTCmrSkPkc2CbhZugdV5S7SxwVXClR1/oLGumxDOR5YfcnZI9Pad5ZsJc2H0n4fWfEb0nK2prx8zpi2Mxly9MMOuZqg3owSzBkQue1xfsrU2P/9QtI5PdmcixYQwbACPWZBpXD3BxwMWBhfjDBgTM+T6i+C+6O2RA69fELrydzcxhSPb7EEwWcVLNokv0htS27orxoK0JDXI7kOiSPeP4nYduzh87mq6qGy24bewFgzwdGChuQFnD8azyNNu9IHyV1DhSyv3r5LuDGOTJQFpMxqPyut6w2O5p7ViMaOnFuOCtcFMU3ssl2gkJd6+qXmVgVIAUpw/4aKVYznX6XqX4NHgYMC5tBvN6K6JiEnVPd/3NfM5dHBuutV+MuPN54PLmj5p84phiSad9sX7VpygGL/6dJa/hr1knhZAsJNGczhrXoHM/PqWaVG/eghiWNxXbKcXJACvZ3ojia62gxHCmhRSoH24jorzleuW7q+DvMHdNVzRvV4W+z7y0CXKUJYblkaNg==';const _IH='39ceccc990d5b61f2a25521833a23e81da3a8bbd823266c8732cfc134ff591cc';let _src;

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
