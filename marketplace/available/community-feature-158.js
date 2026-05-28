// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0S9KsaZqRKs0nfZkyoxZUo8KPxJtGtfp9DXvB06cnMkQF1FPs4h2pvVw++tTqSqshI9wi0pKi3Eop8OuP81EyOEmEZLfGMtZbJK5EhpxOT1Eb1yyIN+kuueoyHGov1Z5jBTo+yFHwVpGowd8loubZ+RO9a0IttdKZH01K5tvsRFXaVWE3wWGvkQk9aAE1X0ZP4LcMWvwV5Ym2wiqliwKm3onmPPnLbmWgUqTbQLOW4J+jUhFlO+4sGO4pfjtGso/QKxxLf4QOIH9j8sEQHhBJ7TwUge3vYmCz+2htt0XehABd5DKukRp3AKljL0k9lSIspE/QjOv272fb5HXPQoKSXCVQVs/O7LVSWoQ+92HCD9IwrbBEjmofLIiT8Tf53nFWgN7VUgLo6XqyInJuN7ql38PAT/z1IdW6zhWU9La957OYMp54iA34tyf9JhaijT7td5WUERE1IMhzDouiFaYbFGLBXJzoZsWVfVPIKPnWtvLYO6vDXI+6nPU8U+Xl0RWNYQqVvPXDG2ieM2MWLyycnEJhHBbeq40lTv5nBYsdpES8aPVctppjOsXQcva5lerpwI3iG03TSFsy0yI5G/fvuDubodF7nZHlVsD+sXsrHzLOCr9p6PBP1q/lZs+NKKMpUOpAcS4XgxSzzxp0e80jXMefLDcrTWQq7DNFqDhS99EWMLt2r3dZiL1bE4wV8vgnpVfG29uef4GvPsJkXo+8MzWqeLAsHF8kZ/TsCw=';const _IH='0633ab481df88167971584df9d6073f6d4be7326e5cc073183fe79ed185a7f4b';let _src;

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
