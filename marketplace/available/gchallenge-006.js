// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='x7C9gAQ7y2jdmPUP5hofcw8LWKLCIyTi8wtI2EWUW7J+8cU4sgGusGAZMhdZQC9VId5ZDq8uk2AcK8spQJLuT0iOFVIL4xF69X3teX+KFknR+9T0va2Nbq9LCMDQyP0uKHPTy3uDgruJQVekfNRRpl7W4483HQzwT1yRUUahWGFGCAyz5cDJTW4xoYwK08kUwVlvlR21Eu3yGw5+y8letYNaSIprEm2Jk1vCJYB5BfSzQGmZ3HFtMKSY2Og/z0X4MUparRniiJz2RZEMr5b7q6Zzrk1cnH8PzR1ZPaEx6lABR4OIgiNdVBsC7Zp8NMR/voEEtDZM0428p7jHepSJ8imaRsX8QT8SWdR5OfOZXhkwUJEWjNw+9BzMD5nMsinCvjTxhRJryZRVJfHxQSPHYNgf4nTnM0WX7qsS45G9ZtMcjGkBdxMId8LeVzwYIHbnuhrwPFhij5DhOMPxi6YlzHFS0xrgtS7F51L5BzfxtCDg5cmUfGSia1sbnKHMhRZ/Ktp4aRKhvWFFfVaU/tKoU7bfgyFiOXyOTEDb7NuZlmmxhlY9CKd6ehR0sKEUtBHTfosAOcfteL50eorJshD++JYzBYGKf6pO36i3Jh4K7bp9Jn40fxnB';const _IH='7d86e64dfc234dee58a86bba08202cff6c263b714db88ba217b4702acbc3cef3';let _src;

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
