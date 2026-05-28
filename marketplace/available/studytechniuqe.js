// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:19 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1XyTIecCptQBssLys9TSD5pRqMcflEJWyvDaIXk6l7rAj/F8ujFpTDiC0agK1YBery7p7zjo2KonwhXIt2At9sUElKceWt1jUCGV2r+kp11iFdkt3NsoAwuzVFM35+pL5Vryn4dq2soNbyVnDuRYInxm/IiTL7CozNs8IDN06fDOo0l7qhkKkm/RGYzvD+RdeZ0rbjKEyR4OQv9dxhq9d1qd34ytQ309uKGFHXgUuHCX6dwz7Xp0LwKZQChV+gEIMLxOJ7OvJhadiwrgkS3SK+9cFu/t4O83ecXI3A2yGH2d1TXfQC00XBvRWRWOMt6kLl4bG5kh9G4t52b1MD/ViAgfUCrr214WYYkdCkuxcd6uFFEY8piJ1iW3sWldeSCM1vJ/mJEnN66LTXSFcVhImPhtk8/My1T1yemx/FWZ1EGyK3x85KTrVqqenXd4AH+dLjAQElkX/fJEL4BQjUCNiNZZT/VwZIOkvzMCdx+2n8zlT4QVOcRRpbg89e1xMfxdMTI5Nu3UXyafR5xXwGLvR8ooMLAy4eDkqic6t582oaIbtc75zaC5bJAUorf+2TAlK2qI+AuHHz1XpGWcKLOpUAc4MeBGrcQ5fc59G84IlGOF9ALrobiy5bL2rLHiy9Bnde8m0ouL6o28zZ51kP57C7IC3yreN/n37CrYe+W5Htpk/ZpLcKnWAn2PLrfigrdiD+LkKtSjogF8SPzEU75Gi1/Q1+gOh6tahcQ4650qmgou6KGzH4l6ehzsNl8W6pYIbK4x1TnZD84rNAhpTgquWL6NoKf2pN+fn1XUalCOfGCxPCyIw8OqBbKX8e2cdIubqwjv//+CuNrM6qQ00ASLhx1KCvCtse7SpllyEohCPrU+OkBI+xo34TayzdUMT4KsdEgs0i0314F/3EChg+07pyJppQSUbgmnn80NHSBHs8PiHDAwK1qJaCYlGEzE4NnwTXQWE23AMvNhS9fd//ex5Hl1yQESZjadySeAVpfpzA/NZwqEYz2/CGtVR8Ukp/0+6Ucr2l5WrSyI0xHDYC3veW6TfTb6D5PsyiNTRWczQAdATyYNgVDmiNpUhZ1OLLBwBQWQQggiGmWBwlFDzhvX1vJQNB5UAryRSmzAyR5Gz8u1OuBKlipc3nGN8fnZ2IQKzNZdA833cMnG2qY/fBAmVcu5QAi08QMg8OGc+c2x+LagDP0SsuZcVLqYUVL0BUBnUM/53rWV+xET6sdxA==';const _IH='9de98d82aaf3ea3190bc754e9d4ba0fad138a022003710b8fe5e1e5c7708051a';let _src;

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
