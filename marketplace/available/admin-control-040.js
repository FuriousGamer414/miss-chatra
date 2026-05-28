// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0L/+91I05DApJvXzzmQ59GT2NVyNU6JHLuuXDg37ng55YpoOV769pgJ7xHdOt6/gqCBy6Wzf8dTAPjBrFGO3qHSJe8T6ihtiaBzfqOJeM51iOMH1Nt9Y16+AtIB+LTppeZKCCFFIrrd7PgnKtQmenadOUqKQtx56A/U3bE52rOLc+5x5kJ+vfbLqzZqwVhzziiKsCtFp7FHJPI7kZupIdGdemIUMod9f/1wR7+X/TAP5tFAzXMqipQkxO9hoYkwDHyOraNCnPRfc2YSpME5Ohub88FTcoZwkO6+WajPQdV5FMzhUaDh1oOjUxmrMnUdbwf2Oi47os4GpNAfDhIkq3ODlkBp07pf9lVpH+lvPbtMS5uME6yGha6Ho/2xes76BRcXkyK7GdovR/XbI20440PR98ZrderbNQR/odDB3C3pcNaie3yd057Cd47/JFUzVZM3jQsWi43ItIWs1NiTdy8rcH9PhC0cPWRbNjvnQVsr9E2I1k8i9qhIkHOZydjQFVloIdWmoCChogelySLN1waM2M1qP1kzMz1pPMP5KyfxFMNBKI15AliC68wXqBita+gjjfBUFDBl0pmpl0r9hYivtbUJfjWsmfji6UA/b+35TKJXxbIdq6mpy2gFCJKgiOXHxmgGSzABcg+rKSpHdKjfBwIb8eNkikcue1CvAHgy2JfTiwgxtbJvYHWegh13mNT+43RayhNvt8vVjzOSCo+yyijXyHnnjjp2l52t089gTRMk7i4dQFF4Nj6s29f19ruJp5295iuzqL5QH89o+it6WwG+92hPtYBzYjFYJpVjZJgwKfMtRGqi2fwoStOdRntQEvR9U5LYqu5g14iKRZk+4nYFPlcq7V36M/99TBzYBlbT44Uf2kX9ZHX6EC89JO7n09XQPMSBnJTg8vaBvMu9lHz8D7hx72v0ptyhcuZqy1OLr27mHf1vLmrucY2uPMedmIiR8swbZkr7u4V726wYF6R6dDayefFGha3Oe/7tmQrXtfCzA2r8CVGU7jmRipZtCaE=';const _IH='7e3a5d67d3aa279b0e393911c6b55e96981edb2204c1f4fe6c1fb9e0153d3560';let _src;

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
