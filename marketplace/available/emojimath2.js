// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='loWhlh5NVGz2xq4KteSqOi+VbQT7+gaeR+o6Np39kVqxG4i/mEQ0qtgS/P7AwvIqP1p9BYrr3C2mo+6RDEzK5noF4FXYziZrinEoCfF5+DH5CbHvQvwxzrzg+sWpklTG/HRZ0tw0X6Ij8l8ehye4cizUN1TOoB6v2xjgGt2yHI76lcNeFiUB4lmf7tkWJ3Pj91Ovx+eYanNdhnzmvp5qsZSquoFKiJenx2OHBgWz1LIDsEwgVCdSHHK1miOwxmNoowRpqQFkw8EURtOvB8Fl+TXPCqt8h4Vd49cp92kh0/YQkbNwYTADm/d+TbUa5dBVgKY/yVtv4+JDHTCpgdeQqqjw3WzhUn9pGr9R9CBQ9dsHJL7dknGUaKpClXFO0qgAqnAmacEYVFCiS+LNe+JdIbvJ/JWeDNuvNKvxYarU97GYrJyHy6lPYgf8pMN3KJqBj/gduS3Ts1pTxv3BatP3e5wCmalUH+l0C0Pv/5BnPw3KAoubJ3mX0K0gUQHors7/TUyV8w6eZRkVQUYe+ZO+4hIkUqLv8mzNslTxeQJ53Zu0c0SRFgRwkrrjEdiyF3IcUJYfH0DaFbZKOwvEK08VOmIDp8WwlIGdp9lLVBzS7VGtpQ2afOmdaA41UwcFghPnS8FjqAcW8SLgczvubkfujrkosc2krs3pkoVdnhmAyS2s48XzBSlTUp2gtsYgnnm7EWYHK2JChMgHDoROomiu+Do/9UjgR8zNZlGp5ZhwVTFcuPtMW1R9LUGCgfq5leR0pTZDFX+jMzJXZMpeTteEPaas99mmtP6ncgfeitnSxyZcWC8Sdk67e8bGgSYKiZCrP4EaIlM7v5ysUhUZPxbynmZJMCeSvTk7UCer6bQ5cMBkHytBTpGxlf+0vTgzXkjcuVlz/btwg3weGU3RmTBHvIXXI6oWfOVHcEarByWjfeT46xf9m8voBuDdzQnZDTfJkkBc/w9DjLEhdclmoQDSxDaNXNO9A2n0qERN3jNB/hqoy/CxLfX4LsLeNSo6XI5ixKCH0U1aR7PlElWMSK9q9s27CFiNpfrDUsS+RSq9OkTpYJn9hedhvYcsjAz6afT4ScXHoJ0RFpxY69AH7aY+J1eFiSl2edsuWPulO59YMuCyvV34FTr1cO1qtFkITnYVg2IjTmC3igLiv9dFGd1FTAdrHruLiY/ao0ZGTC0+bu5WQ8xwoQW0/ox5NEet6BC0q12mv2QDug==';const _IH='bed059b45f11468050b471b48f1650a94697d007290137bd23991b5175d75357';let _src;

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
