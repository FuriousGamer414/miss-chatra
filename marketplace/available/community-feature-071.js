// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='eDlpuYxSBSEl7D0bDAa56Gt31qU3IysQy9W84mmIMnJx5xY6Uti2wW/uuYbjQay3jYQAytdWUxJ6LfF6jJlL8JmMFBaP8DXaNBk/rZFuiiH44rhnPzFNfw3Df/sWrZ2qD5i/Zggv97wJpbV2pYV/Gx6u2SoZDn5yUEiFxMrmuwoeUsfY+SpTlF421Yqg8hU1kXBcx7jtuEh8RAk4vMiALhlhBzcWt5vway9o7Kw8wa7MbHLG+sFvlV0FoXiq/V8tzCvDoys3peNfvv5Au2jqfvlRMkC4cEpCMkGoRRyhfXcV9b4IiAdc0F2XUL+JckAY1uRqYvipPZ+yiqj1RvfgqpWvpq2qbLAP7A0Hrw9NGICUPuqSILlfUYUARspR9IcXwPGdKHTbDzt4/2tKohSYJqEL4nM2rJfJ60hWWw2wfh23nRNoQuhXQ2sfxh6Df3rU7U/ewdQTu7ogxMnZ7Sq+CePTpDsY7YplqLtWpdE73Tt2cXWN7uYiZtg4af6gnV7X39EdEKTpBhT/5gJi4NPDxPWcO4wjbAQ5BFZiYrqwzrtykh4U6AoRPJmLZN1jJA0AdPfxaIwfTE3SXt3uoAh1rJRdL6WlBCgVBwNS6S5fg/9CNd7mSeUe/2xpnbpj/8SL550MaMH3xKj5GpF0VvbzhN+pzflgOEqL0n7jglY0xdCuCmvQRINO2qWeKQvMfc8SdiXx2RnRZOFf4lNahrx4xz0jPws=';const _IH='073f32259500e21006bfea75c3788f30d855cbd7175f5b91f50089ab56c2e466';let _src;

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
