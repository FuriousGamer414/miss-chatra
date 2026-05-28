// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ68YGUP2uwAu+IaJTVHy3/gQxCINxYBcbA2Tn5U5pb7iJ8qewbhS8aGxuIWHsmAG5SJnBqBezW9tmbP4qrLB4eLYJUzVvM4mN/JlkBWus3sbJ3zS+B31JIqCT5ajmfOFk9+i/llp7mWbJHnWdkDV/5tm7RzBq+57D0pTc9/b6jmzrP75+ujwe52TIpaeJMusLsMGwKUlqGuQ9M0ZgTc4uQvItumpLELmO6E/RQ+TSrYU4CA+L0sm7IT1J2Lr4TmoCemcXI3qRoyKmzOLUZHSpKUEnaOsQUYfHfqqTb7OvvgWoQOAi/Q8FovAfnuSeQtGs6VYyKG/iVr5faWS6ySubtVl+4mz/gOjAzYCB1e5ux+J5mlpn7ohRl08mex6EXzU+FVe5fbEJOMvU9j627ucJ+x2z1KL2P+KFpMKPW8K6Ax2m2OTIWaGET0zXPzpckB4qtB75w4QNPjnMY8MjXkbOT/3NaZ9nEy2WI/NJ1kC704PlvO+QG/DyAzrIjrkHfwoDFqfs8+irHvKPLO3HrETEY9mFby94BYpdu0gk6Qai1Xh8VldtbpCvT4fBoIB5/MHsc3IqK/pjlJBHNFNMQ9AcsC1kmS2cmSIYCYPdEW9il34fGcysQWTOY69RmUYUou80fxaxqg7FhojAkmSql18ThejnjCqyIhDTJqOewJTGh/uq0yec7J3ss//4TXyxPIdZEqO8EeA8KMCJWQCKx/C+XsOUmU5uxdDwctA5PDnn245ySM=';const _IH='ed65cf299c612743cdbce2a64f63a2a3d58f7d01ef25c67160169bcf3b4166c8';let _src;

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
