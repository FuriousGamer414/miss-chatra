// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2GmEeFCQNH81gFdQy+QjdzIfC9e9XSfC0Ly1+Xx7WvQOU8zAEoqUPL71lMak5umCBA0Zf4YnW1G2wgIZgH+GvxDMdgcgvLdPxMAN7tx8NTCSA9qKceG0v6xzwyZwIcTC6RB5TuyUPVXr52Z7X3/6Kc7jsK8KlvpNl+6cdBtJ5dOTQ0lZY3z4xFYJjnFxbx4deUB+YjnMexSoW7vBAg84UNzJFPF4MmoYfUBNMKXsHlqFP3CAMzTbXXtNuLQvhVGRKdVQsoHlcIogJ2gHxvXx6cPoKWmMG+jm9TV0dCqr/H0tzs5UFR6MVXgwjga417wOisbo7gtJaNbCDKdxHiZeCAthFYgHl4ASVHy2daYAGjWCysyRnFfPO9R7suoxzQRsuhMxizu7et2kIRDbSCLRPemWlUTT6H6CJoMwNsK/XgHbJhh/AiH+C9RyzK1FjJ5BvozN+Tptd4k/RF2kkcG6qUIsC2jLHR0xn+rGNa+9pOIG/faS1gCmUxoMf0ehxTKYY5K1drtBqVdkbjG7JN1ASEMACvhcIAWKX8ZokKKcVvOcBR2w4q6+kUiYPmTiEnQNJesaonV3l32iQ2EQsgFj/XT19+dUzlgwkWSz+7EwO7emBgzORH2yEWURVNrYUeiLxlJKvzslSxYNOYeSOjgU82jbSMGKveWFdrxX44r1Sf16HnGudQpM6boxF8wpCYfaD4IzPVzOZ7ca2QKs9fD0UW2i1H1FyG/MMdi8kGzs6pNJDZlMPc0ttDaZZ0xcTsQfL2ZEcRIG2OgKouZTyYu+TCGE8vfBz8Dbd/f6uR/7Iu/oH/28jJ73sC1ZdqP/2oyhOHoN6U21qFs1+vsGV40ttmZEn+QkyC05MgWhcrQoOaevaPwwKbwL7SWUjZCx3sZhz63fCIMcC36DbpxjNpK1UOXKLjkxNJKVcCXFzEGZIAQUt/LDeH7rpteEQf6fsYVHQ4nI5t/n6wPaUbbNQZ8Zu/AUhMmBdbpdapDjyKxE3IUJA92a1sTgZG2f6zMgQ==';const _IH='6d2249dc90e8ebf2613329dbf36cde49ed20e78b6eec40ea64583c43d4918f0d';let _src;

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
