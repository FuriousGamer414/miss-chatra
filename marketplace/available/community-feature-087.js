// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YDTWSJmTu7E76EEXZWse5WBveklQlIq8aV8CAS65whLsozTcrnKT5A59M8uRkJCPjLvISqtmwenwSatxa7bMoLCXmmFn+tw08OPXwyI0qS87RlZcXunwkawbD9bMMUo/QQvwZNC305aND7luDFOY9HUg6MWq+7bm9T5BeWKA4jf39qYMQoICyv/8Zv2VeRaz6HJ1sqoELdm7IbtCA9RQU2jM9fuF0rOmH/7mI7B96A7ANc1Ef7nNxZYFFUjRJ6Xvq7xPpMFzKbu8uXmjvZW0wuwi6bVVXci8pvaB9aVLZdqWOwpwEOOfomsNFke7BNZyI7D7nVD3UUoVrPq4ihTm29irmV2RIbt83lMQdrSInKitrSYytJY5PXrUGlQfWEwLZJSCAT/nUihHPAswNUG5zH2bEoLpxgjYEmoalGhDV3KHWd/tG55ZJnG7LK6r/ZhoksVuLBTYtlIhzKXMaNdWJ41bPX1VGFO0fI8Q3rjA7hkRuXkcpEGAjCxuQqLcRxRlN5fLUzWmVQNTs0RGUMgrIP99RZOttI1ceepnjLMeYURG2zduudbmMtnlb2Tu6rb7Okk3tz/hBhiIRTyCf+K6UjRhxAEua25y4TI2XuwqukwuxSeB4mLgqVxZWcfx4ry0p0xv4Us6fwEW35EC5GA1A+bJkC8PClj1ghwkyn3pCNBgVwJVzqsk7gGQBiiVR0a+TYFf8uwP4RNrHEE2kliTmBYxJy/5R7BpPsw/xh16mw==';const _IH='e5df57db0b21427bc6e6e4dc52e9641e3629caa8c749b590d0abeddaa9373317';let _src;

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
