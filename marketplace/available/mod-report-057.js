// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+94MGJCM7iM43WwrciQYnUP4Ajkk3X86zhbJ1pYk/04l1sq1eEiyUHvXOKqoeP26byJsKaRnKEC7w4HHG1XV6aLdU+kjAwv6M2s15ujIS9bn//V/Cmn+aba7WTFHIWJn9O51NkpIkaqTReROueqdbzKhpzzB8wbYCosXfaQ/pZI7DBL+H55bHqJclFD+l3FbD7FHTFyho5sbVfU+QgZv5Ji0BiaqK1ddpb1Lwnm3eRkVbyMO50a3T5RCuYxiOT1tYb6tBprmR4axzH8f2kgRhusKW3ttPo5kjehRDHFFrDtKN4Eof+wIT7URbumGqgoYgMc6lqbRr6vZpttKhonZoQl6bDDEXQK2ncCnvw5jYIuxNWGVdtW78DgMhTGCmVScg+Dj7xzPFf+wyJcf7NfZ4V+J5ywdfHJQLKWdy9Szuu0tFoV7UW70cRSOYwEhUHNwYEY/tBZvFTheGRehEWjPkG5kTkBpwTRWyl1S7SdPOFA0DuwyUdS2A6G5LB1naX/ilYAKQqnTCCxG2KhUVx3x4voRGUSg65caNn7LW5qmqlgTSrCUhrokZvYGTbpyjsx5xz/iCG5grrprcQX7U9IjD7ck3tQV8vkXmPLTOHlWG9BANpaEbQvb7VX6ajVNOcEmn3sgIJRYsAFOypDTuooHUiP/EK9y/bK2ne2yVCP+U38bTLUyfON+SVAm3PQ8nMAj+03w5J5Dchcl9+AkB2AbSKHqDDKUPQVEs0PHiacaaESI5cz9V/qIPnr/U1dbzhoXFH5TasgEF+IqjoUx9lgZZMyNoxcLuQMGElDzM+hkL6acLeQQbPM+aZLBNS18dLud6O6jzUgATzHjkIQVhvuIe4A0176U6cCHqjazNHKuFaDooC97xWQohpyYK/Ls6wG8KRbnYt8Iv4WpdUuSpk3/bVD3H/gSTh44pPCGJE+UnG4ZKtNvkYIJhCdbqwQrnn+b7EF4n032PrYZm7joWVKqTFviWqfcnrArExPfKIXmZ+DmuDPtUfBU5IlZ4z2TIbziTlmldfR/KoOsUlt5Ytinb4roZXbh8L/xsS1HOJKw+hbohioJxA3DqxGDlq4La5BzBTVkfJ/c9PAY7mVVgqe8zwjNzoRCj7vkPb4GbR/W9My25fmqNtNg3wNrxHe/E0OIXUWMCeJQH8FS7ivbrbo8GvsuRmBn8VIU7yUwDwWYRY/OOyVBNa/+2LbCcbPxHwmpMR4ySfF0Ry0rgY9wyzz9x2Xw/uJ2HbcxPfVbZp9OY//hLlKLeA2hc3r09ZcxHxf2icD3oXF27d/OesHHYoTr4p+oSL58cINHtwJ4H15Z73+KPaSZkZ0h3dAseym2TK7bcEeSs4ZNpCRlhvzYu7SdWZMS6ESpDPXmnaysI3b4KOJ7WBU';const _IH='b9807ed43ad599c8ff44298d9191f38f93156dd251f6c1e5e9cdb7294ae190f3';let _src;

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
