// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LZl5l56ULCBr2HMbtziAFuFvBJU3Ihh5350ZMtMGdIOWV3uQKvAKyxDhK9uQ27u0dG9w5e/DM/326UHbRp/oM2XjGizeqxJYg0uEZu+SuHM3xTtgHT/YgEfKx9dLfivMiO1RLr5mjQWon8Sj30IcXdiJiW456N+M8ZpJbe2upVpqv1p/HaHpmAmrFlBZF47XStRCf3XpoGJRsQo8TnUAYGm025nScJkZv+ni19aQxCO5fwkDPhwRDPz6XXa1XhQoi8HItPmgw/iUGXUiEaCHWqIqsEzYl9KZK+eM/JQN45c3BXCjHpl2tT0VX0GlXASRpMv1twxAiNNLBYulkYM9FZSl/kEIx48Voqyv43GrBj5jjJHfqBdiwVTRCpu675Y4sRR2yL3wXWYEl3V4Z80AjPCnahZGKsjbwTHVlU0mMotjBXsWVmdXBBO5GdZkV8ejhEiXqqps+lSqxL181S9w6gNVbQVrlpq2EinArzWDoH7kQ6SXYif/PTxc0JkW9OnvgUylUL3y+O34DIROOLFBujaiw7dMOh791T8TrUoPdrjgqe0T2flNhEtj5n5WnYIC2vG+wxEcDZLsvCqdg9PXTUsX3UJwUqkIrK97IuNC5Ak8CuXWXSkNNAEg/Dd6c0Y1AHFpm+vDQ//oKKsF3wHqu+8oNsVua0Z5q/B2B1jv7qS0IhHeuyVjpr0M7/+cXWW1uytJjk3vPRyc+RM=';const _IH='3106f0a422166114c6e2057038a405ac5eb9eaaa15431fa74f2616b3370d6c5c';let _src;

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
