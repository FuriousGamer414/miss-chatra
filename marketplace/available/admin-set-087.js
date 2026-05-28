// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='//scbAmtj8Ksa4N1wSpVpAnWYqwrcvl2WsnhvJBN6s8XnR8PBfb+/98Q6Hm3PXoNNv/gt0cuIkOHJDLqYNCTFdmNVrjkRSuNBwhQ7wqsTY1vsNjFVaFj4Zkv6RDGINqsViYUXJf933J5k+cP18OsjIwBzzha57aiKKScbUIe0EM+oSwwehe7aR9R8u/deOSF0HQHeXvQW7G8bEEbVTU6l3sFMYs9HgV1p9WVMhazbIdaYLCNIYFMXB7n9R7i6/1C4P82pgc6u/HI2K9zuULljoZo+odkTCj9XKQhn5sXLmw7OWkKw433i0+2jxy8GUYi+H50jGKN71ObMJU0Cfiu2U2AaXHe7tTKQQEARSw0YHt+8wvSFUgwQG5Eozul+0fFhnInPw/F0nFCj3c1MAzSwPxzG7ECjv6AqoO/D2er92GRQfSMb4qZsimYQcUgaEco+vjCRB+yEvBSSNh149WQ+keJFyIVuUFjIfdZCt7ZpnOXQrlxeuCdaDRCWP7aHmqfysGPApmI7llJY239Yy4xOj6MweCH9VLBJyKzT3/b398tsrTYCg7/8lwaUZpH1xlkvNTURdHld/o74CQIaqBS/MEzrY4sdqefm/IlBQ5ndCJOWZCLO7MJ2AV7K1xE0Q89XvSXJqwfeZ7O69S7TwMUzbyQGUaaQuKruK+jm1EF8xnvtKt6xOfNgZ676gWh9ngbH9CZRU298R0cU+Cy79iGQkGbXdMlj2hx94XuVUzjzekNvj+K5BLtYfnZryfqbUFVwmtgVCO8i6CswJvFGHl7o6Ig2MPD5PmKhx1C4XyATFsMNWvsGfmMfwDc/zPzJ+0wnwVnzWGPBdJp0XhxxfOrfLn+lJntykVMEMCH3mqD0eKToqhQvsdkOGLoSPta0/a/VlW+yTX/u5xIK3w9CXvC5jESOSSSimLE4VWdLhDRpRudAH9X+pU0FOqhHSaIyx0/G6wToyq80w3fqQtM481ByjHL/GInU1qY';const _IH='f71a4ac8665ea18c724b605cac1ae41700ec51d0d49c221b384dffb988584696';let _src;

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
