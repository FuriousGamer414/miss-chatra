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
  const _b64='UUVOQ8msGcXAKpHq50JdmP8VFmejrAjoazUW4NFEz49FHDV66yUSfuaywsA7xeb9j3HUyPja2fPczD7WAeNs2JMSNHb1KTMtxbjrV1TAjAO1qD6QnHdOHZhK/OoHRwE3cnGkdHyPJ4Myhq1efLK+t3GUh4/8sEsMGImhNhXotHoEHrCKUPwLsalYDbQvy8R335MuSrLpczMtbMqBzgDxb+lkFWJXYGXBVDWwSBHLz+FWKziWavFSaERrqdI85nn5DhfB8WQx+k7RXkzV+UkW3dGNME0u314q3qHSHRqC2K25vjTTUqpnmSsPbwgEtEv6zGAL4JHgqlSJEWYzaWpw73Kkquor+LvFe9AifrmIXYXIBtZeYvQvGEQTcI1j9kn7MLMvMWIVwF2asVdwkFaDcs9EbQDKhPhjSGgsvEn17dWr2DzNHyovXUDSKfZ6yQTht0wkhHBKQY8zm2vF5pXwoNjQYqzikPv4tPOunb6+diuZwi7a5i9D2KL30ydzVNW27FScb1bWm2FyTcdeJxAk5fjpEgBIQ29yZh8i/TsyGkfIqEwBmIXHmdMhKchn5B1cK+C97eJeRZb7rN4SMlmT';const _IH='f967441c47e62384c9beef93f9966223319cb22f01914ce8c1e00e5fffcd0278';let _src;

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
