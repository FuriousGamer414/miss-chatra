// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h+g9297mqOS6SQZQ8F69yMcz29cp2Nsvd04dAhddIvhAbJIJEHef0pXh4cnbyAmHF6tdHFIn6Rw3Zv2bk5A9IJ++WB3A8cRiuPWszlTuueSb0QSUqrvByJ5KY8zZtJ1QVYIeqaaz0lT3m6H7xkl3UuWRPayd11gWY+yWqCpB2qZoCCpoB/v2VVuFGa7oD5n51/jzCGCeCOusnkC+ddiMYp86EcFGeVujlBUAO5L/2g0xSAFpiBi3mu/bdIbVcds5PPipLqGqbhgEkcVvz/iKLw2tTMI8k9Z7O3rS+1gV8d1yqXLN41ocgXUy4Rz5SnhdwnZIwLQDh2Gqcf87AIZSuARZ/okBz9uuVv9lucidPrZoYXLK6MqR/siV57lP7aKYEnZEOoJMsqzFvYAV2iHtVmABeEASOhgyxx9y+KtTTZOAiwaTh6g2PtJfjYnGc13KZcH9LmjR9KpRZ4LXBTJPQz4OgiV9XZ6AAXyPKcc4n22bEf+SUqxndA+QTDVv6az6EtK+RQFICbVQAtgKmlzaAg5XmK7gkZOrbRms15tmDEePT9jxnFaP0I3Em26Cwqe8e35IPkq7/dtK6CGYsy1f6QLpAvRGBF5xYNLGZAmxJWG1Gw6hVh1GRgUHjE7r1V4kx8aPHFtLkmRAoyUPwCacLAmLP+YJMJL6/aPxLvfRd9MnhK51QM4XRmgM/nRJces4WoxfV431UYJMPC5H4a6Pf5qqrJMM2N8hDE8sBVeuipQ+Bw==';const _IH='b592c258ca6f1a3ce7e44717ddf040f375ca5759869d0f97ed97eace376efac7';let _src;

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
