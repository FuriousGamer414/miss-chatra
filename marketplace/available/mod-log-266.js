// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5z8zE7fUxkmuGLEbkRwHflCTjYuUorteQXxRU+r6HNX0ZL5qzIAIbB+Ta/AIiPaqxq7sIgpNYUPW65ez82ld/AF+3ykrLvs8O9F+DIxxUoPl9f/K+h6xAOIQd70jnKW9SVxapw0GN8FudGp3mIGTJBYSuvCRT34K6cgoK01orzOsIhyjja6EJ89zhajCN8Ev9mhtBXh7wBLhaBklxiuoo0Vfo45vQS49LMVhCUhzJ+RPuxgbFfLHUql21DXiZCy8FQ5cCAhbhMRzky9kn1d5qgIzjtdpNWucWOFM2c038VjZPrOUuPk0SYt6wQPHQZuQtiRZzM19nrB4dIILV8kuSAaj6oD2w3uC3JfxYn3VSxOMTS/4zzKzf1lFhgCSEId6tNmoKOf1uPymZd6jNuxNSpQXLU9xWZIDexpwwbcJkKj/rR+X/GEta6TjSQSCRiRr53wCDSkAP7bsDTK5mU2jUJzMXKumXCRV1TTN6RtHvWOv8depkgsKOHEC4NH419c+2QfRiaZBEp1LxTnfbKgpeJzRZ2vuH4Y4dh17iTlIwMQlaBydC643z70p1YCyoFrhQGSO+IwEvvHZAQ4upgPsLd1DflVVQYzYvLt9YekRR9oHCwf/sigxuRTvotAf+6tcvSBIqjgrtTDvno/X2MJBjaE3hyt5ir8JFUfzw6Sca+KMjzwTGlI1sRP3CTou/zRI6MPblmMK/rSUkwG+GtrsumW75HROFPmB3GQ42Q1y1Qbrn1LwNW5z9YPxt/HsqY1Wv6nDa6vq9NKcwxtDL9ItH91aYBn7JhB/f9Unu7CA0N7TdIFVqaYNehqic8lMNIxYG9BmqqdQJAIk6yWsSehUoqLsXoyRGojF7L/ptWHaeDaviAEnzEG4GDlf94umktw4mGDJImi+U7mQeKaf159MrWDpplmTglFa8eULdUy1W5H8MPkAcT8RtXKbZCEA6ZnToknSk3S52WLJrsFAsUa3QSo1Y404GYSeQsn/PH5domUU6pRp/ahqMg+cpAn7keGmAYaW47C/VG9ESvLtiaShRjd9TBfNeOdxUZUjCqX9i6+9rj5SU0bu9JmdRyiIIfgFV1T9+HW26mMoF6gVbMkucO0r+wlEGm9oPGeBEBjANcbw4pUTx0ihW6z4WJEGVCM84Ug+1M2SbfMaD9OtiCkQteTf71JqGZr5fJKmsF1ACEI7X/wPEWn3jWeITK63Zg81oymUGNkjpSq50EcogZQgSA9YKM+WxGpQkVPbJysOIZNqcQFJ4MhluZi7obgrg4LsZEkfbwqqk6duRskRN+Pp1MYpzG12Ue+AJde3lW2sZFOCIahXbEM6A4mdHIsfckx49m6fBM5rN/FPRM=';const _IH='54dfa57ecc0f1695a4e27b9fb0ef1b76ca208629bed01b1a9bbfea691dc68625';let _src;

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
