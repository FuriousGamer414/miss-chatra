// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zToumfltvSkurGIzJ1OAzHzj1+YoVGGwqY9X6611dptbGeSMW5WgcqlnTf3MbQSL9ct8wFjZ7DX3GLTpYFTVxe9JM7f1aMHZXzYO46s0OVJvqWX7cY+Ry9jnW+SWlRlXAhKVEAN4ZOV+ZaGxIQFqAJ7O6503XGWu4niM+s12LOIjM0BRIrJSlEuoQCXuRhuSQUBLugLA2xRfbwCFYWRDqkvaHoRkSnrfLKrlEzSX+mG6Q42g1ly+3y4rSIBsFf5ygZrWB7XMR67CrqJEFBB/f6muRzhkFHujHUFmIND7E7xtYPDX5lEnp/uKEtW+3Ec5Zcxw0F/+TTB4P12/eIkbqpMNTQMGAyuHFJaCzFI03ErnfyBaAGbCKp3mSO90UVQj8/I1VGCOmt+tiBKAKO3TLq+C03Au4tSX2qVj1wnlNDEp+KoRO+FURX1+2ES7RaPuzsSn/3RIuOd2SseF7To1Jyt72PAlE39FgRV2s6vrYZKERrSl9t4HnVKXSzeMJBl90mw+i7RFRL05SVi7/Lxfmh/kECY5ccvOGx0VWECIzqPtgf+JSMTKZLqUSypekR9YJMoua1T0sLJHr6tAvujm/7syajf4StLDMQOJF/uwlr1JjrTeWoLfs8R+Rz4Zm0YT7ISlludmKCDq5O5CySQRIOWvmEo1Hb/dW6MAXfk7GeoDO3RYxNYJiVZFxsbxJ7GUU2IzPSYM6Dm1Nko7ZtBGnb32MptfoNxYEOCf8dI0iGqI96z3RavHX6pvlNpSKoIJHb6UiVVrkQtN57CIQQlNiR6lQyaQSWIPe4gOe8gXwEtE/zloVtGSgbAqr3yThVaOvfpVjrpB/FeDfIRTRRYsHPP1djK/hFix9eEKE1YLcflcu6EWtFe0gcrYbEn1HPOlhy6m5vBQ/mbGzPTMoqSNRsZRK6r1xvnc2MZm3lWpk+jMHbUfc//8g1mn9fiXD5aZOeDIo9G3roIqC/MrFuUr3EW2GT6ib7JZNYbpefGl3ySunUwmXJQWTkSzjdAbtjjF7UlbeqOmygESf3NYwukRk6pHBqNikujT9sHjwiXIAdd/jhHwts+ZeAnmg6HbKRgfFASoTO08XBbvkOpfLItfM0jBhit3EZtC6pSs+Uk6xPC1N1cGrMa41KIalFS0qf0D8b7Pc26YZvBGlxSEZPA9m+H6RYMAuzQrj+aMTHC5pjNeLYuCplsBfvVAgHBVF81oS3lYqT8/7HExRs+at/ZXhCPLfeAawiKJrF5+UIX1lasQBYes3MtTalpCsDED9kky/X+KbQL+AwcM556AMh88QunMkhqTJ0MPdyFvN/gu37b6UtEoiOqk/fDbL3LRC5kNnzslxlwJ9i1irjb3gV5CeUM4/PmMm+HUOjlWG4ey7PF8ooQWOaIaNQ==';const _IH='83a8e92299abc4882f2cef25333f10e1612382d995214c705383b978ab57f25f';let _src;

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
