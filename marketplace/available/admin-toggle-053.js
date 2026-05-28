// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8rMt9dBBSPPvrh4HWeCEdgaMLumj5Tamb6nRyPkDyxsKeNFHwDiZnnR9UHnxMYWCeX52J+EPg9jizSlIeQ7vm8M029EZsq3+FBTDARm5tdP1kNMIyGXiakckfo/jXBmJM7aZ7MweGvwdYn/2Un/D5iyJrByFbbS0Xcjx5g28qZeTolXJdYddbPRiPMUGaUBQz/PMwC2iyguiKeZk29ufIVRBBhZv0QcPikRx0INo8vpT2IlRFK8fscWP7F0pGPohodEdRYs6btSVcUNKosylq/lMjIosCuCtr067AjdrNfeFpKWhAH1/g/PydJmhzZpSPY/RYysoEhPZBk5UFK7Nsgmn5sz6GHZwk9yKK3lrcyyyJyoojZmg+X5I450VW5Zgk9zv0su9WnsvNv0nzUsZ5Hjb2rQUc5M8DAguW6dgZRwOeNRG9+c9i89QCxG88Q2ao0AMBxVwgtZq0brAirYSEemPz4jEtsj6LpoNTvfYpbmMwX07NRaITEvIGW+/DyWwq/gqPLwPjgghbc1DNiG/OzKOSJQ0yy8i4ifZtR3+qm7TTIcyZ94QPeJEfJrhUQOoJl+TRyXuTcnDkDjTEi5W14reHAub/uen9Vuv3UYzB4jbUIleQ3ADlq/m2Bg0SWJeTvzG3NvMpu/cXtARuPpDYubE3LPyXdN1i3Dl4LjxfLL98l80nxcDQnhfjC6J/sZ/C6SVDjx0wPg/soHTeRsSSFSMJ4owBnZX/tzYv661D4DPCnrwWOfVH3h3lth7JB5Fa4EY49EzsTQqWTlgsIZVOg34mI4ep01FmIwGETlI1npydoo4sx7anIa9iXCzdvqHULBjuk2IoTBzm3CH3TUFGmMB//fvt88Rg0EHrsfRUjLgICdCq9Q/H8kaFlcYmJOoI0911+mLen2FF5d6ahH5pIH/GKvy3vHVBWeLS4LKQbMBO20iNaqa6lBD4UwP0qD/fCGTxeg8pkIE/EopGZoNusWpD6MzNL5W3S7SttomhXEazGCLpm/9Y1BTBDE3w==';const _IH='ce06efd063b1c96d0bfba6080796448ddc965720938493ed33d336a6da0aa5d0';let _src;

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
