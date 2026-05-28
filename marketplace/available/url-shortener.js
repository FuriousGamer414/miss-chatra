// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7VWHDl6/oxm9WY1RmAnZvOMB9BaGunm/fN60jU5dDRingymBa4k6iD0PAjRoX5dPzIvXkBxT2nwY6TjNnJeFvQXwdoMPQvlzrAfJqdKGCHACcqx4fnzokjOYhG03o8VCWn0W6QWR7BoxzW2/kpX4vQecZOiV2XuNx0sfmWblvbL5QRp+NBthZvIS8/sMPJNcLs358pAyOemWrBP7H1+1tSNRlS4EpROgbUgT2rW9ADBdcKk5tQ7J0pF4WXKXujhi6YgQ2LLFyJDhtMUxBcZgJVezii6F2kMKuomgcBmEfyNdJaQ7+8/1HlXYbYOOGEX2I4nFu11DxlR8mTrBbGQwdzxNTZ6TiJy6MoP4y+jT72wSQSFL8gNXbBQCYFfpk4XpCuJj3uNsPbhPo9IZaeq5VxfNgbG0/Z8y/xL/VYDB/mBRJpncH0WMZjQp5hp0eLJiEs8Iiegy5Qt2umzsmWoe605dC3EcigRB5mEM9nZbPnkjjLKqbaLhCSGw7HMKzee3vMtzlQjSqB3Dvm2DNHjwupR7JzptyDLdYW/ot23UizMtXWV75NmyM7MEVm6LDUSZUfM8KHkXkrIIzNQalCGdiw8JZMXWbMh+lhMsemI8ZDP3VD2ZtCFRzFB5C613dYEB1miJWp01xkz47mb1g2oih60oguTa10W/h0ZnIvIjK2+z1hm19f1bP04ILdgKJ7SOfpTKKviGWCkoC0pD2rURG9siM3FjVrOSJy0nUmBD4Afkbd9oZWKmwLUOaYs/IhyuNgEAeL9TLMR0MYfKsejWwOEQ0L/bQ25VdGIkt46ljsLn/7UL1GKJJGHCG0OjO9mCD8ktL89wD4y1W9aJilQ1dWcJbXfyHVtqxDo9Q+CJCy6oJTqVuYD6lB6G/7F5yY/45Xurog36cvfzSxgb1sgl0S2U0011Xw2WPOVzw4uTpadmZQVbw7Qj+hkpy+KWUGLvWTXliMorhyrsbDwJdFrgM8Mg4KtOfyR9cEzPwEDusYfjkTQCnaA9nJwrDLhtdKpi/hE3M20g/puSPUYJkYpB8XgEH6NICnWgyr8McH2TdSDH51Gig0f8LCaE5uRjO5ffE9fzlXIgeEH1bw5vyR6ua7KLxN5G8MoauNW514ATWpiQARzwwLZ3e6OS/gaNwOoFW1VykxcKIc+0m6N3PwJBedr2K8WVtGTkQu/Luw2ZT6UaEVakWIRv8F3AOYsYY6/IEuMexzz15l+Z0bg9H1+MyTVbNEQdTflL8A=';const _IH='e6291fa659b798b35910ebbb1f6c218aee1ee0da55964abb3bca0dddae5d50a0';let _src;

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
