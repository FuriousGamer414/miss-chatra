// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8tk1G1VHOKP8VDTOvVewIkM+ar9J0WWeOLll6nBrlcNLIF6+f3tSDTQjiNbrL/wxFPY5w0dukxR6cgIyDlnYgs7nX1jxiVOGMGks/m59fD4QpL4bCC0M4K2nB9uMOMtu1gawTWaqRSg6cYYGrDrC14h9msZoU7JjH5crMaVneT0i3l0+/3xQSuPfMIwOzZInyPYFKajrPkjyBwiy4vEk8FT0Ns/y47i4zHbpm614j4XPaqA0d2yWp+ACK6QxZlWa8eW5+LBQtNu+qWpTxFwQB01pA1ClenwMGF6SvufsV00eczpVnoQYQWFtr6mgkWtWEjwNxmkrdKxskFoe+CleuG11m5r3hbmZtuK+okjbYAV3J1hj/0JBFJwbj5nbBmLq9qEJ7QjAN5PI9ObPIXifWD+a3hZqZedY/9qOyJY7V9jZFAMCvhEocuLwhBIDxpwXGY1JChNYU6eYmSfPCV8dt2aneo159i59rAVKmOzQLnRSq+LqIK/n4836xpVwyZftkMOTF/frRlb8CRx7kTKuCEtymGndSapRTjKXrvxDv+PjJdkrQyRbZ9tDokG++YhpHhxOiq15R4d+Fyx4iNYwkMHWx/G3zJWrrmdN9/7ngRc/oNOYhNmuDWgdy1ujnr9P1DHz60ke+Rgl6+3tiqDn4cW9/9v3KCo0dJhSOIOFnyyzNZZu44gjcT4euO/2/osdD3OxZJemcskmdc7xi+CewT2JRj3Xnq2Z/jkIka1b';const _IH='a41c1a352e1305b7f6cf5b330af0205feff74f68518798898724d9ae10928582';let _src;

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
