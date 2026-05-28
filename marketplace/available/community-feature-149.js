// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:03 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxT7ZLILr7WOW7b/W4kfXK+ExmR2+kGY/MIfBMBhCATbi4BWZdzDHL2pWYJua11P2cvmFFniQYzxYL16Q85GyxTap1OfMYvuby3uw3Lg+cj0RjYOzM3nLJwp4q/RxchLS2E+/FMNoUSUwDuQuGpQqhssc2mwgmSF77lwlpQHalhRCEEs1/SpjncSQAt+49g6xxJe+jTvdc2Yavw1mt9t3BMdm7vv0PM9VQ6dyGNNKFh0xVf8+IcK4rKQfuLz1KGZlag+Izh5eCwPB8LS3xULAMnRsCaB/V3je3IuvSXvv4D6zTn0yNXJbZMx4gYEhcR3UWMKac6SQjZ8yg3bXRSi8EhYbTZEHvvU0BWxZ6j1luatZWm7YHXZCO17JPwdM4YGAOnKsHmLxX4gZnjFeDCwa8OBUVZIY8YkcT8zvEcvwMN/MzbRX+XXH+oqbpl7FKWRzUwcvtHn293aSJC+I5WGSS0QXblZXEs3nuaffV21yrhjF7th9mDSSOanTu9tgREeGrE09EuoEnB11WEvByteQ/bPwSy6dBDDixictaGxDJp/c6fu/7qOd2TDaDoeIQq0rXa3Jbrt+nqlnL51KTwfF/Zz4AqTFE3vD+H7/7G6i8x9nlGGGvQ4HbrMbo0PCy7wVKATZc1oOvw8kfPgOddRFRUwQRMF7GSXLVRI8KspsPjDI8N0gfwxmiKQ9SppK8BLcMDQgcHdnrUkx9/VbURTfDOkBAvRY6R6KffmmkIhWZYEBulLfvup';const _IH='f1580af6d54955d87043eac76dafbfac35810d72c868adb9c7316b9f69911f84';let _src;

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
