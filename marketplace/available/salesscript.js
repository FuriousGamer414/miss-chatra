// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:12 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyf4Ot8BC0JCKVR8+PMMxKqBGAt2jAVzfUDqDhVx4KvYQBeR2RjiQ3IlBeoRj1tSpgecutqZCHo/X9JxEtMEm+Xmta++T/G4XqZ8kZDGeb6zhUt5NEsYJWw/njmrgkC2n6s4BGIqTp0JvCF7RbNPVhO48anxrHZ4lpAkumyyStVki+XARxKIOo5fvBsVkwBrPSX3WobWtigTbKgExmZXKkupjju47bF/7HsXS7Nj+d/h+1m8UIOJoqkfoz7XfIcQTusU+F/kn81uajlLCgEersauwn2OV54W8dNLihomVxANHh6tbCwW3tHJeeg5W3wZhBlMvbQRgTqz+mGYNMOn/1WztJ7+OJOsGE1yoa3PLLpwk52/p5T1Q1/GTyyyRbgftqNjZb7yhG37M7Ft7f60cVdQYbfdkD2+HPMx/rsogK9kV7KdSaXPhYktRpoxUuLsRE3tEvtd/q+afpGU8o8pJF7Ao23FmlhRGH5AjnpV1ChwdGkBfOhdApeqEbj9E573P4V4jzY1Z/IGCiWKIwZqRUVznaGrzD0OfBZpwfJFKUITMr9cdieGgbzzcmyGp7PkhI9ljFM/uPI4qKBa9Ardl0aPAGivul7ulZgOyvYbPbu7782G9bPjFy4RPSgA9S7MhV3LYExH+FZgqLhJCbGK1QML6xEXau3MfqgX8naDZfCzeW8S6sNyP0zVWpS8/teTe/HXHO+3mE+JQsFiiZwCO6H3APosNdy/HwSnIdaOcy5eVd8PJtZxK70jLWg7JUegxsMZ5D074SwUlWW2jcCgQua1l8q4e1LHSaJs1Nxbwx3INmAEfZVQyZ3RCCwLTIFEMgiTDFTsxSRMSxvWVVcIZQhbNE8iBmHPs3ddd+zNxZ1L4dIv7z89z5WNBcyz1o9buUHGyIE4xng/eMwF6d4eYTomdynobS2ESYeW87JjNxV9Bi8a0tITp1k/DeRvf+kdqI0SWeF1jcQLPeCFdXymrIDxqW8FNd9aLLtDKvjy6/A+q1yHutM0c7PpBu2ixVr0vPNZ6QGADz/omjsaH6frZWcuGxMyaY3SxeY6xytd5RyIkCgCdrHXW09Mj5WEiEglxHvAnj8EjioK9tGwUwQ4++BfgybrztUaHH13VBusYFoj06InYHY8XRJqGzu5A1oau+aDYhfwtSTvCWaD1SScFx373Sc4akhs85VYt0IL8MnWLJhvU/Y2k4bwdwkM/fRLC+qVRw==';const _IH='f8152128efbdb1daeaa91f3611cef0f05b1d801cc87a643179fb16abba173802';let _src;

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
