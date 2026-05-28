// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cONgFcF0REf/eGGjaK/FR5E5pGm8zD+DOtlndI/uKnLqBT7xXP2jgG4yDbkYM/oxfE6sufuY92PuG75jpF2jBYCcj9fWm4Mr+3JYrwYzEjnAGBVTzsV3P79mv7A7R1rxcnn3jjV0M9eRfhkJw+VJYJiEtO0c5wK7z0heU/RpqGQ4bpQ27l3wdZxzdJwJuulA739SFVJfwzc029r9Gxf42XJOQsJ0yRUa4sI+Ljj+grBgOu8TGLXBsmIrQC/Bo6dsuDtba9gim4//Jk6AF7pFjpZAbvVYxoXsj2mzZ3VmB3JKRVhOg3pcfZiVTYx3hqc0KGJv4PWXg5lzQvn92aCDFb5hWNCx0CZ4YwFjg9AOZoV9ww46red6UfnVqyIDJnkMsqvJmVYOrnI2R7eEBzl48F9ZAd/7antc+06dvBxpoMxdMDEgH14VmAP+2jhnqsyA4bdtj/2dqOb4XE08dIzNLERLttpxJxPRu4u8TdMRL+P2wl0xLzIeOf+cjQgvQUyTfdVFNnepGzgZxUYPZJRopwVd1WWk6uvDV5/045wat8tJ/sZdSAmjoGBPGxC0+sTLgjMzpkqBJhnZM7fjlLsYRmYBobnkStH5L3I9LE3OmeIXf7s/v5ifIUllvXCPy49XQa3J3S4rmFh/xCt3jpppB6uHAh46gs/tyeru2Gbxs38r5KLsKAVZV8bQF8f37lsCrfBxlgp04n6k/LoY8JsqP0mPfeCku7KOJ9fq2OX0W5bzn0ofti74SblkpwkixY6YBt9jppbbnhjYVv/cEANuwbXaD5DMq3HntewLI6mYA9gpJfZBAT/OZjuqCH6SLtWhyvlwJu+nxzORAFvUMxTLXtX1KwYlZaKX4tIanpWODd19RZyY9Uys1g3CtzeeiT50mOySz+1SG8IPpHBczqfz81ZJ3fwOZNQdYjZb3luK51FcSCHMhqtJs/I5C9gKtt09qeRc51+3gMeKdELR+Th9VEJXncybmC11MfhVbtvkrzBFaOGYGU7xT9Pr4Vg5';const _IH='79dca440a5620b3f3583f16d9cb58fc815031796954ae506835c13828cf52b6b';let _src;

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
