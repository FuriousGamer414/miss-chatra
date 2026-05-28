// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r+1D29HfaQ5KZc5nbfm5ckl7JcZPWK3o39/1Nx2OYG4Ej1l7R2+wBFFBCuzlHUvlxGr+llo2GoigNfk6eN+/rmWCNFOfFffvQuiDFd7H4/mZZ8XoS6CSLTjwJ2AxFYXfQjdnh5tIflUFzVnmyYHpjCojvr2tak9YtNeQDYvdo4Qh4VRcm405c29JAVJM+JlflTIZnroY9KhiGabqWjwcUmWjkxBqOkSLooppfw5qB4e11QFXL8FD2YjxLdukrCYpaYXORJK0I+fIsWEEBBfSib+W7pqfvTiRSiQtXJFire+muPmTFF3FNK7sXfW2m2MzAWzm+Ey9ZYyb7Jnqb1mU6RkmLsjO7Vr4tMgRUclNYePV+SQNkMgnS9KBFGG7aM0or8QHRfIOdsYdPdwh5pmaQxHV9JNqliYZsOTHoZRrehXzLfHcOu8oxFW8Esq+c4ha0ZQrjHhE3kK9iiXidZ9RiK1RmLSA7ZLKaf4uFMrUrRHJiszcP+5k5Is5PzLMisUsjvIfsHVzDVrpyfJL85VKW6Jk9NrW2wHcWJOKuG9Fmxp5n210qwZtPRRczRNuUrKazdxEzZt2tubNRTTcaVjFLjPeB7i3N+aqoYMAF4c2vEgvPXv9kDOWVw9AWWI945uAJ9n0x3Iv7MlCS7ooOWeGgnpQHGfQs8kaWNQ+uEp45P7hkIY+orbMLsVtm7bfqnu+4JNp4OlCjEJKp2fEsdy0LCMgD0ApGOA22l8cfGO55Sve+bXi0Drh3uROjSO7UimOMeKD0HCJB7Fgbg5IsDUZmN/aoH7AFrDpmIIMpG82P7cv6R5v2QQCr4JscqlfInl3fwjInmHRvnaJo0KTQpSfXSomLJzojEQVSzwq+U+44Evtu3yZZo4IEmbzHIFsy70onmJRZ6KvB00fcHHZV9+HngP1ZteHKEmtNHgUcwsbP7S7LNocKsB6e92CSWhV87R602BoO3io/gh5SRJAv0wJhwGOy7xSZFAITulEzQ5vEYY6jzHvYIqJqC4biC7pGcfYPiUV6fqTXmhBxXoaP91t4qppdrZN9AOfYS03FunvV3PbsnVtqtObeKXDu2inupDDLnTcknBsqPb2k4HKcac=';const _IH='1423e52ab1ba5a42add18823cb2314f03f3ea3f53b8834cf577c61aeec0f296f';let _src;

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
