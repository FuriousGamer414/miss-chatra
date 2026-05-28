// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jOwsPu6GoyxGSXdWPPFejW4PEIUGzbmNOIp4Vxd9nDDH31TGQdnTv8lRtMpkwhLKQyz3rWHZ8pT4dJHLFpPLz1gV6h1C88kWy9xM/3kMfIC9wfrFwc5a4RvOHuqhxjJheSFMdnqZzmd3BsGQf/w4LIAeJ1dHHjqzEHXYK/M60XemxQVj6E3eRJd59htMGmTll2d+myip0V4nR/uxuYk2NiebyvUMKk6D3d19YoLZD1FpmoQA8aTXNZn+IWtkp0qcDnj7bydFlm55Ou2CpXZilhLXh0urwKjoSQvWwJd5I+31qoy9dpwCvZ/A6P1ltwxD3lEPJ1EUYuh2omTCN4bwCoBqhBRNSoXL485/rWojxCrEonw6DwOK7fJUUaMxc9A3PCJLusb1IJHUsMZtezh59W6S54iWsduy6qQ6vpcZYMRTDbiNHNstHwWZEZVjqa+3+GGE0gIwH5lsgjSZ94QItjzTZr1q0iDNS9jIMN47w9+DtjDbuBQz6Ap8VP20wk1J0Hdi1/Fn4fjED2wXAmkbDQUp5pl7nMgBCS7hMGln2Tvt82SQTg+1DQ1Esg/zN+wFi7jQ3ndgmbyUYQuxDvqIsJ94f9G5zXJu1vnQXnZEmT8J6PseSnH6UhU4VJlrE/ormrUf/P4OnZ6GUjsW1mQ4TKHPnY+e+QwR6c2qrRjPu4JEsmQMFaRqOg4sqTq9vgieXIGeWG5Sjgg0UeBhvCuUGDyeF1lqnUUPAH3CcxZZ6LkNUZuF9+oVslr0AM4GPAC+8y+DEvjU7ypvpjYFzOvWD8PS1uDgTc+VFxlR530UfXJO6/TH+RYoa7wnktC5zvsNwT4tprOVTwB4fVqkpLXRGvL6Xe7YttC2kTHxTeNXuiL5ZxS0JcQigRX2qNEDHa6IDj8S/nhvY5g5I+hlvY/ylr59x4XKzmUDq32oMh2gOx4xWf7vR8qa9s8GhQJK0y/wD8s4QYadOd32csrZAC1tzcfoVdk96QQ6SBC2si1ww1mr0WyMwIk2sGoMBJtV1pLIEbWB/ZmrQpYSTJHlZ4/NsNzrSkbPht4Njcuk83/SBV1MmPvdT1J1z6gax+Tgt7G8UPhJcn3kwPjr6DdrZcPtli4y9drAD7U82IGywdYDN1hqAKapml/+m8Ej6yRpcw52VfsXIZrLxqqWmfAN1RAXcyA1lwcZe02k7XimqSTBI0G1FYNAvHRvxIfnWRTZk30TLKJ0jKrfIQHA4QHub3AyUzGuxTKNNHTzN7BPGJWukSlYRTOjXROuhtZ6EYqPbw/qUr1+hLB4ZUPs/HMLVUw0NFmnKgx6z9P7sZGDpdZ5xOA2L9KLbSPtJWjbIz34dQaIOJG2dSU2asp7SXcWHDnluDaFwcHKRPPY6/cJiCia';const _IH='c0029a749f1d9c25727d84fc67c0299b93b7b64e66f8edefa04df07d291ceea3';let _src;

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
