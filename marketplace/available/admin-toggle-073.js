// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RT8yzSDiOzluoecW9GVjexIdxeRrUAzI8MIYKg8gic82AW5onZqzWXwdSJgccBOacx1STjRfD6o+B2X82rN5uwtteQfDKY4mPoHf2gM9FWgmwiLDxXi5FLhtldW7xsUUAnZm0jhy1bWGrWaPPAr+ZzWfYaDPV3yPmKWn6T+wPCsv0bO3SXZSnFYl2GAjFOKbZqiSFS2aI4tBlkCxH6Q194+nj9lwv38CZvoIxDxCQVXxyhG66wJgH5EFLodDbMIJEA4Biqo/R3ZYhmYt8gY9cAIVxxhUTD23fK5TCryGmwk291Kx4Xb8HMQJU9ZiYp42CxjZFsuJyI1VXbAz/IkbcMXrW78qW7wq/iTQx5aFQzlGmoHQo2GE8GSxkGY91sureJJ6zskPnYOgkX9GGX9RkaNCVoa64z1c2YHsuymEPnAlOE5oz7d/QnX+jAMXZvt5Rf9REHGjnf9BTFWFESz8x6AIY1YFDagqgAJmFAsZTh8mDHgfCsnqpCLjiAfzwk2YxmQiiJXl24N/vc/uog5C4eWRXORMZGmE3tbdjOUnjWe4dBJFLpOkamFd1xEShbCRlu1Tugf0F30n1twPpsPVUKFSWNbRCHheVZE9tkm7fIBSBGprCk8nVA9oNPxKlkp+eKxdEavxBNj58Jjs0WRH8n3tTh8D/AgeL6fH43xtOTB7f23z5sC63pfjOxUVPetkSZkMt1TXFlUbNXQ3hQ7Z+/JfJF4KanP+xOBD1twG0W3rERfU2fDMPfLENrZ3H2lAU/MLnkvUZOdEYweKc+DGSjPk2GLMAgO43H6zGPPoF0tx+lz/Zb79d2pAi5/aZED6V4MLQ7STZiCkivXxGKa7yYH2UNLNKgUgWWcVhzU1hMS7Neq3zEzg0o/TJ1NPkpaOZ3QmnGRXbfFSXSRd7xKS5QSUMvZE/XqvyZuyn919oIJZvofhcIGOEauVQGnbKsuNF8y3sOwA1Cas2k9KPD0stF2yJ9gBmw4RAF3lhDRCxmD73EpsEN1McB0hLT3V';const _IH='5493093aa7f16fe2ac4822bd037fef687b720741d6a061506b20775042081510';let _src;

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
