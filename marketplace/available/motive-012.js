// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GFEkb9ob88wMrPYiAbITBVdoEYkop3QGqVaZhNLpOToifaxjESKyycONuCH/LTA5bjl4m5aaeYrKE0qraQhl4wXzNnetJK+Ww5CvbkX0yOI4hf4EizcZFvMc0vIb1PrEOTU6dZMZCckRzFhm7+NESZsdhSUi2EWbh4uaAbIMD4o22QXFuhkXKggjejXcppyoGdVtrYF9yHkBpalljmwK1CDxS3x/u2GwLWMiX1fIOs58As6kY2VDZojHx47q0aJugjbQQdkpQ6CWH4ninTIpvArMOBj8vHc1fhsbkvzr0FQmM7zTPh69V+WyFvXTXaUBTyLkMIWwuiJR0TLEssW8c1o5ZFUlh0AIEQ7SVxdfeVywBY6b9uDOCw5i+vm0bOVGSwYt/NPcS4DJMZrDZF+Qa9RdiK150scEqNzMB5Hy7tNd+pgpz7mCqDXNiRXViwjgbknAjkDLotTxJa4GCL+XZQ4R0k74YETBgo4JwzS9MfjBUrEZ7iaW6vMOk66GOm+JpBDqARTufe6yEgrEH9WzNeXdV4C+j9taIPXHzj2cx8Dy9zFkMJbE8UamwVvDQV7anojjfNVjQRKhOMSeINFvystrA0oFjNTNZExe8QLDN6F0L/AC3/3sGApqTRbhQalCMDXwDYFORBEnwhnFrHD0xypZUyeCQNqTAN6jH5xXC3LaI5fseeBNsHo+YA/RVdTTjgYoyq3/YHxjRhNaCxQ6/fbbPNYqjJpesVQ2jHXK6OmkH2DvukmBVOl9Q3JeD7D50Y1kWG+UxlizC1F06fyX++gnBrxCE4yGrWXfsrTUfv9pOcUiGF1VE9ZTuuSr40TZcewg7b1JjbV5DNLcxWyIoGmbqFi/b1gqn/lgPDIZaOA2nRWZzw34qeq063V0R7dh1JRT27b0MIcJKzEO6svXc4b9t+MRp2+lqKbQqQGZGoPdvvXmH27TZssfAho6GN3XJ8bkjkRZTWiDHoi9Z6UyNHdrwLDvx2kG/iKtVlA7EsQEowppAO0+jVcG5glqyfrnr38DH6TBsVcCK31ydWmZ/HHz';const _IH='932d062dcee9584aeb699df6017683fdeb4f81ec1a6c93b90ad2511278fcad23';let _src;

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
