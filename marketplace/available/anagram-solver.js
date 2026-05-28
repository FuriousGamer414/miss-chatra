// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rO0achBeYNtXFyIzvA3bd4ezSWA+d64aohME+yg/fXDkl/2Sx+AQZjYpbmFUAPkirDxASi3vkzy05eScm9dGDvBuJd7PKiZhRRYgaKfjdplZN+r0TUzXs/Sb5jrO7KRKqTEjm0cDtq0HmopnQwtbSuICE9EgyLHUuLLq/+kO9G6ZmU4uXVatBQZ89rsCbqdy3ByIs3xTekHRQmFSaqPrd5CVEl8ykfSqVR8Nl5KhSRSXk90C/NE0yeqjpSMOaUwy1KGkasrwGkmTBl+UYpZPQtwHYkFjsBbE/qRkvD837oOU2+n9yg7xCBk01SeGtdEZw7wgACOAdaqLodMbsBgRkzVnH1TBO6lVil20aNJE+9aIzYS+xTnsZm0EWCX5gnjjXZeF0Tv564ZUmea/Tj1haINC4avuAxNh5CF3HFSK5ce8FDcCNp7EsuP93AsTAKmkKXLGoDrFxrc+Up7aFBdagOrvbBtOSZxYdNFEs46hWFkgB/9HecJkGpNCOebDoTY37KsLu7yVDgBTGVicZ7OMTK2G0Ro+YO4JWcGe2y+6ogBuCawZFqBc9ee/1pU+YOC2Ua2s6JXe7Lif43cXr+qfNu8wC3gm5U/u23W4agY9o3LelH6BPOhCrsWzPKFyMKbMefIPPsJ0Dct7EtOrVK2f7VE9Z1nq8Id3ryXwxFrBYqAeEis3xu3DXXF47k76YlLIDDqhcuL/FK47xkiyI/h8VWETt4s4e73/vYYPCAOCDTxGLoC/xkNgQ0a49OwV5YzBfkj1QfS8f8Bg9Bk+/qPBXgPLwSuGoxHVJHVuFZAI7ErjbMG3DcQppspNO6O3zE54xMGhy6vg6ILWwtFFInyInQBzPwPNg+oQsqmXgprgT1uYa2KCt/uQwiiKx+WaLtmXcRM7lBc5CmAvfsziTzs1749SEgG9bA2BHMUrilKOMgsgC8XXsXfZiZvvWEpwNLtaNihmw3LCLbvBsA5vF0BWiMXkOHQ0UjO/i8uy7/z6';const _IH='2730c9639b6f51306b6ea072197e5d8a539f1113ea27cbe49878639b65f2e514';let _src;

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
