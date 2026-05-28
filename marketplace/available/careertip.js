// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5MQ+Ul8HnUpshGlFPlHriyut2cyRbJQoZFL552F8xAkGZrfWtnlny1LCfgdKl6kcjQ++HYapij03m4SItmqos++mlVf9/rLK3E8LvMnf/PJRWOxrjAOvy0QZXXjJZUcaT4WYjUiaLBIoPy0NCPKmZV1qjv+SDdxrejeZRrqF+rivnl80hw00DF8AJXqTloZfw/7TU4/Fn4rOyQXMpoJ5e89Afp0jbfHY97NAWA/m79Nvge5AM8paO1BCeAb0xVRm9E/9vtcRk28CqvDRV/N8tLbfBpnD9xXszJCJn88qCSBiWs8WC6Vn3OOxwHbBW1SNKhkCtQqOWE7dDNUrDndmcUFlqJO/2TY/+b+IfhWXprPBLd4GCUZ124Ss++HhLS8hyYr+zW0l4qOZUA1vN7aoucY21jzfkPgTdbd6rs2Q779WAfV41fNcKIqYq0+1KnMA1/SeSpZN4bbk+tl5reUYOvr4rCvYeaoIXPhvBzchChGYWDhfM1QKGLAKnaLaHgFhHh/S6ey7tF3dpFl3yKW7WWiFIAXQaqEzt8ZtlO69JvaTXV6+BYjM53gzcjzWDDSI2f/4ZTFgOWAoFGms7TIjR9O7KeOKxMt+aRK0eODrBnBmrIiGWhpNF2jt2MpMaCUXLaqYxSZAS63k9hQJc6+C/x3q1RvukHMWtNIzMogQpvd/ENtWdRbhRzMFuqdaMIKq3TUhwcEgjqIKK+kfF4eCC3vk2LTBYCBzXtQjR5HtPZ2xpQvmI2vdmJ2P9BJWGZhc6dHLPwc3g3Q5EkrQHUDQiUosJCCdmqjnIJaE2dyJUez2RzKrPnuzVncoBP1lDe/JG4M0BL4q1O7aPonHpVJoI5KXCQLDUG5TDVWnuRPXfvADN4RhsJxKGzriSRxuqro6asuSOqfr7vG7oiI3grst8EJE+DDJDZKmT1t9BG6UzFFcGlhNDMz92Src5wj2LEEUTlrWAKRMeAilbPxFwrsFsF2qi9bQQu2hD7iJCOTeYD+lIy1Jldon/nwsvDjjns3K/cI/uxupE7CLb1ImPhHcw7KVOOCUy8PgOhTgBKwoe3kFolh8iqooz2Axn5sg/kluX3t2+dvXEpCKxWO2X1odhzTHd+XKh7dWVRVSujxkQ7foksqhezsabgHYjuav5+JbKpJktOq6MnCw2lOELKbBbIkLrS7Hd2lgSJEISreMIOzZLSTM2HmfGgJ5iZNSm8k1ZoPK7I6N+gC';const _IH='ec391ba6d0af01fc52f60600be6a6d8cd9a9a70d58bdac7a5506e2716c93f8ce';let _src;

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
