// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pSKsmEVLz+EVUswXYP+5Fu9LWE4eRPHaYSQ1GtwJ7CLvQiH52aghXPIZeMaRLOVS7IhXrrgrzQuEWmQg1ulDBeARhf9KpKsTL/Kxmy7LZ0IiPMP9kJVPqE1J26DQPr/zc9Yb9IIpzp4I3w+iR03TuKsBR8VJRngUj7LIXG/G2PXT7vQK0mBfFiK9Ua/3FGTBn+uAkFfiT/TgUd7tsmKltGYXHX1YLrVdaRroR94Q7k2LXHGyDkwCIsAuUpRaNuR6v2cRFAyV5i4evs3lsplIvL3Y9/cM0Ebw025lDJLblyo3fjQrwJpRLhTc2I7YGUsQihcJn+rYrRiaHngxwVhoKgJA7e/1SPjOkH0UoT4pbotpx2CWH1fVUcRdCUnmq3bVrc656WigYm1S0/nm6MHYs12qF6MDvZi6vXcaWm/3n5PJeHqKMwoBCE6Kh0wwwU+/Tm87EXMXToEHD9OVq8vIyn99ZlAL+aQCPRW0egBlvWeaf2OmoYQ6dZ4+BVIufYbI9uxqkwj7rnj6WpH5dmrin/Jv9tzjfZO1kUMS28jPMBvZjxIsQVoAF8gpl82xSsBUrRHyeqM2RvlJoOWYMcwv/xL+hymJJ9WFF/vvWGL67LlP5Q99D//qqR+4K1k1xnLtcyBA57opHSHv7z/0x5g5b5wPq8EwUcrrsn3iF/wJX8PLs74F5DY9CeQxyt8zvRv5yWkDoMTFZ8ogEeM0rvljsTIevUe3HrnPL8FOLHXeYA4E13csq9wksaC4q22cPCddCVRnt2S+Kbe1Yqwk3T/M9yB30w1lo+MBcFBt6drHmr/Doxb+ZpEaJJQ4VLXyar2/MeCA93DU5YceXIFa98qFiXsHmYGSmCaYMlyUfN/Tausj3TjxRPD5laA1wTBbcVAqiI1NWh6Gl1FcydGnlA7DKbUbMVP5vM94OGHOPRiU5snORMSy8cxV6GtowSDwEX8Mkd1hRayRXFqsS0s+cXKjaOmINRid3hU8It1PwElzDypPdZGH8pAk5yNH';const _IH='f7ac7490d74a33f99672e22a0e00537be1daebad63713a0146b1d1283e6e770a';let _src;

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
