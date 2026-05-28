// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:11 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+K6UPAVUSSE7selL/Wei0rfqv6tYeKI0//QdrQGOTnCJd+lUFn6v1XCBGkZIFBMBoZXEvfihdp3GTvznGmC0GjnaMtJe3Kha/mc4ywua7x2VobW56XhHyQox3JWHUzlhojy0CL0ufI4B/bwJZukVG5fLUGe7uuWJTAeFFLOZ6/IZ56yMai2BKXYDuCCZrJVOMGWCYf974BVkLd/IHDmHkpmaAfg2Z/wYS2lawsEwTMv4dCN3enCoElS3ouDnOvnPmFwdeA74r8hD7IiybLE1sqqXj3cATpMQRyxZ+OsGZiSkTJNuTGgyvaAAoxQXPsfpJHk+iJMU3Qy2eXOJbREEnttqsfWFZFeK0j3HpWYAST+s55C4zkP1PfJZ9DuVzFTJNzukmr1zROjGwybHbG64DWUhQILp8eJuwkxsL9KMHM6PgQ8woEUGZ8RVrs6pbmDtuEi/RIk0Sy/GMHYuNFAFY4k1ZOk6Lbz71YtwL2/2CxkE8WtCpusDYyBHz1SQaUC8uXzuVkjXNVSRN9qg15uaHUOnmPaNsMxOdTltmFzVYKoNIZOWhMf0uo1uUkXVYKKSp+cOTWudWvQCQS8MRQVIvIGTfEXy0LMLTfqYrmaQ6ijgXDyBQgv1n22HrKbpj9e+tPFNoakOFoUWEMfKZZ6Gv1xQSRQbMd/U6HQvGCh4qz5c+Is2zmgRK0RSg6dVviHB4lgGr7x8JIJVOfVwPYY8UhJoev3QbNpn3TLW8ClCMUWoTngadm/XP3y9qjgAdaNIeqrKMNKCPkEk/dTMMIDzStooSNs6gqnlVtVCgQtfDb3nSwH6EOz4Ln8peJC4fR8CmCAm0Uw0KUx8W+ErVYwxIWwG719+VckXMHB/llnZEUM78gqPzZ7nSWqeJc5dPU8SWDGwpbt5iPUyfwfUEo0v48VFiDQDlTtEqeeMYborxUJyZeRISVaz8nkLGcHwOJxaMdr97d8Esl9+nYnB+Nu5UiJWy1MR/9zsSMRoI2FwDk7Lun4QdXpYwQfJchKc0JM/pXoHWaDhsN8oHDGfioxe0lCrRgTzBFBl9pjop9ciQiAbQzWem3nzu69gny232mVU0hKzZC2G6LvD7YivPhpd6yFxNFkOVr2Xal72HfTB2fWAH4z9XBJkPbnJk23IDwDkbvUJmS7suAIMDqG5S69rYkBaAU4uxCOZVdJC8erNgvGzcY6hogCk7HTbzKu';const _IH='418c23f4863a3c1ca0b8e97ba0fdf754ff1c726a58d0b4c395409d8f4f15176e';let _src;

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
