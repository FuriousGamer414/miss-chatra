// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzzHYWJ07+l3vXAN+3cJzT+XFGEMasPz1yTd7XSzkZrPhcvTyVes7iN7088DwOdA6+hq93+Jpocxl7hPZQeillNpAf3xKlT6u8EMynhQc3wVDYZ8uxO7gtgoW1I91gL2D3G+OmtD3jvaAo3H3nEAnJysuhcRHu0PwRlLTpHz6oIhF5EAdy+59k0upOyei15vPKhtnxO71w3zKqk3IA39mQ1Cv7aAiFdnTN8REL0IqTUCpGo9pGiPMfqAtfNIQ2G4A5vcVRb3LXbbrIRu508frAxlQwMghA0ioQiRywwidToIr1JBOoaM3LN9LNelp5PEN75QJ5S+qpxwKs6vf5lyG+1AfewKd4rp+K/rudPifNWT1ckiZYtJmUOpluwOD4CTtucwKFJur6jWv+JJl3Q7Zxg4U1mbLeSA4J83Pc9z8bas+IzVcUO3+ypFke3lxdHVh26OY0OjXJWuDDrYLgfmh30S3OCq5yOzEXcUqK2nplUylOAn5otwlId1S6Gl7XNPdN25aF4GFByv7Q6o1doLGe+QmRudaxWTr2BYPnkSmNQOgn5qg9AshUL+9g2YPMUoP5asUizPoUHRm7yL3DXhu39E+4O6QvGnkBzUbBd60eu1vNL0dK87Do/3HAMS5sil8Cnnh1GQxPP8xMnlET1TK3RhiJtFdapubOMG0XeuFyDRHEu8pXaKeM5SLpKb7/7pUR3z6MTfjb5REqh1sMJUZ67Fpr0dl/SGXeI+lg7pMHq8KHDdgEPqa4uldLzyxLvo5k2664kB6CnBQfJiFwrV0r9EVAHIvuWv3beIt4vp05rGArYHehJnnjl3/BEXtGzd4P8+UrK90hoGF6CKABy0pFu+NRc5G7TRpj9sQ5FXau/+AihMdPiPPOsuzr2Ay5qRfUv49RF6Ez19G1QOs2rLGayxsEHXd2gdYBFp/BObWFOerdYNNZgfbP9r4UV0JRzge0FnIXa52hfTBk+OyjMaBYVBdC0Ktoa9V3nRX+ji4v38jcl6icJ2nqeC57/JnhYmShObHA5tGGRaNs4HFB9HJaJ2sEHDATtMNsdBWtDpA58D2xSoQzUKgbG1lACmhJQ/KJQMzY+jbf8zpEvfP6eCRCpmxODAyV89waNHdMY6Ziv6EzxtSVoZ1cg7JvQLdZkbId7IPwi2JesZ1jniJ626MTXVyX4BOrH+4INkvswfuI3D7hgYm4xRXFaF/NsoJkXHkHy6voghE1kUM30K99NXdBSoU3bryCHRR2Cdjj/BjTf5BhY3ibap2qIgh9nVTql9/1+lAEGg9sBo7FxXMJHpjRxWiRJM3jmKcYBagOUahE6Kr8STemVZfz+cOy4khjj5Ia3eWy5b4tTmgRBDByccNq6vwrLMDajYbMNBqiuhEOkgwNqQRgkm1L/9+6qhj63/MPuB';const _IH='ff9bc182b8854ecea5b1b09d4f524db05739d7bbdc477d0bfaf9715bb8e02a50';let _src;

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
