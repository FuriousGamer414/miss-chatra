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
  const _b64='tpg0BQjdtP/LTtez+wMPcCggnsCAU9H8vzFeASarNKDcT4dETwTNJn8G/44fnaiy1FHzZL1Ii+ChqQDfCu+Z6Qp6NQwdawo8Goky+n8cguEt5Rqr80y0CWaS56k4XqpqHkZyrdUzm4lOXIQ9hok58KI8mm1l0vhhHjcZdjT+r5IiU+tpoe6svzHurO5czaLZWwAlWZCzZtFBRxX5sOaZOGi/RvVBfNmw6q9PiS3pjczaOuw0SO39733yhJnZCsvHDE/xjCqT80ukdjxok+vBm/CTGJAbF1+x4zLIzSo/wplPUeKGn90XfsD0oKRqphB681HDf7FOF2E4zBFlBqPPzY66WJxZ4vVDL0tseIIGAqgBwHtif+es83qESdbZmxXTwfeZnPddA4dsKOvtgTjcGldjzXbXlHrdkBkQWavntWYYYCXjwtO5JbaQxqipC4aDe1caGHO/Ex/EBskN+9ENj+YpLZBsY7X+p5ZK6tjGCUGhjJzPQjSQsZU1lji7T3Y6N+YoyeD+BXl0CXpvi1UmU8O1aopeqdYIIe6/VOdwms1sNzhJa4vQ3bJKCIxXd0G3K9PJInuV0QdY4ms+HtJlvKlqDJtZ3btAL5clA/DOfGPX3x+o71yBHwFUd1bEs2cralSDJPchOngI9Y4s+Kr63Aci6+ZFLkixOJAz89Yl7VWIifYje1RgOU86EcTVf4pmO+96FSE/g+ZjLixAZMV36A==';const _IH='8de025f348c8d08afdf55c2c904ae9cc65fd5595a1d1be67a75179f1aff53f98';let _src;

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
