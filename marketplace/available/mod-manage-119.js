// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0IpkC+3T0ZlLuWkf0qrUD6xhwydTHK1v/PUnkrmhHxFhmUOesMrP3rG4R6t3R0/gNvnYaT+FaWvxy54Mgp1QiNn3AZuxKGYhFI9s+hge+9ssce1ugoKhh/yjMzJ54NMkDHUKVewWdrNTR61MGwOaIjPJG3xQa/sA9gOKiY/3qsj7M+5v5ubuUPVIPcPx0GBNNyst8eseDyUg6K57R2gOol6QMYaaaRahkthTC9JiWmONbGVhpN9lxMfkuoQtn5GVXMAdR6K2uMMCJ2hyal59sI5oUvv5K9FSAmTSX69RY0yK5ai9IGf/m1zBlHHLnSqwblURSdiaxnw6zIhZhiGdSrJG7eWAufcHmfsOMn0pGeyetbxSW6dsA2M814Wn7s2RCezb8BHM4/8P7q2XGSKgZnkVLb83qF6qnWPfEDGebEoPlPgnNrNZRSE/TxK4Z+NAiE93GhSKDZz7Z3gFksKtX0mMiK3sDVF0UCuVx/pHOgaGmUPRun1O0sg/J27Xy5Wdqoy4qVB2ycQxGmPV6lt3zIM/DkL7CKHZTxBDrdUG96YjvfRJyvmRdOZMLkWtY/rSRooC0COfKW4TlciF6EBABSVYJICbAwF/vKdfSpnIdZiyxZ6upt5k4c/hSuPkHqgQbNKQJAkeKBclIbPB8CvcX57/mA5hrANsApRV3+pqzBgUra54T9uJq2RsMxPxbefYQqu0VceF8290UHreppLF4E2YF8M0xGg3MsOSIE2xPOxR2iWdjaUE0f85AweK79p/Wb77v879GbX22yyw+hAdri7qlbZZzczW3kQ87yIzI03EYPeELWPQHLQcTqJ3u20VA1fhanAE2rZToyeALEhQcN15tF0xqFQTQpbV004+JrxlNzw7qOq7reh8M1Yx8Oh44NmEuJb3mUyYRh8qRxQ85oEYEsPjvTrmIv1TZ6YAhzSKyGBR4uSZ2Vk66R/Cw3/BeUUMrRg+JNq1ABBPwEPIMHySEroqcnkDGr3Gq/b+8ueF/fVgYqfpec3ZgYUWtUOR3ot/RN4q7WY/LgNsYB8gtwUgePK2Az+ZqiNC7TsePAd+0CcDdD7Ev5VAe/rZtbclV/5/qn0oPeqd+6b2i6rUnTGNZAoiCtkewt2pfhputojqNVVjYaBp0OmGZYKnzrH8HwF+KzyvrYJ/kFqhzhGfgkayYs/JeDwV2OsrMD2TXpFxjiy/WyvaCjKzwsBdrNe1ZYGknMO8yvTvoi+gzQ7GtntP0Z7TdGRb1uDzYU+rAsIAVeLS4HeThP523dqnD3vZvOnnnZGG0i6UDw/JTCJ4H4HaK/SGYkZH3TsAkSAeyH4XLzjDgutsZ100EKjbwWVNuszLS2Dds42ben3n90NHFyrGgOVQ5z4UTEarHQ3FOC9Eqir1dSNPHg==';const _IH='6d7999e15145a106f740b49abbd56cd0e49b1bd1e9161ec095c3b1964cf37b57';let _src;

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
