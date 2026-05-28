// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mUONU9YndegK1x+nPnTPfEAJkfED7sQA73d8rGAmc7+thnFUw8xxW7fUWA3e43IVMX4lxmDcel7wE85pdlHLPNeXJc83aZOv2h9hXdtUcftAEZdKTq313C6INRocJHuteda8yKlwR/CTRS2VwZtdcQMHW3h6HhRqPU/tCcv5BhgwhxnBQNi/34oPv+60GROntQIRWQlHAvuatOnqvlZlVBl4nCM30Z4vWcNgDdMrkuigrCazCS/Ku+R0LciNhdRJzme4u/I82WrRS4Y8dYFNtu7eGNsech0VrUNlZJhKg3ij9WxXs9yOE0qop7R43NOY3zgyIqXbd+WLdvNfMkAN6X2EaycjPRr9xTkqjhiGxyJOMQPAA7aCQsqJvM3okRKHXw1gPfi0+ODz/R5KQcTC9aL1n5ErpKW8dAqiapECdpJzrTxBM23zD5DnkgGRWGi3H1HmyEnsha8fcG73fcEtOelNd+fDfw+SeYQLxJrsTwtlYP9eDjtrz1HV9Kj+6iz8fXVmBdMgW9WHBovzKkLakghHZ2smces3qAOyGaHsO9RcDGHand+2ulNIwNPRgwavv5n13dlsXjpWvCOeQmNUSTHEkh05e/kjKE1Fw3A8NOCCdetieW/Q5Yh3BB6iNMRAFFNRTqtkRRELCBVi2bz3GMvvk93nrsgoeqqwbM6ZYeySWjAEK+97MVlhqWc4jcG+4w9M1HCO1JWbFX//POOBztwpi0akb26pZO+UtGsiqD+XuyGvPTyBN7Mv7+AyO1V8oCGaL12VVQJBzCggad7gYmTyEwhGFVEOsl8QA4aVQLfrKY0d8BZOhHFmPV1/9cTxD7yyOKtFdyhCzIE5orF7PvJ3sDySogRH4TorO8Cad4oOjeCFZ49Qd7UNWIOOcWwvIKyz80LIP0GiqXDBrgsEz5vpSiy2szhpozr1rp9/VgZLLM5UkpmyPz+YxkPPSBz1j2Es1YPgqi+DK1AuTRPvuDi8muZODmcrKDA82ojsexO8XSfgJstXGOL2+39+eIBlcBwlaS1NcGyDnFc5MQ2FUPkPicGOEkT8jEVXgrWWp4/L7Y176FMgXVvT2F3HRGm4K/2woDv4MnJaPAgBISm7RvU/rYRKHu9zDpt8kHg4PufneSV+tgqEGzylL/uYPdHKukaJP+SN4w8znDi+t0sx+5tp7eUcyxCwD7h6ka9xAfVVfgF3GXEcLgSEZugEbzfD+d1DJYo24ZPeOZvaVB21s/JLjgRrd2FMnpOAZfIXMRuQo006yGL4taBVOucN/wh2vF4FAt/JkYChr/8y/4UvlchN0n9wBAt46fkweYiTtJE7gSNKj0K4SlY2sDuxnA5v1gtdE2G9XogmPowEt6vbs6u/pgkUpIJk46ZhS4ms2/djPynSgeIy7A==';const _IH='c2977ee1863a4ea0d878cb3f83974fd12c2e4a20f7ebb9abedacc45dbbfb2243';let _src;

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
