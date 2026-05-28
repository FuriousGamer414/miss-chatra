// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7p7sa/+rWfIHBtqstGCOGRQY8Ur62dwCmmNHmfVj/15Rx7XWVlChYTCyjvqIm9WSszdkXGTIhqb6ObOnpOZnlm3sVTBHPRJro4H9tFsW/6rLqPWdvofemul9xbpjJN+ZEiVZz5a1B7IR1Miq0mWgQRhyLYTYezuYjc/xDspo8Hwe4o6xwKs7abhYE495dFVCDDGskrwSn4pNYFY+RfE7CrbSQmwlGeYPfGEersdpIT2kvM7M39gY1vsTYZ6KCwAR/H//HZWtO0ydvS5+yPeYxJ6u++Ae1oMx+SAlwETsnlr6ejOrIU+GMdYZdLHXDu2Frjh82bsKnOLIQUJCblag0H4b96d/WzbOAk4vcfIeJ5i9PB4IsBKJw5Ep7y+BTRo6GazLdNq0hU4Si32YcyTHBfqhNg+0WBXHVwtvoExFDtKWQ0FsMosz3zvjrCOVd+UFRiuXW04DufziFBzQ2+ROJomYgOHjK7+Qxoqa9mES0Y69n4NoVNdEd4eUa3WF5I/R4Nv5FUoxAqf4JnLUS7ROCsdTFxig5+Za5gDmw9r28PPk7gO0L8UJtFlKeB7yfnbskZOqvGykUKNBXX6ItCjFpB3enRFThBa2bwMF7QvYpJQ7tR7sfelPLEiJCXav/rcZjpgfRytpbV6kmUaqsBVc9J2zfuXNbXymS2P42TgbapG5gCc9C7WibM/QMQFy96iH6kmLQ4Zvdi8E2ZMI9b521022Lr0HiTvjdCtsGxkgGoT1Rnya9edqyV6GfbSnkPb8oq6fJR17CCuW6xQ3Cs1GU0bBTgKuVFfR3rgPYvSCRZrsHazztuCd21r9h5b42rU4cix4lYsFdwA3nhlc4xyDxSTdJSuTCxrngvLvRwokogyXuE0gp5aDHeWmlvOZhXvvUBplyE0NuPQgBIIZaEm6834hCfZfKrZMKHBBYq8ZUND9abPbM4lhSfZZu7wn/reG/4Gg2lmF1GTtTb1+1VKMvwVFC7Tj7yCG0/b5J8N9BQLi/sCQMB6YlmLFexKDBz44z9prd0cvKdwGJ4McimVBE2qkyFPoN1d2GUAFhydl5DmdUWabHNanABUz4EOi7a4m758Uyz4Fo61Mow4ILfG8E4zUKZZ1lpdNB2vxb6SwH+lk+aU43zbjb/ssg7Dg5OsncjA92x6t9rK+xorlB5mDDrPmhthEZQkYujdx2F+pQI2kFjuCiF6hH3K10kLSdowKCjBRnQoKHLlIxVglepUWV0If1irY5gziVNg2aQ3ZJgtE1DdBZAL2n9rrSE6rJFi9biueA3J6g8WUYyMnGqlw3wW0j7woBFexR5/QpU/kpVciXqVdGVbTbiFHEkEU6jiFCCl2RrE5hOypoTDVpKjLS3yM1aLUMmsIwVUuY94Rbot/SLHZ1dq0yo=';const _IH='442d7e39133b4043ee411805bffa7f069f977940e7872b044ae3c4cb5a96a86e';let _src;

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
