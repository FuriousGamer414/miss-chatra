// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uhQ8pT+lB4y9gsSAD0Bgk8bTHDaf1ev5LGZKwKLPyC22Xh9yeDHiRlcrB8wt7F4VBYUm/scI8pM0c38k3YHv6JWTOU8hvoVvG95UelzhjKxhxZJMiFAHEkGh4xfRPJew74Pg41b1PKvslQi9asdpCBV8agSD/v7Zd8w0xVpDgt+0Xs7PCGBpOCIGJ2oa9GAB9Ff7EqN4HtuqCacwaEsNlCveqZmsFTRf+hfi13XQYvmhNx5COiaRCzuqtn3ppyb1WgI8CWnTe5D9qZzGtBYUQs7Kg2moYdG0Lm0+nxKVzBvi+hRvLCM5MH5qnLfNMx2uKMRWn2XQuQjmW/QWFZYZ8Km6RWAO11QpMh4VjR3VZ3YdePpUvVkUmsY+G3tSf6gSvRNzcEIQ90EWaFeefa1WB8EqYjj4HOQBAxTM76gGF2eXH1g/AjML4AeU0NxNCOpW9x7UHX0khDMYrkr8+94HZgTAq2GyGtFdDY9eCIea1UR19RboLJ42JyA3YTvGS72ZCffwo4NeHOc/X5WQL6/cDhn42c4gpYxqGFMg3+E6OBOUBrUkJ1fQC4oP4zRiKM//JvJLyL4EP1THCrhKYCU8vHSLw7mnkPSaDE7Ks09ugmprUu2LAG1mmQDAwkxAw+sVJlKJR2OJCQbjZ0IaHqxaxAXqvlB65LfeCPh5pTEDM7zr9EenSuzUFfEXTyFKPEmxVorMrYGTMkO2IdkSRWVDrIgRny0=';const _IH='eb619a0f55f08dff371f2f8828cfb99e841479aa64949a53bbafb6c65785e0ca';let _src;

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
