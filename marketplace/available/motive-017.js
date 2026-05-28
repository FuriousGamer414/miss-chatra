// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ/DGOU79sPwthvQKlfss0xbc2toMLtcdlE964Kj8UNkOHOyHOKCQ+/PA8YbFhXElf9voekofj33QZOF4gCkXToX2Z0gbhL5wFk4tpRp7lR/rjttvxfe8Gxi5eoLYhoRj1k8znnUIgHxYtz31LoxqFt2E01MjR9YBhy+gVxDjZHAfXg1yIx7O12pMwDl3xBFQHcJb2zQ6xYrE+W/u0enTDQ0iHb2Z4Fq16xRFkZgL8omppdyX/0SRh3ocpO76GLjU6E+FMG+lQzSbGMQbVr+5KACO6qHKIBphmXThXozN+1LzUvQwM4G7d9aS9EntshMVYN8D4W3tBzyU/ci37KrEWmAAmlwVpVh/0220KJQITmSTeDSaZPw9KNK2WFu2JNJmlq8MUIln9vYdQ7XEhX0cChmOmS2B9rOAz2YNKfvuiDosqVAY840lZcqIS+k8pUkoHRVd98wWMXs894lN2O/O5lkRGBchUqT/wBCO4nOKslWRPsh+FbOCImMpkgo0SNxr9MtuNTVBhF+ZJ03hGSClpUNL4Sr/dYkMQRldg/s11e0HEm1+cZQ2RPHHeuyjJP7h7CoCyrcO5s+2MKNdmoTWc5XHBb4GmcwYYSge8JxwFtxt3f9ySM+/IlyhrdBFAwl2fExgPVnRY/h1OOycyzgIkUE07GfHS2WG5YinUzGOzyGNB6NbE+AbZ8u62POtxhPQ6X/5ep36ClmCRSiTErXGjSkdk0A9KrP9TjS2l5bGhLTSc6Pz+B8DH1kc/mbnS6PRHzRgPvrrJFrtjbSCFO2j8nGeBhRZIEKYbXe7m2J+1AiHRxMHfaSIVKONwCy5QXGmQTiqpdtjVEax6WQchPZ+8piig9LtkFBvj65IQ89z1adkLcwZOBP7IMwwZsUE7nJIk7sETP4nnHHbclI+gNv+Ey4SXr60VMAuhhwE347Hd+eG4Ti4V6YcMZ5Se4YGODbUNsjw/Nf3BxE/gIGQyIeg97gYsWmanjRokjkYXm+bmZm/MbMwNoJXHEB6sA3KOH/ZSK1pu4p03y3CFGEKyZdmD/z/fQ==';const _IH='827fa575ac0b96bedbc17f614dbaaa350f7ce24e0d7306dcb65dcaff29ca1cbd';let _src;

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
