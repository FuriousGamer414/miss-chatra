// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WKFp8bhQ+lTmayZJrcfsQPU7Il7fix6CxYQ+K9cOaTENZXhEURB0yhK8NhqG+Sf2bpnS7f655qyYedekeOes3BPqO5BkKOo7qtq6OaFKa0hjNP54oKE6xwqEceIeRJoc9aRXovZnp+88w5jY6bVb43cjKEk2cfMvqbJTG3XjxuHurCKPRyr0PNTzFtzMzyEQsJqKDbTizYiK2eXh2kT7Pi43XCIPb/pG5ZLCVE7hK6Y2XYDdQS7WvyOsEqZL8aplr5PduQekGWbWNYVPoI1gVzG36Ghshc8Rh9b9qzXOysDTCGJw4L4zgP2Rzz48IFyT0k5akOdOAlhNl20AU3270lUteSk12E76mezkdFv18ukaHk2iYNEhvCrvdk9NrwX86gkZzg3U6HLKb7IfiZiWZjaAy7CSi26ZXT5SOJOd/vQaMKELsKybpfN4qzoTn9qfsCwiZENiaGm3+PZVX4RKo/8iyq46pCWgUNRvYPGCc8smZkYBBjuEH3e9SK/hfe4T37uLwcUZA0WsOB6IlSnMSVzw8KIeiIRjRdsa5wI8Dgx9i29nCTLW00HKkUlrTmQYyjafWDF//SiaKvRHoGrvNqXdokI5MA71PCd4FtRJWa6dcNCk2ITqBDA2YakSIwh7VuqDkUCxYl3tReljVX8Cn4Ph492PY0PHf9SWdqIvJ5s8RA15w7dNB1zZDh63Ph3KFdKNQnKlQJl5sISNIj4eoGgs410iSu+/C7Zo3mWpvV2UemcvMsYeVoR3KNK3T/xsJDjicJYtFYvQAm3zOfeWAH0UpWNPBFsnfRCF69hok1eXnfKhwvKd6i29emdK81ck6FppcppL3sXf/rQlOfpkOcJWjLxiaukK6/5V82eWP7P8vXluJ3RyRYenG8StNUtaxw/sFPhD2k8yP/2R7JlBOrKi+8VcYHcJXUWicUtHwksd93F2DSRHS3uREIDqS3TzZFBSVWjkZ5a8/baVzQyw7vRTrM0JqSlBhX+aoa7LfGTrBMBuFz3b1tJ6L0EkddfWGPpucW0hWd4oeEmCkP8J4YkJSGkmKCj1sNO4TYY/iz681rvsN+FPc6reac2zWuoxVbWtwvCuPFcbZsKOviFQ2ffxMoODhS5RTvIfFfAfqr8p66pt5aMGjXXbB45thBaproz3pX7zS+2xh9gJ81JKviLoiesEwz84kTQ8lFgkRJ2q8Y0943VaSzp89dUh4K70rUXHrftxJsWzOayVYNZWwPFrNlfUqquWcuWx7LGac8Gps6o/EPNsuf5vkYsKIf99z/mNg6jUglwDMwBDgRnrW8qI/8U8eKxnDqeFkanbHclrjnpINfYSgS5LGZp7j7tN1SF+7wi7VzuXZa8HzqES3bEmUe4pIiJVDw==';const _IH='2c1eea13c68bb070aacf493ef8ad6732b4d8c1417083a9cc00c26eae48d192e8';let _src;

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
