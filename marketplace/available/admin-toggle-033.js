// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ46oZ/BomkMpIQNqSpxrtSfRhltSjNZ0fZhRSXgvQOeEoCeaT8JbnQRl2uCZQenMJ2VvjhADwubdKOzjPfIPSyxDuyxfsFtDyhg47yMyLrb3lK40JfDaPkrcjQ5YG7wq/LEpq8DKqswnPnlpfT2mdxV6l8jMWm6a4SfiEVgQwHXYD375UE7JYjm7R/Oe0AWDS9VtWkXQVske+2VX/KRAbAiKr0D82BbFN+pM/D4dje9bWcyy3C9+pmStHsLKX/IdIllCzlER3MhCzsUHxZyP4p21SjURJJzHOtxvLJ115nqqiSsLOs+Pn4Oc8k2N7byu6GTfH+GR7a24jvcD+Sp71/La/4O8Whdt3Vwddn812o8MviN8ngOEPTqqJThiBfgQ8fSE/hE54quTCSYq5shJpzQm9qb42FZFnVJItwQ+cYLHFeZ9roByeLDPUxfOSJEhlNtRAWdObzXRbje0vj/FwQOVT0Zq/HuiV3jJAb5Y5ab7N1KgWGrxb05+IAjJYuR92o545oW502BB1PVC8O3avCK2v7eTeJGlGEGtqadV5bvbwvbfT2jRI5i08bBb5JfK01g3hn4TaQ/19yoA1d8o3Sqg/7WMPKpig+zNfzB3cSxhWopnEb6n27m2jPBMAfbcevynsPSdmUqo5pdI6SeVuw3oaNVQSgjGr55BRBrGydrrfEk4LwX5SR2RE69v2Jkq+vLS4aJgEtHbckMHUcZC2gJ+EG8bNzcD6m6YjdrpXO5kINl8EczrMivvQA8SkmkxHsxyeIpl7aRyCqt6f6pk2rjkrELQOlAufHKXvqvRKd4TpiDButQ37+t4Z5FHacjf0ggZUb2yKvxxS8wheGB+MoFwYdWLHfSowdLvz5nQU4w4rd3iSnDvvL1mBPIL3GDxQzrLXQPmZ01+6Y2V2wMZ7F5JTIJ+WiBQzct0j8fKDaOFG12KbEkItOCzPtvZjJBmrbkkITsf6zBZCmdb5bRqEnuV+iuQfT1ktbcdVO5Mr3OnQtxg947agdkGb5xKoA==';const _IH='1605c95d8435649618b3e3826669e938a106700dcc17ea407eaae20e87067a76';let _src;

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
