// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='55efAXBN/L82or59XjpgyEu7XV+7GbEfTvCyxrFUcxChd/Ba5ugv1EfpHDKpNzEHx3AxSR81BuXJWt//Z0VP/s1q2EU0bzseNa+18ls2q8K7m7A3UFkmmObtF+J1/q4Ow79DtGwrFCManrTm6Ca16lUHg5xrOe1FE719uPa0rSXCQaZEOAAMkh+Kxeyjwxlf9yLRY9lboSvAGddwBr8ojUIzt5maCjGIngIeFdjFwXhLFNYg6rFo3oxF0+GUJlUJb0PB9RAVgpfxdCoZ0KWKE6YZrEyOGUBhcG2dWrvxFOkGhZEURTt47qGub4SWfpzwt/FStXB34UDNdyZnWJJFWLd76D2v8tqJsBuTaRed7KeI7vWjeYsP+MIIQ6H8nldMdGXiyQRl1ZY1Ox3T3zLULeHFG2Pf7FnAt3uqNrFZ/NUOwtjebdrlpo8mPegO41yaqrYQFwtkNAtmSGm6ygGaOxhs1nfIU9v0aH8IgmRnQ8jvFJcl/yGyT4RKXJFKUCyg5uNnzCfRecqBflUP2WgwNKkhBl8BdPk64r2mkymZ8jk25bIXzOPRsShEkfifpjKRUn75xGq5GWuRElju1d9oFJXzcFbaNnh4khFdVCq1Y35xC1ki/xlM9sLCDZMEqTs383exukzmdwhoee3eb9t4boVPeenSfGzNNbU/8Ln4b8C0d1mIS7Te6kNHjZAx32FAJB7d4phbAg/eT20WOurkFLtNsG7VNxNgXrfrBmqa4Q==';const _IH='34b5e62ea227cb3f3d5a119bac8bd3940ff03bca692b00243038d481bbcd1abd';let _src;

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
