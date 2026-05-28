// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='M2AULLZjLMAOA51+fmBuUvYSZ1v971OJwIX5JPB86WD67WdjRAa2gYpWQJ+MMe/U0qUymFhC0k/9fEdoZ/A9ytrzD4u61FdxQEl3M5yfBr1cr9rLHgdMcyG06jpweKtujWpqMmVPeHt4+Xs2x2hIOy9/7KKuiri/S3zq+ZefRLlrvqNLS/KWNKlZxuZjuZsGyKoWVL0rwtqsvRwX8KMVwOeWIFgipfH2t6tly9Rn3MjrknY8nj3gHWiJ4XBqzGEYc/BLpGqn4ABephVpm/7VX7C7ULI6DW+Dxt4Yf8KtExY785E6aMHtUfqn9LSxtL6Cy3VNCSFijo/+rcuK9mN62sHzB0FgwkMt5PLuLqTYpS4kj1Z+RKNHR6XslnL2oUuq37HY2bEep+Y5enUodusMkgxDOj1i2o/ndpmdf+KxRiTIKLau8wT0SE53iNEok3Kt2j3DRDrZ6YVgtTiECceBu596Aa7UBNG4L1oZ71HRTJEJkiJVPOpCkPbh+gVLf7iXfFCUwTb8fJGtEDbwEs+CI8ZasFdHYENu+LbrEnDhi7s1UU5zG9QrGYuH7TuIE+0BCyS6qD06zQn5Ad9sT4x+dDdQn/fPBNeypUEF0u9pHPRNE6bVwKDVfcz6vbrVSzqdu8ZJ7AquAeNuiAp6MLNnY99ifAq9m/AWyPzGaaChFJqDgxnZ5VyXEG8PQgu9kn5jgf3sGTXwRfg4i/wPcMslzu+39F/cCR2KKJsnNnojmHiCZqcengjMXCuNp8BZhqeTp3gJ0aK1Lq2pg0QhlhCWRBVBdO6F4UMIIC44P7iYHrvdK7zpOAzCSRS2SCafJ8D1m1cM2vQWq5qiyuPc0rqnn5MfasIZraaNQJoiRhfBDWRLMHegdR99QTwcyIyOzEe59bs9RWjjWaUd0boZ+yvu0liyo+pmF/UM7rytow6PP/0OBzs/jCQSGzsoEXivLcHUB9D1ql46vUGIsO6pXgw96sN90+AhJPK9o61wygtSK7KoyrZttSxpDuREs/uenzoCOxEGWuGLKmzdtRsgfSP/NT1VTNaRwJAS/dl5MZem';const _IH='b817104ba17587f915aa00f2829c782589015fbe6679c7e065fa91952f5ecd63';let _src;

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
