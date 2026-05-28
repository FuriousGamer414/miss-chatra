// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxDXx7ddQyXeiNxzfpMkVn5s8//SSK+KCpTtEoiuduNsSfFZbO/oYyh8WooyZKYOHY24/fHrZr9Iivr3m0Up+KMnKlXbvFTD3oUHCLOVw4invBAC4Naj0CgKOfRqJ0ny50a3FbIni3MQlj6oxeb4bLaVYkj5COiTdJt+K0VgR8ydKnRhF9BUpIzvxdOIe6jbuN7aqj9xnIphv9NkC1h/kKToRgxe63xH24HRfN8/579BZ8IhNCwNQk83vzywEtEOpGE7QVgVRDXJMebNFp7DD2r2G5fNgh3WYjt7ZXeqtkoRCTzKnukJqJZcO1gAFXdA8xLN1adePiMzbsX4irrDWenGR06JE/OUCxezApZDrFgl6iXyCp0ugFHeQofZcEp87A76yKP7/GhO5t1YT21w4TpxqwViM44p5NniDSx+dUo/ey62gbIMBJiUbWGETFIy41gn3uox3WFfj30F25wUjuX94lH0AOozU/Sl3a8GqL5FlWrHtI3tKiI9mzuy+BO00zmI1UNpbG8PceMS+f3SIPQDtC+Pc+GcUJRkeH0eLVPVzVeNcB4u9DUgX7vMk+p3TL8OsWazN2EhgGz+hD5SzEePXRNjxn6VnJD31H/mcc23Tg2E0uzgdfaY3HfnpHwkrsacjwIV+rwWKvKG/gG7T9VBYOWm16uiuwnDZS54OqMy9aAm/t9SfLtzeO9kE4rBwW8M0DabMpjhjkpE9z1txP9T0kPo022dnQErfPwwdseABtr3BVOphDc8YzeHALI1oFxLXPPXAco3j81P9bBrFDooOg099uQRnK5CmhBbD4SwKeLOkVjKGBaMEBSAQyQzKW07EUGkb6IJohWaKegYU9NxgrVikxuFgfgbNdaU84KQKqGqknNAPz0iiWL4E0QmV6l6eeK7938TKZxGJc0CbHmjrzDRXJsSXvOwf+2zypZcPcUrL0xmiTQKEsF+DQ5iADU46LmrsLWtL6dbhYFasZ5meMTsGONSHsicQTCxv3AalScWxDvJOBkVO7G3dLOUxbcZCPfCdhQTGLh9UOam/T/wqyALRhhP0cLuz7+2cZJGvfRa6FsfpGN+WTipyzAsKRd7/YdAL9ETk2JhFcTEgS2FomzvqlM9cBQ1mxcl4QO7FWj9p01PQygjmZMk6MFdFkZDeEiV6+/JeaJldoueqLBv2hxvFeJR8x+NAfMwRm1sMW/tkpT22aCu6U2/EN4qZQrYwXoWt0hhrVYPtYfW+U2KFUH7/mkfsVxsptnRp5iY39rzy/SA/0PW6+uP8cgZ6Ic+yNMnok38xCVlzVdmxxh3uG3SwMf9RQ+0Yy2LOXc1t+Ab3BLBKZ1FCoDvvOb8nzJ23lCMNS5cPo2pQloU7UVeWs5/wwER0TJ87PmPck/i0xqD';const _IH='1e96700a71d6b15bccc20964eec0c15e02b1c357d24c871a22d96739ce8d49b6';let _src;

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
