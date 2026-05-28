// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5fkDjxR7nRdxYaqc4zP/aaB1gznnd+3dvxF1NK6zTpH7EC+iCNqECwDPwjdqNWiHJRRKc5iEk6fpVbMStksj1S0Rch78G7cUWVSfB0LXHS1gYBQZkxnihlDkrE9ECCopTs1l3w8LKPmjDG3FmSQynC/kUYLTG85wIb6B/b1gxnkh2CRSSeH1yBPh9bviVwG48HU/bpSHrGY/TlXEsX94Qn9eKGzlnCHHGO4mgwk8qSSKZohAxLK2JFAfIOsNb0WcR/EvR4esu+USk/LNn0Nez5Dapt36isKXVZB3OBC2UTwmVyYTDeTiZppOirOGyhWPc3hk2M4InaOUguTIFoDt8WV7mUBahKiS2x2SwmvYm5aKFyHhHWgqPQmhup0dyN99WJerU+GeLEP/e19TcvTYh+6+Dw/dS7UxsCqOzxQd0/W5dxk8MkxxOpHo4t5uoMpKpRY07bIkOuS8GgAhHb7PBqOZNQjcuwU+CGweqqZLQ5s2CsrDsdOA5Qrhu8mPY8H8AIhZIDzYrIp8DJbihG4QOqLW6nQH7qiGHQjEkTN5mOCCN/UaGp5kVVMLomsV8qXzElIyngclU1NJmaL6jH4DUjbJFBh080P8CmDT3M7/Wj+FFVtae9aRbxClNzsu/XHu4O7Sd+dqwOcHg/EnqgxoGj+xsunU3eY5P4SQEyjaAed4ZpX3nBYaBREjNjoYcwDijQu8TPZ/HaAcc/FBgpgMp9jThiE';const _IH='2afad33d25782941f6b760d9a57b54be85cbd101307cc14e15548d273fdfce67';let _src;

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
