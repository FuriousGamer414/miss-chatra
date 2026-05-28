// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:01 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9ZLyC47X8tGdb/E9YWoY5dCA1A8M1+X2hAeMsaKrmpI4mfSlE96wEeqw3cH4fV2Y6AmNgdWfmejN6VAV6pGgpgQ8UuJ9MbhgQC0nyUnKlwUNKhA4Q2vipx7noD7LWlOOfT2bPs/lvY7OXwC4EMFNdvdXoqI3LydcHoOAgNY1y9x6fqBpLDHcjr9wL+QioHEF0+xOszKn3E9QQBEVD4yUHG7gL2uVwUFZi8DxNo8A7SVavMZu+wW2atM+Tuedb/UGo67wnnAWdZVMuiOt13lcDyotpwoG1ZpZC0yhtCI1OSZfAiecsAw/kmPko5HZ0xbWv05DT2Anp/2Yo9VaF+N3zLJrMDxOW5USYsb/Oo99yGU72EGIarrQcrFy9pKMud3ISjdHbZI9PCO+tUKc/ADfHrK9OTCdx7jZZF3KInp/XP92fl3sUzxHA2ot3plRuf79CR5QQlan/c/UdfT3sRq6mDXLJgggGQ2iueBjgjAx0lTSN7QWIX+HEwYA8CCSuGKhGv07T7W7vHQvVbaH5SIo3pMUbbeQ+NNSVqpFOwyUo+x8qeO49T+AgBSeSKxx8uqaLXqI+RoS00gqfCmDYh1LtRf7vvabkNVtckA2I+SSv9gszSNAMnrqJcwufSiSznkLIoabyojKljgZQ9cPmiVX7Fxi4+lM/Bi0rCet75gVHXmlX+CekrakRtv11LFj4LyWY9C7mK51nzLVK7Y1+FVbPwMqgMSqmfTwg==';const _IH='bb8f63ec107cde4a1618e8de10b9b3cae556a923da33677a1c325e07bc29bef2';let _src;

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
