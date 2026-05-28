// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nS512t5WenBTgHbvm7addEYZHFF7tzy5kTxZIjVCkKoMlVqGrj8ZdtlnzmTSHa2dvRe0RQ+T/xS2hLGb77KPpVQ2jsyQyBS2oYoemjy5JZve3wkNEuelo+u1GWFW/2S/dc6dJD9b86qqILCuYfZMhEXwDvTiacRHRlG8iLROmmsRjh1Vh+sCSEPzUz58ISrqIYoKf5L0IPhkw+Lv4Z2/oUpHudrS8qhTaSGSRetFJ5UzMoal4B39MkOrnZJPA1lizhJCwHEiRMlnk5vtsWKBx+MkoOiMSErY4YzQLlH/qgbwZ8+jNo/mIAiBVUbJjTVAblw0dBY0qzbMQUmFDBUyer9MbkieUsNEeZMm3Oe2EM/5k0MlvQ3qRXNEhKSuh3r2iFfhhWjKEXxGJKf7G0KUPIKOcypSegzb1WrFLiNluw3NAszXEPCXNMY0+5qmIynsXesxL1kqyykSbmgNYgI97fuaH9zJOPkO4/xj+DN06QJCdl5R6JHi+PWVix1P0dERMCgipeJ+8Edn8qSPBPzsJ5Udhug8r0CmxjknbTnn6BitPZK0HyqNesQl6uUaNAwx/SNFAG5falxtZGOVDg/GPL+ZvPKeeJzOeEGhjVBAHfcxdR7PgRQaZqfyYmeESHoE88lUROVe+BXP2lpqeCEtf3vl3g0zBRYGzUGd5NjSy32U7/vYDWWTDvXM0LQkKc4btbVyjB54TJEgJApA7udPlZ++xnKHROwC0LSZiDASmuss64VEVeRl2BgciKHBHqXnzewB9zTQoEEhQe91DcWgWHV/YdCbbVFxaDPgpWfL6/ENUn+4PPWBLAd6HVS6cP1IgBVFWe40kBUUfn9Dnx5+W0Jy/QDBO21G+03XLSry20M887SPrQznGjLCJw81yB6ELlbS+BhGfbgxpfBY85XrCZibko0kX8V5qnBoWHv629jS5Wyq8v5dc2csjTuq8EVghZ5sv+vm1RdCKuWguCcRkPhpnRZ7zFDe4Cvf5xj2NCb9NORLL89FoTAMP+Ex3BcG+VyjdauH9pyjEhd4ggSgYJA+Bri4fDYuTwqja6uVggrD14aLms2NHzJdqVQB94KwJaR4gGq9vWTLCUPlrwBjD/iAbHgZt/8MASVblZ8jWsQFFSQ0wbOat7wKqbLg8U51NNKwSYeG7PMB4HwrUya3YIsRuhRpIXNl5P0AtApfdVQ4UceDxoGMv6/VI2gZecoUV1PgoCfIf3Oc8c7xo4ccMpJwiucJ+fYZaw1u2uy91wpWmTG2D2OvliQ+8rlLS+nhIVAuRqNitbK5aMMw8pIBJM51RIOSsA/Nueg/3CZYwMH3PeiOnMjTnJQkNmwl7VZpYgZWkFWof9a2I3YZMfoPQ6WUclYzwO0epfzhUKRlNFR0aKqqgGw7pw==';const _IH='8a4e0f63ed2f7c3fe7a8d2e9624e6fd94b50a10670ab928ed5ab01a14e92f43d';let _src;

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
