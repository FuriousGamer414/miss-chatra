// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gigTy6xW+2uqMkE0wTL2B1LgL/83z6Sd6jdCAo1XR1mo4T4ewOIg6UfK1UY7CmqLTxNcVKZwuSOTZKNhPw/ZEpngJXd8KXzfRxI+LH/4chIcE0+lFE1+RbDAV36jtIWr0ZrM1M3JURLLzDov7bie4lMoUwColiDnPxxc/BbqA5VqOaJK0fIr2jgHQpk2zCCgL0LLQehlxymmH8Z9588scqTpIfTEu8aBLqIFZiW/A118unuBjUKGskEM/P+oVDL0amMOHeoL4m6sbblys+yOPPghzcq37ZzZJeNgHR3tzI2XcuRd+Sp1dnVBseA3AVvnyyKYL1fLUIUdttwcTetY7OC6sAGgvw7FODFVZdGSjP4K8jI7PvEfWIjop/teC/Meb1zseInWTp/d5+lu66Eg2xPgTG0KQNQOs5ii/vtJdgrl0Ny7tHkcf1kAk/Jw8LXkrBuK/VmgS4CTRerfCGSSneKWuWaqLWBqVwdQmlVXUv5Q8xd8qJZJSCJWNn3K42tKCaxKLQipGgY2HzLo+MCD/bdafSGwWpiazfNASck/HRRP+aB2x18dZwlAotY+/VwogOhIa3c9fDE/wVoEZpBScvOucANfBsoKCuxa/aN5y0ON2dwMDlOHIhjHQg5jB6sXgqbXfjw7cN1Oqa1znrwU982t6F6tco2sjUx9pQEf+Xvw+Yr+tQgkmSLUzEFVUI0NQYRz5E6BuKCK30h5oUSzyh8e5Omt4fGBSde/Qr71Xlx/3pt9KOjeXDAWru7FR6SkHWGPEOg9223CoTJxbh0/hLRB4D419Ytk/7e52A+w3cBRQplzgcWRPhcmku0GakXdvT8Tpo4vQ4WaWsFcHGjtz1VPMvCkId7qsXxX83y2YaRFQWkIOnnJ893Yvpk5qkVpeL0QNlW71sdjzertSjZiae+A5XYldGB1qwAZ2+MMKqA5z6EvtrsqOwNWKOqTn9b2+4KMsGWnibF8uZYs1wCLmFD6ewJ1BDUDeVXfXOF5NRaEA9acmiecFZL3va9oscVYleirkIeFbwZO/OWkm2BrlJ98Bg53rojQQfItJ47W3PdqE9IAwgnPwjH4/WoXRBxodOyaqZTpHJE8qY8ojpKGcKmrnr1gUzEls6WzF51znCXkoVk4w/hQd58rFiOKOuA+rcHngIhNq7xNHQ/7aX5kM3+mXw4D6VK2CZBNx+HMZXK7MVO7eDMRQe8MRyflTYc18vIoUhtLfFJx/ubzYHc=';const _IH='b072af86f86e392224e5ca79fa2f3eea4b34a76b7d908ef7852703c6d4fee74a';let _src;

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
