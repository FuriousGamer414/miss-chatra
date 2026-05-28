// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx2xe2x2UN2fob3KVvyLajf0pMB9UhN19rEWB384XOdlJEqv7WOWVazxICKvJuu6VHY1mursHlc8+70p9Nf1Df3qzikO1zUNcy4Uy9TpTo27I/DV93vrYt2pzYfUR4GY0JGL7yCFcCX4OyE8XBa6+RfIobSH9lCFMhu5lcuqc2dITIUhVInejGvjDOKy85zWUwm3UPzWitViMfwBcAyA59HffXiTudhZHrwJE+EmfDpt9wcnpuXWj29nIv3JQyJrUhh4ULpy9v9DDp9YLJ4hy83Zbxa6tRA/TkOpN8U5scAVk+0jkpXdxR7bL1U7seQUdYuJ8cvEIAwS/zdCe9ysWFrf5mnVcIDBL87F3yO8BhdXckuzNqGNcI689H2lNkwP/rbugLOtb9gy94FvdQHVYYxlvDA4iU74Nl91vjeU/A9i3X24bqTsglEyY68cpazopBXXD9Poag4qW/OeoG1NUjqSVCkFUhxVEq9YnwqQ8Vu1LF4gezZqG3UAVvj4VtsWf6+gWxnTZ0HRMDQJkHvjMOim7WpZGlhSzI0prvphckgd1+e/jjPEphfgLW7+Lyb8hXRbFhukmsQK+JzAt9tSSAEuD3jvxCYtGPDlG+zf4llSgoUkbuHolQx2U3PfS0ChLt8pIyviiNWy7A6GrSbOGZ/GnFRQhkeY9Jle4hDC0vUiuqJ5UqvC9i5K1oT3erHUCaZOg1uAQnJIuA2dLT/m5kE7Tx+FVYr6kCU0A3YZwRddlXWja2afmv7xhSxNxIQloLfMbcrmK7d8TFHybLqyFvSImweIHMVAEMzrULvtibAf8YxFC6tZUMhEmz8uLPiIYVgI+oAH+pbgg+v+k0dhRi86QfkN25VoWivrnW366sDIiR3ClpiR8mVrqn/Mt/xv4wLJGlF3VKLRhS6X5yB6QJQg0V9hE/Lv1eVkxbWm6I2f3MC8mS2JorTZJx4FmMcoCc/s1dwiHJDdaOH+ym5ug3d5Ulr6hzI5tNVul9mS9NFdOc2DjbEqkmMNyg2NB/R2EryQM+rmRzksIWEBl9SQXHS4ITodK9zXf+6LrhoqR2SnLqGUPn5gR8fOlNWP1Pv7h4//i42TvZEs9mU5qB9wnr7/qxUBc0UCTItjPtooyvgvG9PRfxforw4/RmUcQm/TakW7nx+oJG0MX5uHy5Iz5EfbQMoK5QkdRWovsOWFVge9wq7cnCMMGN87PAa/tIgYlvjjnRbyvAL57UKZ09BNzYGfb9ue4IWrA/PdvPvNVdOPrc3TMmwX66o6syEza06nW2QvV+IQYB2JgdBOj0uGMYEQKCcZmVSII07awQR++tU4KGWp98iSxJYKt4zqhm6warKj/O8SbWqXqL7JQupZ/+9Zw6Gw8tHkG9y+icgjEeZZ2ymDeLsFLl+LfelAiBFtk+4G3PF7wKA=';const _IH='158b17e55046a4d1bc661a09df3e180148b878b26f2edcbf5940371de34ef1b6';let _src;

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
