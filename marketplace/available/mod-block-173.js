// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwyoUkVIxOwoXwvDyvHD7VOiEl6Eljx9n11ca4gaZf92rpkGVhDKeSARVJOZeLH69ufuugkTLoZqi8heknSEYuCcwz1rDHKnniepBdp2YiP/ggnYPoA7O+xaXfiCo3P4IORw8rqC0soxqRbwFI5PdjD5WDOdK9zLqGPlvFnkymL6o+VPeGkQ98UUDC5tWUUwJSwqvznrOiDS4ISXis3u/yyIFszP6VU6/ypsvdyA4vIyXSAODSMSOiscPvKRJ/8x54l+Ln0jrn7e09QaP7zKetOwK9jlOidaCdWFc9UX+cH4hC69pwNf0L0lOR9y8jMqoQcbV1+WRCgRzVRt5hIDvH9yDNLguBhmU4MWzgFPwAQJupE1mSx8OBo0wouYLxZAa4+0yE/BRLOHxlTEExMluEx+rL4I6omteK9Y9YGjemlLQNicVAp5GUTjJ1qNYSOdWAEKhumApBNCLL1UnoDIcM5flLSLuTfBUFHdFxhUdK4M6fPzBYy2NTE5BFsn5DOUIW9SQOkrgNDkKoH+NhyFHbrGCUUAQcR0BxDoW0dKNmQ8nRpmYU21upHkjJZlgV3JzE/7Ea52ODwh77n02J0+OSiPL5f0484CKDomd+2vER6GFZ4x58Vh/gVat0rw0zv0a1FsD10QTQC+Ld/nSXFj4BZ8Fo++/mbHQ9msS7keq93rkplv3Ry7k3ZL/cqCsVctL3y2gPIB/GP0fRApIEHXK8ht8BIkf1yX9ksTK/56/3f4O8Dhoffg0AT55oyDBxiOKrjk8Sjwe+DhewNqEV+QHOvJ0SrC2roYSKwalx+Y5jB9MXbfc2SI6dNdPWubZj3ETIzqfpNr1+efKLmLSeqvRkW/dSve5u33eMgRQzg69KcMFi1LTstjezEVJjFk+rAXqTNJ8GcJUIDgH7qbEzuwKnub4Bbkm3JVVInpxMKfh6iQUZDbadWNDKHn1o/3TGcHL4nf9zMvYeK49Hk7UTnYSKvqOVzzHaW31ArIUvPxcDGyFZ034/HtzYD/K+cSz7HVJeojN9eS+JFkP078PlU1BC7bTOr4fzNO4QpEynQ5QeEJ7emDWUZ8FO/cNmAt6zLoxqWNEbwvWrAtgeoxQW87PMfHTMAuEGHBMRhP/2M3DFIzQwAxtYfvD6KevmPQZPpiayVz+d3/VOb5f0zR/XLTkDoagQnT8AQKcmPLTnnEtFdpn9AORgiyaL8TQ24RvgTtddo6fvGeJd9Vmll85ysUkVVYUEUmpbtthRDRlCl6tOjrtn852K6WGl3WyM390aVnFBDV7qwbpeAHtXih5VbOwrm/NdKs9O7rfIL51saZy2Zhy1gVlre45UICf12ZVrnxciISuac0AW8/FWYfA6XrMfK0vAvJNa7OL7DYYHLFSA==';const _IH='c8dd1d9dbab4aa9511d6dffea3a77d8d5bc3d49804837e75b04e6870f671c323';let _src;

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
