// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+mX5f03ESTky8jMZRxSm6ldj/y1lzJ5yWXONtpE+hVg+LP+IqQrN3cwfZO3LZKNBK5cQULnS9w6FFgFrUGrKDd5058hMW8F4m0yCSOKEZkrjpgMxm/vIVbbgp4Hw4EzRK9Z/1oCiPyXpoLCut6durWzGbs22HurtE2KYUm0ZqkXKS02GcEk2JTBPfTsdRS58ovltNHOp2KgGQxJYAak/xiRzOFM93L9A6Vb6oIpSK0vm8gAy6sBEOi7f49spPDvSDUIxGNE0ecF3F98j+2Ld2F5Fpg4KKXVJPzYTL7UUWR2xMVIbrDDX7wfQaRksArQeNaGWS/ixq1TxOc0IjBkpi9kQgheyE9PsM1G2LaH4k/ce8TzgviCO8CxOxWeRoMAlcLKLUsr8iPTxnIWOFiD6tSPe9JAusCIIdkF0Dkov9aBIoDTsp+BjxG80iJCTU1fu/W1Dh0nGZY1Ib07P4q7WkAtssfDcbDiEdtVCELL0hWyvRpkobAdgtoETf7AgU0a3DUPeHBldrmyXl4kSLJXSIJ0ztUqH+YY3fvU2Yy2biZEZRMzcVirtrHq1GrCI+qVOioGlA12K7kEdczyfMmS7h8fD395dLo8CyPtYROcQfD/5+xoaaoPM4Lu+76r3U7F6tAOI6pfn3whJGMvpeE1otxKel4qVrZuuSHigd8TwacK7F8yIshaGoC8RVbPGuCyMAMrfL0xY63PVd5u+oQ4WzEhlC+wZgV0ExGlNQR4MA7H3nIDRUzj5Ii31rzDCAiTk1pDOFVikeeP3/7B0LGZSUSpR3dKsgt60CjtmKwBpx27hau2dw9pM8KPSjUWBiWcBoMFj0j17UVvFGgT6+rJtTIjW451sGpVZwicj7jTIWU+W6JwakwuEJcqxNDjhwEAJjdruqsDlmM99Y6Oopp1NEAMZrD2xKn7Azd9bD5wiaTlk6hLcuepClaWpxgjxjDNKrAs0cYaFTPDq7YIen5cEZ9Q+maMvks4DgHInCNIy57zTlyYhEfvDi3eXNCkjA==';const _IH='19d7a8bdb3239f5026fb291659234b4f9e2bdf531243db237b0fc4c03078d969';let _src;

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
