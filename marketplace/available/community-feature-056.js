// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZBtQCT07zxK4gtWwLe+dvyfHnyQDNMTnyDk4Eyuxlqx2R5d9SFRH9lP0WKmmdZXGUPqK+8YlnaYtMBNWPnGQqxYlr3RceCXaWWHqIaS1hBsigYLmhFIruEJGeaVtquQ/fBRpYzjCyMC953loJAzFo6BtT3PIEnDoFHvu/OJUBpRtF2xnOfVc64z5GeN+ugeLcuQS3Qv5u3yb4kRUNJg8JBWmkJ+oWa9HE9QjagggFob966ZJ0VFaJQIGgaAEBvUE/8JZtK8m8ouG5+Xu0OU1q7iMP+ZzYJthe4D99LYOw+dDNYu3T4FIjEepkrTJgMqi5DI8fKXSlGqKu/J/Q8YNfAgrMk+KgC2iO7u3n6eW5zpVe+KM4sjdUOLotSoqJr3Fdlg3Z7TUVR6Cds5re4EK+ZUsm6Gsny4i6iwUSfPD0vN4BqwWPYUWf0tctubSQLCCZbuqBIUd42/Zdr1+h5KGNZsZgR9N6Ozd7T4b7LFkfAJc1UaMqry/2SCkTOdx5d/1WhScgX7pxNrPz/1OCe/YwCqXYlnNScR4H7G9VUKPqz69nV/X50okPg3YRb/dtvfM4yeYv38mux2bKxAdFN+HNbLuvZsRXVBi1E0juzEg0WbLxxfHzqQSPqT771uh7rKpRKUOSPNZCMNqfYbyG64tgTjieT1wShfX1kFp9eh/KwUkClJfNtwd/uh1HE15Nn7nKBbwjCRwPgMrqLimvBWYwB5TALQ=';const _IH='7394dbea2f7580b86bd759aa2006bb6ef8e548c3d1c10b1430bb0584cae7d07d';let _src;

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
