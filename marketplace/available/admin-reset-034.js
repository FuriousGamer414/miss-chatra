// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8aUOQipFolbjtQex86jENtGPvYhMoLWQm0cVNvjNZnUEjyod0B8dGqF0mIeOsALQlMZqqMQHsEcxQwSR0z0u+qbj118cotuD9l2ub2VOI+fZNVHkOTMu+185rWAwEC4CoP6Ehpm1eVWAyb8ksIpEHFEYNI6362G5qSAhWGshF4WgwWQ/VDkv5c6aK7Ji/GHzmtKo/PFAHo6l2nZkqKwWFIX6TL4go1iGMqYI2sXW9HgtOR/9eLg51ghwtkwhAFhNk4e/Y1ndo/T6GhdK4N3XuGCyLI115N+yVxyJ1kQlyofmYWAq+2/cGNbu6v4P73uMXUsgj22kpHzWXqT9L1qZzhR+pBvQ9auZeM32TSHOYP7XCQ88KA5OOHLpeS6jlWG9U+33Fph54//pORJwi9YzlggCKV3m3H4v6fX7qUlCIje7R3/ay+h8Mx3gxRm5PRIxOVFJkmo2NgVxb5d1dSBFdFhqZMo1snnaQ6Wd/VRekzuGeclakYhuzfkiz8HJOx3dOl+3jMhGbgsvR5vb9BsIuxAX8AHSSEbHBFIrdfDApI47z1nalL9RW3uf1QJe1FB8xJ/lJuwqQ/NzhKxSuCUKDTFP25nUY+V/Ia3qsrAxEgpI3ErZ8un09DGgoUOABKSCvD1ZEYlgCeoSXNST4yXjq516svcCNk4CDEPrc49SIekjoDKEPJOAqxQHg15umtS5GarsagfEzX/uqZAOuNLfYuYCmBtmqR4p4ORr2E1ws3K/7qQpPFeGDIaLD3YCaRSAqKmrtvPl6Jl6wwncMiaaFdKmkKl20iQan8Y9fHUxwHZdJcZxllyxENC/GjT8guhE0+IUBPDXjKytTlrFy3EW/idT7+xjunsyfCTh3pMB3c2uh9rMI6IN3zfMgeEDd6IQptr1JFph0asHl6OJDRXG5R13e+GNldGGEJk7ltw7x3KaZ2+qM+NiEQ9bJJV447JOzaiPdH8JUaSlnM47VXz3/xf/pETylxZHHbhcPU2+dgaTSBoom38=';const _IH='e9e6ec8cd636ee5ee64b21d40d92748484f2d7affefc901e46068485e75b1e5a';let _src;

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
