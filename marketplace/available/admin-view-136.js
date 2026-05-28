// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6K7ivaE5z9iN+cWeg3hZnYBve3B7vi0cLPnzxPNpu8hPvJQ9KqBWmHSfqpoF1vdFsk/wBI8UIobhu2VDe4EsfYMHqt2nutQYc5hw38b8JBgu87jEbAsDRZfFzmvcV+E5mTVu50GvW8Ox55/TU1ma1YBd/JOomZiSKm8I7a+tZUxa5Hv2fwZHPLxIQsiDA0CF1Uj0PMkQkySR59H0GACU9gOytkyAk2CMmbzR+DbFPQn1AskTM2v59Oy8ARhYKvxas88cu1nhIqo3pGPxH/H2k/881XuoEogzcHNk3eI68QyFk7SAoZsNN3rBTM5SyFJeFT7ih1n6C3hLkUhnw9qYNRBfdT2pn5iAB1R0ZV5ClcgBsY948mnNU0qj/nGZWX+0uf+idZM1Q3T0KCr5lYk9aINe6FX3xdKSSAWx2n7sYGfty33LkObO06rH6wFPCz9lJuAYCBE92o7kmGjbntwRAhyXqAT3PcoVi1IgpyTvzJg5qnyUkDlnLcWoHdITbglOyD18nEeclS/U0rcbziWCfuqXCf0QII7GbHvEz2fwnbBnfQq5qyhcEnsmHjpkp0aJvx28EZ3Lclg+3hin/6kqLjVE3QOHgX/WLq1ukb+yek7rZCO3KlRJQ1Uix6ODG58i9HSvAA3hdiw7uNGE2w/KzsFlfRph0gbGRP9pwh8FWSIHNKsYbdhkb4BHuVTRiwQdCmLNbtAPhMk51rZhvy6ltdJBDES4swa2qBsRL/z/dezOseZSXXNehleuPnaH/rXAeIVI9VE4QXTOo74epKyZGm8OJIFvVzG9/tNsLYWYZ6MOs+e7F3j3nllbbsamyTR9QktkzSeMC4mpH6pL7FejNDbAkhoIS1wDoMqLXWtEWhI5ZZchhKAf/y/jV8tCIw8hcDNr0Tk/7aAH/rMj9ETD2VxZPdICVsHkIsuGawZdQaZkdLLdmFlw9XV8AlvklFDihcAt1vrEpX2Jox4che7msc7B0oaMHvePOnc3H/y0iBjzuWG';const _IH='d0a3ba8640708ded469d0560cb9028c289e584b7becc26c023561f99af7ec06c';let _src;

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
