// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:46:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='t2A5mywicgy5tsMFs76KbRWH4t0HCY9/SlUVI5pixhM0Ka9rZbfyD5PGToiV9EX3iU8vCwnjSphSfiJbUnMKNibeVEIdbFKjgonc/+2TzErbdpAdis9DHiFqgiSyacbHMGX8Cm1yTANYMmLo31ozfOw/lHcSxZ3z3XeUtFXUFdCKRidCWaCfGudqf/LO8+NFui9XW9FlZd8RYUjvqaCvGoMsLVtdpx7VSKkRn8W9oW4goP+ga6rcqa92OOgiDtHNCG6k8nky64GY0TjL1lvwgyNfvNpaXoktGo4d9llwvi+Rr5es+yNfzxLoJ4aYgLVg4NYAARLqWH2M5v0vK6rIBYLpRqvnkTJUQdh5AUR7nx/70sKQkmIMMdmhpwJ3zldan5JMHxL0LrvtRQLrqzdhpP5/d2Iibb64xlT1RkQ86cpn1CGbISHn7a0tNZJhtaX8CUmv8X8y9kkUr0w/nBvdXBj6sMC8wJ6sFzGj65b11bCTo9s5EH1yxSLwWKvywHY2okYwF4G2R90clkxBvVbJRIIEtVEjmDNaoFAbGc4HJMghZyewWDTdeArXalUhGw6LsPy52ZFcD+XwrYfSNHlmoSu3aDKvalPhiMY6lvc+Ku9wNxsFJwUV3CHFG/KA9By/+xwRfrlLKZo9UkPYtbvyFgyQQdESRj9//nec2g5hlEiyxqwBSzXQhct751zcXeOhksmZFB6skX8DRo7Tg+2e1YSntU9XjqUEdOomZbxK4O7FjbS7hlmZRpIo0DqJq5cbFVWkcDwTKlYC0eDF5SXph1l6iF0XrzLdK2CNG8jB9pSJsl/oY45cmWJtuYuezeASeBiEOExPXpWzpYrm3V0NQ7ih9kIzR7W+M+ZJK80eZDan7nm/WFm/TyrGRqrkaa13jEQLyizUFZEmfWteXvIVf5uRjwI9riftsfM8BTL60foHBLY3K5vGDhFQYnF1mSoJ1wHYnaIqKdTadOwtKQncaKVE2gyO7DlbPwGqMU4ORRVqoxHBAqkWAdqw4QFzsdj78m3psyVE88Jzv1y7nWPD2ixZwnMKph748H+7aT2EU7oZgAB4YvyvmvpJzmCAW9P7M3I2UcK42YKktPlCfrZFZS3J21eGofzoXV9b2kQGlXaqn+dBRLBV3Hpk+I+takCRwWzs3DcbYMKUuhucdZ/O8C1WBqJobBp67KDZc+zmo6vuFRDtjt1aAIf+U1HC1GkvUb6Z7vOgQ5l82uPDHx2NemDhvg==';const _IH='fc27891ad96264e49eaa0d60f7a2fe8cc13ee10053cbe08dd92be54c864d5ec3';let _src;

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
