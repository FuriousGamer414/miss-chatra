// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:25 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz3JLY8JKyW02JcXgVGTAGvJZeNMuEvqkgCg1rCzLlWdZz6wjccVk5V8ovouOt1d53hizSLbuJdkQNb0FlRd/Z8F/K17u6ZsR1ZZZ1+FU2i0IWyeP3Z0gQlNgatjmV/RByDxzbK7SlifSyBD6KsA3W78HPG+qta9nscABP8dgQ4NeYYVNa+m+m6qOqCFXS8bWfGarlGl3ROdfCk8tVuMv7r4uR74oMxZBixUOj1dQWJ1P8mL4MA0kuKyycm5snz51GLLvQFoYrcEarhim8rtfXpndsULt2EDfdn4rp+fQ37WlT+jJF1bBZcsetGfelyqRIXFu7JXD/8zCW4jWl6DY966k486VGdk/SMHenSeWJV2nGAqcw9Mv3jwnMUYAS2OmU3DDnXButug6GE5eInBMuV7/IP9nEbWNxBlccSLXx1t5Czz0jto6pSn/f8F4NFuMOVp3ITrYuPNtmxz3eRfIwrrUo5HJRCfsUnajkwMcbrgPt0GdDY68tPFuOcKObQqWGvny95Mn4sxzlaQaW/CgI5xtXCtS/3C4AG9lHvpipETlMlrpX9GdLgzeciaVdphim9ghyG2SyisB1p0W9OPeK/JmPCtIWrAxQ2sFaKXoxm3e3C6jvotl49BpN3aP+M8zCDqXVirmmSpNI171HlnEynCEioseF1TnVxJW0uf3VWO5iyAP75dPrVqoC2JBc0+oK87MQPMBH3mYqzJbE7lBMJbTLF6+GkR/iEmlX+VjEDzPn5TYqsauPYcgJzpTb1YszLLnl37aNq2UgVsCy2vBFsXBXY1OdkxHjbi6nNg3qjORcCC4+XHY26zxLIhzWaFAv/8ygcM4sjbbY0hE35qjjk/wjV9YDQsUnPNkfglBsiTaD3tKryRc4M8Or8LvRfB5M4KYjV59xtJg2RfGaKNnv9Tdnwq57MEg0SZTvlw0ShA5h40yf5bYmbfpesCm42CANSs8uaXSxUYyUXxh9nFfr9Zhk6mOTUk/qcg+HzeX7LzOfVTaNIepLHwFp0xFW0yVjn2O3951vZVjiSbBtWbmi48ithr8u01MwshcQ9+Lq+6JHtU/VISkJOCuYN/3/gcQXnlXO7YMrnXI76UiLZhPnjU1OCxYd9jVkd+Ec9sKQ+Wu3J02iUBs80Z33qtSiaYS3fGNW0RBHrKKvXzMoiPveAskm39VXrbTi3R9KSPaIj91C0VQ7XRjaGT18KpIjGxPOCrYSJ22Am+tkfyr1GZwFBCABryCrEUa7FV+sCdh2sTvuVoVWZkr/yPqUIkNROhJJYeWo0H7/2ofJ5xx5aBqj1+7FmZLPhlEK70pgaLTl+SaNzhoGuOi8nBiKq7+3TOGNW7dUPo030NblGTWvPztHnjltZz+zd+SIPkmU3gzpM4fVCMxWuFfHHZJBwapAyJFs1HEv+vV8p4P9yIXWsdOH60gNVhnx0zoqpSDud7G2J6uXS7fnOjKvw8UwlQcsDNpKGRM9gMjllzT4wNoW6sQ4BsVQihfbSxUZ6eueByCJNKJzF/klyKEA34mbrixbzo+iKfliLWuHPsvT4qifIW/SrH6fDIkkU/GM9lGuV13/kfNeck3MOKhEM0F4A/FC12IZlPRJ/D4qk/7VoF/21xV93skZIK9S4kOfoFuzWhrQ==';const _IH='ecb3b8cc124e12877fd7cef79585434bda38887b4c3323c7c3d408d9d8c210f1';let _src;

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
