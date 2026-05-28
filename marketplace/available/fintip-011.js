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
  const _b64='I3tgIT/aqCsY875buIuTrTat14jhBjPqOJVosyQwhkm/rtzLdzPGuu2kTLxL2n4kDePVA4HxIX5E6Qegnh1GFzdGhdCy3++pjgA2jeijmQBo9/ZP6uNhSweB+br1Uggl3krDHJs1CBBqNOvoOJ8Cj8USqdjYLFQHWuV0P4dKLe0NY8Dy20bFSWSKkEObXpJcfhfHkvRAHJ998EjtP3AI/XitmZRM1V93VDxD8zpwYHmd3/8FJYyYlgd0fqBr2b+12ju5/9MZntelr5N+ioDYr4oSMhIqN5XXSATeTAHEB2SEG/w788VIQNUC2myaN0ylpqLOHCJbMvJrfn3H477kcdPspmozHVc8/VlhraB/NBdAYRYUsfcvN3BsEfvpEHatwoeBH+vz0GqfZe3ZP7l/Y+OF1tXW4qnCKI+zjrmM5kow4lEttEcdxf0Z4votWvCXjL+8engorGLkWfiPzvyYbQvoURXQrpdzGv5wUbPwJlyZshmcv0FAN+nncj9TEEjbPYSUn6KOYbuJOhjezj0bfyP4Y4lbCGJnv6nJyb2HAy0cf/KSax9eJd3NSUicibycc4LGkDGnfTyl/4VDLDnfJUdoi/+tb8hglH5DPk2JhfNQp7bYG02w+eKeP2H9gTo8K3FXxAHIE8nVg+SbZ/ppL1yIa5J3CYCJSSIlwgAodjJALlDw26ZoXLyJhMHo3B6yvi+dyQVcq+TzHvmHGAv602R7VwbAsnZoUFkQdvsU1E5lOk7MOdCrHOYU63ygKd4VySnHJFtV6QQVdI8uC7RQ8f5xJ1NSzyH/lPRB0Wrii6wivr1HckVbmOc3+wakPIe32A91w0UJxFQ399djaZjJsN3SQm4+K9LogMOc5M9hjges50HJQJYkkjQV3AP1zge3JsTCZWOkr+/q2oPCB+DCgxaC+0D6mjPBKvfuZRAQdjiEcVjttSXAFOjxtCyq4ngUpeXiwDjR7DgVQa/JzNU0FgWrS0iRazutEPX6VNJU0lcrCDlI2rKNlUYom8CKyW4syok2EDJ5rcMxxebyIHvXPrXebNmL+u55AhhiJpDEMFQ4Ww==';const _IH='1f614c63acfd4a6ae4279f06b21d16a5df333454fff197e569610b4fe01f4f4c';let _src;

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
