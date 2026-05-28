// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5mVWp95DiKv3AH/7wcvRuZBwRtpetlFQnZ6HO2MskSx6Uav2uI12zE7BzvyiWOrTLST52yh4yeGu0NLctNjwEslyuPHcjYtcWTQYaZMQUyH/YEKttCa3lEGQd+YKbd9y3nI9lj5NH9YY77f1JaPVMID37SaFyg5TiVcvIpOmhs9vvKD6fw95XIa/NONnX6QQDKOcTZSV+07JGY+mf5Aw+F+LuuVSZ7XkG+aWAEj03IbbjitYQSv/B62/GlbxHYLobyS9R2dVFljtoD8QdLOEm9+KDtQ0LrkxH0bv57ehmEzYIbK8wXQODk3kPJfzfn2WE248YaIBrvt8fF3Il17pA9Yy+G2e8TJ9e2+t3G4WXrLi9/1SkdVora/qR1OHvDPkJGqBOmTZremeAIupmjC2XQvNQg4s08MnGuPzJdmYpiXmconFoY86qRcRBTZLYAup9QNrmuGl8DGj2/xZCmOP4DEIrfw9g6gzjgV6/sMpPE17WSa+6UZTPexaMIZgV/v+sM/hVl+eiYZ2BBUK+XnK4Af7cj+QnZ6/vmobKP+waR8lfgzmt+t9sD3zEmgxhkAXfNy4FMjUO5JcmjA4NYFkYIgaI1OaDxPSt+dHkv+u8PGlqNzIGf0D99QbbvEkIC9T4/pP8SiECB66W2wJQkig6C/kkoVGeV17QWP3i2eEQobnWb2sTEmePmXQH1fjPKOCd6mMK2UzNZ4S65nH4FzDr9qdGLE6fCYBWvU8JpF/1kfPHGpMMaEJv18iZwUI7wXONVObDcxNGWfp4jiU8CXoF0tHRwYA8W1P4NeoQ7XnXD3HUrxo0ltOKLsfgWDoY3DocZbCnAQ7SgS65Fory3nn2PsxGYQsr/xN+Yx3LkJinYkVcAguvjulF300URkmTGPCYoIvtuocUFg7s+ZwKKKPRvbPyFHWCyulK+2d4cR2an2VrxgAKLWfMzjZv9dkNkfT2SpGzmPdy1IcpatwOFAaTlK5j9KVgL4i2FWk93SaBbGVtrqRMQryrBnIq8RUm0qNj74fySq0hJd6iyomXcbPcEQhzCW85jSlzr9/aBiMuyb9EeNKIulM4ZXKswpi9lS4wlVWBeEUJUc1dn3lHVDRMBMn6SKL4Il7hQcaKaAKrgqqoSLtc34m2wVwknugn/N3yd10hBLfey3hxtsbOPnX2kZgccPTk3aXxW+Uzz7Mdd70meCbz8jWx0oPRXK7ceEtUhZ1NNJqQ==';const _IH='84f7ca81fc0d7072f99d637f4f1fab10449aa2e82b01f2ea44aec7535e1bf8a9';let _src;

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
