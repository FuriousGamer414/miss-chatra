// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ21PpNJJBvkKQ9BqkFTx3Uc7OB0Zf3tjCn0O5u3BGCg23ymlWyt0bvjelwc9l0PQNQUpnPRuwFz+VW2I3+PsJU8dkhTXNsqYOqh9qcD9yAB2SHF9pYSRufT7BKmy61dszUHzRJiLDWL9+nrjRJ9t6yKq/AoD8VLPAMZ/1KnHMV7V/+oSDip+qXZCx6WTLlDQRlsxTGEKQ9ejxkS5ngmPgtydzg80cK56AKmJ/QjUTa1qnTakoOAHMG9FILVq1c9J3EQ8ubwlEulS34PUqYFRT0PUm9J7DeoJgilloIu3Fp9bMgIyP3rHrPQ0WrdtzAW/t7oYlakQkch6A1QGWxsu59CxQXhA+FlIBMz+z7OajxwaQhJCiuyFkTPhCf5MF+Awn1eDnldDhSxsguO8yqj6ei+UP5K9n6aKVPWASN47kv59JSBFT0lJai1vNJvY7utgaFEEJMxdu3BVV1/7xK3Pl7wunYWWPBEHjYFrNHtqklkGzDjiRwVESh9ERjQLH75P/FgKDPXKgQWwcavAZMJw+SqeuT5Jth1Yn5AWq8wjyVAUUrvA4WHeuV+PzE1c6QYdwLI+AJTYbjXmuV503saRCBGyIP33UyE+XN1YAj6zUAeNDmPr2rMNGZobRCzWLZRueitIgguopxq/GgmaJc7BWqfmeSHcOzaIl7zokIoPl3OWveqETUQba+H+05HsIl3Xj+LykzjNQSkVSZYZSKI3xRvK1knHkScpwfUe4nqIpVQVIkHXY1ZQvuc2AdVhnT+GO+rbd9n6SsRdFkZGTh+3D4TGPWvmCvABECxN9SXcA4/qA71UcDnuwndmnC1ixvl6NkWbKCCw8ItTRaxImZk8Yd/j05JOFwecBus7KF7lfGOgXJ6OY4/MERvRL8x9QEXnzx+IL6RgCUwhHUtFIpHerKHz4KJ0BDzLl6bD9kVt/1yEc8112n5qY0/qETAGsSHrEWrgrkX+ltxzSbrPfcZhNPGR1wUL4ViaL6KyPCtFmPbtP6yG7IeR+SUdvhsF9OIhQoQmsy3uAJmtg9DEjdm6XhcC5v8jExWzHNhZxOxtSfsl7BRMfi45DD4iuJhR4XId27OLzBSMqXHcWyByVSyIosV4pWQhP25YhTNdlJbWy81vjZJ2HDlNazh0+TLXS+aH4o4rbQ0NUiEe4n/ScA8P/aYm4IBTqljboGLxtmGakRiM4S+8W6hC4CPC3cD50dEkiXzjSaFXtWhNsw==';const _IH='cf787d776dc1a0c2ad5ffcc75de80f6f2849903e9eab0bbfcec0c6282758837d';let _src;

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
