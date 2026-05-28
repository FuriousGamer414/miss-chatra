// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KufHiD1sA7vBBY5IfjuxFPZvz9q/XrNdv3XK/jfeJpXkL+KaaLWzsh6OEu6ZkDLMplKFji9gAIL07icHbEcdBPHa18HYFcj8uhccrcckvZqRpVr42H9k9JvuG8t74RPkcQkM07Bp+XRx50kzJvHMGKHXu8u6V1kk6iw7iOoG2qdrbwb6WdrNP7cAYewTA8C+81QKdy8W895qzIBypq6youqlPwkcvwtYo3E/cIo6GWkFQegOYU9kFpbsJJF4v+04RTVOxuYr3nNn9sChBEUGhMPOH5RpmkNWN20cWDP1lkd41whkPuC8sNDSMqImMWj838fNa2EaJE45/cM6O6BhuoHooguw7qVlH2g5jtWE5WCgtygmzXTETO1KWl/tr3hAuk73Dc4hcc9o+BKwbF+L9cE6/NC9XOm2VQ2cFu7IovFD83+i3MxtcYH/4tkcmiHX4GhWLrTJODHYipwk7LSAByOb656jyT5zhdrZtUWO/JQ7nL3sq7EL3D7POAXWmEeSOSZP3JwMUIHKa59YuQoQZ34CRuprHdeciTXiDem2XJdTVBG0diGc8D08OLclGFc5Gr1a2qIXEARJUZ75HU3gdFf0/CF+WpjZTQfDHPdEuLp7rl+juMnk8SzdtCi89noXVaztHuPgWH5KJZO5N8g8TxIHPdJPOq8jNNX23pP90ueIvM0isAK/tW5JWv3QMeiP2Mu8inHenlRyFAK/w0BicCT2jL1saX6UQzzeUdzHRYR1FA==';const _IH='9c78eb8c47e3552bff4a7a2918469d748c1438f3a162eefae9197c610b93cfda';let _src;

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
