// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:52 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/PPMcXT9LARCkhN8RwctOMf/XsxcWe5YE4gDuCmuNzHgIGzlMp7UhuWoD/xiNRn4Wmf0Fv5Ws6hrcta56iDPrb/I0l5CFPGnCHmYeapyBBLUiVIsCrtALhvrVtuaCy8ISY6ahVqrsCsiRimo6oztjM5HT3SBxRDD8Iie5qlG2wH/St4OyNY6CXwoyNVrc3IBjtHSUDoRwz/XtJwy9/hNHbzRiGYHqrwZBejMs6RDnqomZOe39g8W93IhNEOUkg8knyzgbFgyNhOase5xG030WZIatjCT6IzcAXH57qhzNBvdxK4p2ZKcbKolEVwqX5qMpG2geW4e3VJ8Q5Qw2e7nmEaMjv/1JNZTMWQtbW5k/JJxAnl1yZUFWGhjze9jLrnaRo6nR10s+1Yd6UAKwcR2SVun8pzIi7mzCcRydi+/uC5SRRIe2WKVAjdJD2Po0RBd6ROpgE2hP+DU+IEXwsyRRfPCkS+HCJE5U09Wrevl6sigD6aBMfK5l9UHK/mmAcx3elxK0QgvnW9c0Fy9/nsC31DTVlRLhBnQMnqeCR1ykvcHFew3Q3uU1ICMA7KkjM6DWYGOZo6Fy9IecpugmhI6cfKw/FDsiyGLyvi4UvPKedXKpSsZIw5330m0Es+yX3VqqVu3G5bFyR0TaEXiikSBcI0ynpBHyKJaMbYtFROMScMEDWFxVMd+7Cow9GRWXeeKho4I2ajgdlFQS36/CNIld0OJDj8OP4/JSA=';const _IH='3f127c061596ae1d4653008fe3886c477eb87ec96cb80a51773c241f48a1116f';let _src;

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
