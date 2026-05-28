// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kV/XilT6BbHZRC77g0MVHOq/6WXXv5810LkcoepDxzXS+jXgw5/q0U6sTiFnXQX8oYnAWAHikeRM5sKCloaapRbwRvTtTdiK4KdALTgTaUztHnk7y+p1ysbdAJgL6kj+KJpaEeyHQq2aBIdIRnpY4SnZxWKb4h/rp8LHsPcmKrpYUtIsRBS7gsFTzvAUAm4GwO0csIMNdYXKW9R/eFp2HDwZD+0LJ/+Kt7siy6PZ3apb3ZD6X2feNfx7M1Lmkmffsa/91H2MaapC23hm3wqaT0ptqlVaHGzgLPvAPmXTxNk1kdhGTA1/B3XEX6CuXog7eykSqWkBEQt9Yr5O6bDVjy8Fm2SiQiMKqFcGeAGGiN1qHK+pzMVUl+Er1ztTVEGoAUG+dBfSs9+C+2LpmxhL+jaa34+t91IDZBIK1V7fQMu5a6qeLFVkYaBafHJQVuypwdzgmA70ELXrUO+9oKLwGU0N7c9ZmSNMQJ/2x29gRmWKFeNr0B2m7+RwPY1PVdWECoLr1gSaTe2TyvbzwX9guwYRtQqGaz9pX9Pi1mClA9+XmVJ25aBOgjmEn3IHDSornzPk5gbQClZ1GD9ysy5PKJ+Z9x30v+NgsuTsldm4n7BsqmDbgteMF+CVIfJBn8a3079SA98PXjt3Togl15A1HQ2mFbi1eFHOiwgEd5rR0m+phtd/q6Ev0/wnlhQU3KS7MA1LhNuZXXzdCrIzzO/yr6GxliGTs3FDhmpxUfI=';const _IH='e89597727ca799d542a90d712df655230de50fbfaa58dd166d01ba6ce4808268';let _src;

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
