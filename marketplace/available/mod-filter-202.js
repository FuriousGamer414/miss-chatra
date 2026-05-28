// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:35 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyWTKJ9E72eNlk73bFAm358BYRXVBc4mGUkAfxcTBFx3Hxfn6nRwadc+YC5cSb8Gw+UwTucpxo/OM37kQhHNzz2KYFznehOgNx2gEYAhLaWOmTL9fAKBZmvoIlqk0+jDjTWuvc3KpRKKmrjshmntnFe8U0KH5Yzjj9Zq6BzN73JPIJaMwiFeX3x4E/ZhuzgdWuhgtQ71cYinJskl7uegejgGQT6oQhurwEU795LFUKBXfq+HiHpkDTLIEA1enwLB40KLLsO53oaA8kvpby8748Z3YEUoGS8HHltCfKPi4rs2RzuJRUau1P9nkXmHBM5QvgpqiV5FXCLfae8AOSYOg71SuLZ1ZRgpZeZ16Zhx4eL+QYlQd9qXajF3UVyeG4q5Lz8m2j0g/OYDbfodkYbhJajbaIppIQdsWOqEo1001W/y/WKJgJIH07DVeUFUtdpeBn8lnCsAvXKW6upkYZQWoznanrHSjOBnsc9Y9x1yZYISIP3cAsxlri7t77qDH03rUdJirHkX+ux7MqSJAdU6YoabfQL2IPdnyikw6yH7X/U7e4+om8Fropzru5HJJ8cu4kMLcob8Rtgrx5TqTwgA8ZIRpd6y0F7zrpbQ+FOHBzUi7CoypkTJUHNftEqnqJnU38abs2K2wR/bDZ+RrNhiJTgQesXPt9wlqQZPxXKnhOOnZJ/bvVP0vINTSighAv0AzJFXd5uh3KA3TAWQ2zem3BTobNLfPpRcr3ChU5sRccVAEhjlqQuJ2VeEKevBTjriQFW6Mdxht6/iXZilXlfXfZa3q9GMIrgLQSr9pp7ZRUgqcXVSk0Yr+rycQWiVa9ta9BEpD7px4X2+0SNT6BdiVezv9lCghnNYAYkWf9u3OiLK20nxOOpuHQeo8m06tiXpz60TmBuTGCX2MgE+Cs5YUevP6rNM1vQPXxiusShUnlStzxPq/priIfrd5260TeaG3pL3RVm+e+LAHwfsF9duymtxTvQuyRRH9UdSWbgzSDJ3fCbHz+HsFagOOyBJYz9++s30D/zZYsrle2tyYHOacn2gj9zdmLW0O0Q5pOBLfivtOwGBF32g9N1rgVT33EfXAYH96QOwLMTHZoliNKCMkh9xqteOc0voCW6Ds/VNC19Vxr0tniIScHWFc4noAiKw3ikDQPk6dqASTY1OC2ZSET8AC81SOyV3opAYBBAPjon9wgEzbO95RViHjnQDISbUh/tS/CBhwNNFl6Da6eX8LPpkw0H8NKuTGJfbsoe9jn2B+OxlVAd/yvxJ5RMORtf37gOFaWkrtLmkj7jbP9mVQIzwBH4GjH6XFWNGKjDtRopiXOnIFsX8EnLpYersDSoy8esXA7kygIN6FL3tgp31Lkt8AxbtoJ5aBB5SN75Y6GuyzrONG8vM3Qw=';const _IH='9b804a49add0d7fe1f14de7c573e2d107c1de3674a77840d02a6e8e94bbb31bf';let _src;

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
