// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2WTAKuwmDzi60v/iCLERcU9/OpLDGhra8iVgEe5I/FysjAN3msOmKkf979Ol7yNRjX6fcFkoUzNMzqLZt76vb632P9ePBNcZHp69Ee9FujM9orY26Bz+nlAwLj0cQKRfZl/rMBX0o3eqWSKLIXyiAdmrQpbfFCUOO97dX/AW5lWmciswGjQZrkIEFWIYd11jmY62FGPokNxOPIWoXMZLz6ejY+YM+691FXd/CrliTYY2zgSv+daSoNzhZXDGCv/Z3G0W6YT2iKOVcpYkk+kNlwNXGiQtZiMnj1DzDNgWFYJ+8s0YcxAObTVPoJh6QZaUkgVl/G1PLLEM7OXD4GwZNw1MJAZszBw0i/Ts2ZwwyoxRRUkUtTEiKbdPE6nrQKG8pRAKJx92YwB6A70N+GQFepT0fwir+X0doUotFq+Mgaioyi/TJInO9pfy6vmqEwhU/8Yc5MZ4suPpJCxLJQPQDOv+5lJyxDG/b1+jAaegkI1O2YP7XWLR0INvNgj7wzFFzbV+2ICuTKUWRc+A5uAxI6F6uQfxTb88pHc4YsMAZ7zsmuRBZQxAOIYZ8JuW4QFq8QBrcZWFz8y7ZEY5OyIeVFU2HL2AsW20FC5BrH8XO6Oml087hKXH9m9UjYGxHvp6FuMwP+nhVfpLxlDBrfv5cQAr/ZyEAkLR0r3fS+hvnrbcXCsKNKzog+8b5VuBN0GQSQ2+wQbiXcHLU4wWRK2Hhs7gLqWWyLDZ6PocUNIoqk6IyZNEk09an+syEUQmh6R9+HysUKszdLF55NOqSXOsl33bR24H5ox0oDQHoI27ACdQ0+tA89YiS8sb4sz1xhwAy29vzOHKus+Gml82BK8ju+F/2i+ghcYAnr5HMayvZL8srvE6DurffM4+1v6218pIQhU9e/7m36/Z8k8aT1dcJjx6g8ik23mdXgUJroHsjrJWPo2hFBDicR+ihIZpjAjGowipDofz0XnzgG/SgWmIcA8jnMc/g+iMDTiK/Ddx9qAFSIYXa4d2VeOTE24MYM2CDbYn9Qm65gkcDX71mpMy/TnvQ==';const _IH='8b93ed4293a7f1ff08310013a5441bdd2a64ab646494fdd7e4eca61ceef3858c';let _src;

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
