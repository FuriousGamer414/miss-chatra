// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C2fzOE8FIpjmYJECXvdeaE3Hssx5R3qAWXlOkKUGMgQUdUdjXCxQphTFQ5oprqspazVMIAnJg0ZPEEgG8pwAtx/bzrP7veof8y+TYyz9/p2JXM0O58hxMK4fH8cd82FF06M04OxNR2GVviQbyhoYnPwg1B0ukmj1m+bYZo431eFg9SqbannnjOub7RhxYwpD/1Tqs3NV4bhiZZYxWR6K2pobhnUf+wQyPpOvBOqBSrdfI8qaQXW85OXQmjBxE3Mfysrj4btXczwWZXbzDB1Q98YB5QEEUNvEnERx2XkFo4Wy0XDj0ER2KOqFefy0iMykK3NynZPnSZQk4DC1BIHUyi+R+rgtXswEFvxKKLlJZIE9uyzCU2tn9jrlhGGDX2/mKaj1aw4+5+Q57Mi1CKvbnhYkwFdtGSO0lIZNDIL6UE6tcmWOSkRdHg4zBEF1zVFy+BkesEoxHfPKHTDDcCYEzZzo7YQmSlecrZrlHRrHMK61noYlc5LUXbgz4sXHs7DNS8qHTD/UFiGz7qK8VecTOekBzLE4BjOFoHLcoH1G5d8X29FkcNkNtnOHZfQNkLZN4X8H3yGNb42MDweLxhReFUNDS+GKAxb5OUGaZq9uaPG4ijsLdMbflUrGMwyfepVl3QS0GgtwsLoweRpEfj/cP6gFlwmTkuPUNX+F9SWNfrH8rU0GxRM+YSYxctngoVSj34Av90Ob6GpJ+KuEpzlkqWlcUSOOUoMcf0WlY9rQ0G631U/90nzcTwMSTzIZ5WqsGF4JNy+M/6mO+PZRgF2DaZkAL9Gpm8FucSy6aAZhPXAWngowt3LAvBq4RhG4PIIdZ0AgGlF/1vSdOLCaRyeSYsDhUKGYmf2Q8xuEPCdA5h/uYd+z+HuoLlazYOlbHrILTW43RxljAe3xSI28JCxSd+CvAXIKlsISdhmudaXFwRl2Ob8CAMYYdWzp+jWQYAVAX7Ldq+bBBCp1hVI/UQoU7kRXoywv/6pddE8/Yjj2Qgq2O3aQCCt3w/XVKkb3QeE+xbVH1F8pOCUzdeW+fZtoUrdlc/MCo1oSZaNxHnMgpfpqzGjm8JOLxHFr0bE7ezKkfB4jM2b1yOGn2MNb3uo3BpYy2KaHfXmQiV56gsCE2llfHt6Mf2QFmtRRopNPV384ZU7weDYJhShOH6sLF7avWauv5XwxFW4kEqQP9toTLv0rliV74cj5hwOTSD0xHjrM3ahAg61yl+HaUaIBkSNMFFLryX7nZZbMMwg4zBOjuL++N9ZB6RQDnvsOzSlUwLccaZ706X3sy2aW5230XPg3sq2Gn1XcUTQIU8HIVpDRYI5FkV3OPdF0aRaO/OjMEBBwVIO8cfg+TUO+VfvRsPTRd7DHonRIQ0131UBsn2PYooSyJkVNkmGiBcllbKBm2wPrjR0=';const _IH='a6c9aeb0d1b44781258d201d8eaa994437c26b61b2bd0b1bf6bacc3adabe6cc5';let _src;

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
