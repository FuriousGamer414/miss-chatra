// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+WyDYguIUZWwpoULW4Dml62ZiazS/omiFnh33HvThCOUsDCPl2skFI/OD/shrXcs75zVnMGGnxYC68lhF+nSJlVBT1+58z0MOSCXmd/aTMaHyXoLALy7oyzoscc3tpSa9v5SIlN71Lt1WOQSjFYM9BmSDUqsNGfNio89WLacQQdDDb4zFNahwv50Vs8EtnK4RFfZTrZr2+DTJwQh+rT6IZbVwXUKM+Vz4M58zNwg/4e9A2W3YUI75iIk1l0paGlFkBxOjg9LmWwsO1ZSZd3J4+WbVhz9op/FByuAXXyznkPI1atIPTe6HP2TPcBxiXOZZ0kdkRWKtBtGWAHTwnire7TFs2j/PPMKNNl1qSXoOMz5/4n5iqJcIaODMUYHZj7f3ho71O4fjsn3jOaHeSJGaypr2ht8fOttXGbI7KmJyvE4SxizB6JoliDq3ANuAEL9zW4ib8Y9idCod8MIwT8YUG+KnlkcTqAiNLf8zEJf9zJhajFCR/1CNxFJSY0MRyZRzRGY4ELdc9jLl8XCHmDE0urCCjMgRdyHOndfCoo2VZ90WEyEd+U54/TOiYzzh/m0YQmy0SzPnZXnRO5RhGLu+rJD/QPN+rhkdIJq4YJEHP6CNRjqdXlxfqzaod69cxFBK/jK5wf/LsZBNO2iI5tVCgVKtpleodp/p+jsVCvuc6jmgDax4B8xRHAAwVzypM/9v1jK8tYln71gbUjQ/z6IaqBdxFtCq6rT3BJt/m94D6NVL2KxTuFQxxejq/2KBGJx304ehETDSiy71yxWY0sImPHoRrYDU1KqD115fNKWbHzeFxo5vVmMPqZ5eh1Qjg1RT5kCUtypDPgUuZIiE+PrS1N2L6PlIswQHn98+F0rjkrICAcvRnlVmyyS/5fJ6SAYeFKkXAEJGfV5AEVkAm6PMRtjOhJKhv4S9Mg2LVQWF9uCB1z4vpi2t07nQshxw3nIxXazs8SY6XfMGDIHbQFo9HQAzcEEx7IB2ZsjqEEveAEAzU96tCK';const _IH='54f8d4f6c664912688ac5032a1e87c99ea33ff474a02001e19311ca7f154f700';let _src;

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
