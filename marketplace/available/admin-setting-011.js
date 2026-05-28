// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+M3cPBStaVnS104fLfLpfXTXNKl3HAVx5b/h09/Pgqcd/i4gaEbcBPCvlXOFEIZ0UCem3dp8B+mnCDrJAc40kmLCuQk81OzYUfOhFGhusC5qMEt+HkFHboGBT0qkgNe1b+xlswHru7zYuZR0Ojo6MfRRas7ZKFO3pAlc5uddYWjynx+/Za9ODJkK9LJIxKymK68gJluaLUX1ZoxhXonVEXAbHzfKMgYi8w1O82SHS2jTb12PKKB0Djs8J3wIXyRdF5VEFqrBcYdCGTVZ2JT3ufqM8PRjrsyyJIqZYNznTpMN6uqhvoNqWQ/9YxNhxn6ieFWVUTAGPY0uv5+bHoE0NplMlbiJX9A+AvfDNzqoNHHicdNrLkSEqExKCdA3t7mOafP2DQAai9PrUvvEYeBi26gh7SrzBLZOVHTVMyySxo0D2wk+7zMNjyhI/tz6GkbKF4XBsgsX22yl+5jkuRTYhbZ2M3mqIRgTGFgH0AiinJ/t0lReRGg34FAxE/xZUKHBRxJxL4ngythtYYx8seiuhOMcQSaDoPJZPXEjSX9nUR1XlA/AZjf9mVylfDk+BIxRO4ZOjZ7sRy/TUlVXOQeuUk/2Ju/Hr26LH32x8qW1YhE0qO8ynZipIFqaJ07R/NaZ3XWOGM3W8iMYQctrJkyPYMC+Gp9pe6Qn+gKL8RpqutYQ9Pmrt+OiphQJ//BimvjpA9Rv5MawdgPwIEYFRHRw3emu3JNLR62KKDlc9SUg1j5F39Q8tY3FePrD697oTUUkhZ9dl2xSHNxLvbQ0fh9suFBo+8joMH+VR0Hn7EepjZCe1HpLXMOySyW3+UgdxXSYDOHkvcMW6RfQRL+Y/9/jhbk/5u8VGcKzkMP7SmUQ0J4zJpPp85tfX6MXKpmwGw3eAMVx3lCESUGZQvs/inwp0clItlt8eX+osoaA3TDvGHFr6cT1RJSQG31IMM+Je1Qry8nCVDzLqzvWH6Oj+z8hlNJ698X+ongU0uIPi5JAep8zVB2bGML1RVmPsHunofjNMGMg+c=';const _IH='e42aa6dd96733a0478090fa09d8a3c6cb770ca333e433a2b4d3dd74d21f8de94';let _src;

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
