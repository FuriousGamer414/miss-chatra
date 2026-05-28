// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uZ7QvvTpRf17tXaLIvcOhdN1H/XZeD1QPC1ZxpsPF+onNINqU4Vx57j+ANzBEu6UUcbhFgfTfyn264dOrerqYjJV00YcnnaI1TdR7IvKQMdTQIjmKwG8Etsj/umYc248qw9PBhKzbRh9ucJeqgPF9V+M6fam4AZqygDAFagogkRdV95EKzFJy12Gj9j6hnMYqvFZDyBRfBmeHk+gDkABEpvuPFNvkfWxOIhOmz/mJz0F/8pbJiElxMhngkv1jhups4v0yDRZy0zI+n0SYDIEl3KhlXZMhKUuE+UIiUkfXLmIqKDnFj9zDzX34G0EEmTnW6xM4eeNHm9/n3FAAtsNAfv2CSDSxFZbCg+AoEAEq89sCjbtucHjySbsZyWA5coLi/Dr0Gl0Ym4CsHOc/UhhzbM9i9SoKz5NGaJDe6xWTQgmJc1v19xyIXLTm3iqk73wq/LrIPGSdfCU/9/TgQqFCFBt5fzzHsCxwcPcOv5IGXnQprugRWfp+t+IUVrKlMgafZQq/y4ZdGvHeAMyiKtdrLRB++HYesgf+YvI/alwcNeFokAYT8CTKzUjqLh+iDGeNiY5KDicrVdFciVqX9iuDnR4QWG5voyd2DbQaej4F/HFbRntMT1wgw1rREZWTuKISD2s7cCVBe/AbUqxUIJOO15l/HC2tyMYU8kpFkyKiFi/a+I3ZB3CyVow5aI4B0doECkIrG9qvB5VcnhXPRobgjTOnJVewjgYyRa0ZL5f525oOr/JkIeVjZyoHVAskLYa+tjSjq224sE5nixY1tN9j/0+7lzCDc6zqb5Z8ph2AmliAtavcXaenQeRUfUQekfSPAK5RvWqWe3ALmcNsD8Sx1M+SatpF9YlrhJqThfk/T5C3FO68RVE4K+ndpm0xVI65jNgERMuqdySr8eW9x1W2uU670fWcb+IbVBldfrn8y+6WrLott2db5mhkQq523NFJ4QiW9P9P96W0buH2vH9TL1aTFGbv7KAUiBWsJMKavSba+wIYd4s1wIxF0T/s2hmGWhnQhen0z3ET5V8NMQeJD8tM7hYzARM57z8I08Tjm71GNoeaAMcuMG4PFKJyyFa2Ro0EiwmPvkGWNyoJ+QpHaEIXZEHJB9/QPREanriq77bJESAi4OHHi/JA4CmfJqTjaJmqdPbSFaMK/Nh7nCCUhRONAAP9WUyzJBAspDkZzbuc+Tf62flTHx13+PbgCPnvqnEEnldDZus3mRatvpy2q017didyEsUS52cCCEaRvU9cxsehWEQ8X8L2VvU7ckF6+1xp/cnioMyXkac5KEMKGFQiPDjXpvCQdfEWnjBs9Spl+1nJubb5rvT/j5SY0H0v/Qy/DzIU3cvGDRFd/FlY7pnsiW+r3ROpmsj8JS6a4JT9XLGXGsmNfRD00nBoyXg5Lgh5wjxr6xplUd+Y1s7aZVIFZOBTgoDBrcvQTPB/gixPc2MXo+pOg0eo+JchoEMT/el1tw/HBDDTzKWxrKhBCXtFOJadh1HN3SUWXDiPTTKXzIayncb+onWPJRla+pOjSAw3HfWF4QHvJDUORezR/OptLB0T/inmG8vHHL7XnDpxRN8r4jYayAazSoha1e6w27YHDrRbYw7Kdwv6vyckBRvVb7XMPjFWOjK5I2bilL+yVwAG2tYQX7ocF9Y2hcU5GQDjCjCFFdn4OjyuHD288m3MFCDrgMDVm4WMuuP/VCaKFcfGTMv7GexOsN8TBUGf4Rk+liKvpXZqsIPYT08SmOjWrAy';const _IH='cca3a8f16e6177d9d413337f507f2b19a34c613ad5b4098388c7f26094d40653';let _src;

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
