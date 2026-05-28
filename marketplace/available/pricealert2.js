// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZHuHfJNWiiJUL97HyLnzY8JqOd5ODC6goUPgz6UxpTzsFOAZpyFsOEyOm14Y0RSxdLQGvPDFeghy3B5sQ30t3Jd3VHKfYRercoH+PGHiKhEhBRcOVXdX+oELKtAwHJxf5RlVsaNdwuhBNN5FWcbPm7IAIEkLPIq2mFa71vke1Ep7wxF9+IJx5SmsnJZ0SwESNT0b6uRFn80JsKPydL7O0M8/TVRw2Zyblfx3E7BpbJRsPt0P2FaEsxElApnGB30BUTKnHc/a3GaQAtZYVBwqbQTb2PaoE4LkXJTsmk7SJhyq+CPuQHVDjmBDeBmt0gffTJmBHCsIJjop3Ag2eA6/kSsmaTO7f4hRU1CMNAVAFjz11cYpYU/c16gahpipaZhhxNaOoq2AsIVOfPfWtyIYQs9QFuXB/nK3yGZt0au7SMXN/bMGYMMCEY/gXSi8wwxFRDDWTd+98dkcL5ekNBx7J/1+3whVbGW9xVdLLTDUsH01EqI6fLhTthb741H1qcQG10THPolfSu9Vidlfuo0Vnchh6zSsPKN5Lk23Y2lourQJrOPViS1hQHdwhErJxgbLDiG6UmOjGGU4ehgJ1rWOKqPVVG874LjcDeexW12hQVzeJeudFMxhaxY1wDE7mCqtDQ1cOvv6dPA+XDeoSmHnnQv1pYm71BTc7DF5hQHlAS3wOvsqkNAYvCVSUnjg8QDvSMcK48XgNyg8UudP9YGuw9tpHo5MKmeqast/A64xmnkhJywEXXLbFaHereEpIcv6JGUK+bdrtcP5vTQQE7S87r1HY9dDwKM9H+y9AT6w4O4jWXEDreySGXUb0LkcB+tNAHL6iZ2+G1MA6EUwdT3Zum9JP0lONe1Pio36Q09Mdvz8LXlCYzhHB8F2aSLFqiETK9Bek7AEX2aNGM+YXR8qb5ot7cYwQgRfM5l1I70H0zmt2GVbnRuYGS7gOK7KwnLA8g9QtdlDlVDhnK3VHiUUvE2j92REnI7V0B+/8BlSuUpXkcJ66+LT8KA9/FSkPXHcVrJ0zH9EsPoKzRw4MmXbSdtgnEENS/SaAcutOdKFGD/fK0lGMzXXWVpDW/C/tZz/jMazgPTzLPg91ahbUxrjjUaEELCS69gneUKwXuu8BWuASL8ey43LXViLfoowihF0UlPHKhd4bbWf4yN2mTHNOZ8ex1P9hiERn3B05QhMGHhx0Ez88GrHbDR8f2Q+Wd9tPO774x0=';const _IH='f0f31486c5dc8cca70f6be40be389b9d7756e10d8f4f937479ea23157413f70c';let _src;

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
