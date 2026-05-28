// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:00 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5pLmYbuHpTUv/pVk4AFf+B8J4BZluOc42FG4DHXXN8OR/LBhBYVYmU5hRqfI/579Cxc0xkn1S1kMoOGrh9Il+9cpPMjxPN6r0l/3wVNGOf0cB6+ybFR6sv78EELP7wNV/uZCxjTXBSWHjb7Bt/z94ZHirJnah6cbco1tYkU5PFh9gGMzhPotui8u1DrxKhgd4MQg7/LcBEZxjambb0oZ8z7TWe6oxVDYaIPQMd7D+tXqVCU0dkKtiMk9exQatpbrBSzhjJ4M6Mtg2XFFNvuM8KDcEJPTIFLG1LTAL4UI+ZyzrjdThmWntidmo5keYpustytsQoDp9LJulIWYhzfKpLzh6T2VywBA87PEOXJrxMJaf43jip+JOgcRunQUeTPSXDCEEaQbkUbk79vFUDixZN3b4OX2GUCRyPqbui/4FFan+N8RWc6zjvcbQf2BjxyVbEhYZNyABV9HoKLDddkt3c0AiT6TYrygwYgCYpa9cpdIQgc8eKiaiq+Qzf8tiJW3POSr1w29GYyCsRdtfdUfOPQa+zmQBniW63gX2WE8Z8qrE2AwN25ucv/IH9fs7A3VRLV6hD626U8uSGhcERT3M/mUC76DGMGZgOWM0KiqztY7fe3B6K8jJ7YUHSd4h6mpijgtQWPImEZWaWnOk368fn4BgmTj5dJDP0zHl/UALTGETGRW13cgf/q0Zt5CsiPAbToiw9jMho5DGH5OamO3xYq6txCxlw2LIwX3gqZvOX6ma/b';const _IH='a2b3044c0357cdd34f9ab2c6e5079b4456619ba82fc983322ba461dd7a789a02';let _src;

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
