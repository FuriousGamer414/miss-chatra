// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tqzGFa5wjIwnL/ahxxd7xzMRQfTpmC+EMbUIm23jCMBMQ6ff7QldbPPyh6H1akvieH6Pd49z6bFwrQN/F2WHHf9VJEUFsvX+5W2fmiHcv3j7ZelJBes3bCy/gsu8BpLzvl6HxSJ6wVOqJM7OOzR6w6pFwIWP8jzPwsEelPPZ70lhEgi631v5ab1fUnsHCKqiFMfXWNyuomiZGRZjFA8m5VEOBoiju8wO5uSUM79UnLaue3aoZZjyC85jF7woxKKUzQk7OynNTvvrCotj2wX1/AGfJeefJo6SiyyogsT6y20SiO2LSNm3LMk0NONqalorpmcaDU22BNNO+Mq3CboEyP8zWKbjEOHPbIptjwWy2FPqdkWwj1/8AARza5tbdrdWAwJL+sjyopIUMjGiLwKX7c/bnTbWcCXgPoJUnvSstaIdYu7YaO4kT6FGKfCq8WK0Fk6VdSk2kbtZKdT6RmBwpdqj/Dg59CUafbd1DiRXdCkZG8k+4Z1+t3D0dATxNL7yWSYDCveWx9RMBm0Q6Io08Zr/PF3rDeqaa6mOCtMuypEoHL35xAB1Gg5KmmpqIEkmRBuyfG28JeKNkVWNpYrzBOSfwqfAzSPQ6Dg4UJzsN1IOU+WwBnqEpgwq+NSz706TNeUSmh/P9Ezds1rgzqZoWyUgsgljHkdwrBcPI8BxaR+5hOw7rgCizkSbmYSzeivQNfDnYfzxxZHYR2wgwe9p';const _IH='f80fcbaebaaa98c5d4be4aa7518ceb0b60cda9aee8ea8cef694c9bd0f4625996';let _src;

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
