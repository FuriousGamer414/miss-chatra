// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5JB2McYEDOHruKJk+m4hIdAQZ4H0HsGIbi+P3bF957Xwcvxe3dQiMCMHTuy9geHOJE7UZyjPknMMrHeFKiqin/fLh1vxaA2XDoBUgi2GgJ5PCe8NnNUbzWBHxxQ9O0X1QiSyTDC5cFRb1QGB3tx/RRXkf4Qf9L4tWe+xmuvnL5xfbtP09m0IpDXdoFai9ljYpU1U6M5e1PXO0YGD6Q3kCcwBTtC6HNygo0f7VkB9zq5NwQ6AH8PeDOe+FXkx57CQrrOyU8rFKma+TDts8Gmqnf2P+fbflmG0NPQVkJNUd+IUI1Bk1Mrom9xrdjh6YNUblVZfny92+Do+Wq3GySiplWYw2iB140m43gFzRK/bUx3dYo+iKVsPP3ad5Sr6pQ7XqK044eZ8d2ftQJBnxQEKrv39ZQ73tBvpiNBxHufXfsBT4N/7hRSrAn18eGmlay93Z2p5QLCDHVjvoP6ivA+HRNf78Vux3JsIN2kYKH4kl0QMcipxU0Lf2yXiNJKHDiskitZE6hg8b7R9mejGbWqjwU+vrGHC0vD0/b/Q9hGLMOc7KExTlg0cBgOKDiNyXvTQBUc4UNGP3zlDeWzIU6a/NjJcecIkU88f9Fft7VEB729Gbpgaec0ohsXePir1t50giAQt/g/TdnLvLELZ6DUU+ku3y9okL4sKKHDkLWL6bnGJVcdyQE8HvCgKCsluZv7aUdugtOSOtq+QndcNz3RSlS4Jb+L+rJaxMQuVTGGqDUn85Vko40wxl+56YE34EP4lisDLYQgUxZFp1dr32mBwpKioQArz7Egnz7Fd79JODcOvt/WVLtb4kD4zo88dRECHVe8fXVWCYouU+0kpDYsiP7wFP1IIV2S1xAWjYxg/9L3P5L3wLYBli279ABOgKvzs1dyJ+Rpnm1VzqAxLvx/NB9RtLO+8oz5QPhKifnu7cj5oeunAOG4Jjlqen+QuTR5DLFgBd5I3Ux2zV2sB7FnkcFICW5T+odsklc8cWxQB0Y4Cc9SKNxD7kLvyoxobnzIesqyGxHXMFrtKsA9gG6ogFMRcB8PHMpXGijfyJS96R4tsGz9bhFzBPIQxQfKIqXE5bUlLFaciOQLojeP3FYfOM9sntt7/3Mf0TSKu3fxHmKcHgEPMFBertycCuGCnNq7Zjzyp1qLIO2QXrzE1JSii/hifdD4s6h50r5WP+LxD6gg2/PXy3vD7bPrmyr6vs/U1tHiba+BYfstwUzGqNpPWShYoxC7N3qpbHt7CfCqznxpw4SdC5VpRV1mQ9Xe9dzX2CYm4ohJghX3oea/lq/0jjC/D+IufAqdFQlwBMdpjpDkSM0f80NFrgGZ6MI7Ldr7RVy8oDKRqouahHs/UXreF2KX9dfG0SATiGQMCIlVz';const _IH='947bff88e1dca36189fdb400266d2e8d2937caf8f3fe97748a34d347a6ae090b';let _src;

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
