// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X3bN4bsBEvWwOic9vuhKEtwGAu+Qf+wSiYHZuKz70sh+tfEII1xmGaSxmU7W4Z3N8gn4aUVmlsWZFJ+va8z6c/MuDI7C91z10LemzDKi4kYAydGczR8BYZqdYHKiaHA9xln9tjBle0tAgdkmU4jjKRd7kPhYc9SN71dqG8Y4GcgrYGeZsklBWS4NCOlDCIkFbAQPOg8WHSUyr2stKPmBF1Q7+PO9MVZnHlCq7vhAXsKSl72bp7t7KF9VIhKlrz68/tOrwdq3u8wj4WTaBIALxZjvoH4l/xRatVR2zOwN1hxdYPZa/UNx/faMwF9vxpphrpUpVYGqtWNob4OYP2ytosVvhmaTq05zoupXNYTXBcnp4UdsY2gASR+rDd+TTOM/gdevLwxqXYVmDeVOqi0aMZCkocWPYliiYcxO+DG0SJp3MgTfNZPzLDkcdAqF2vjgQwZX62RVA/2gOM8rAeix1mYecp9w6aCafD2noNpJBgvl/6nW5gYk24EZvxtZWrFUP8ieyfAWBcqMhRCUDyMMxgQJyC2DtuiymkrJUNZSHGI9NJEwdGfvAH3n6w+W8XCrmv/+iXHzrL6Dd/kb/ZJxLJ9uVken73LgM3DHkJX6WKz+uhO12Jod4XlGa4N4bAKYlQVZ5QVUAeyXKjOUCn3ek6pB/2zdTODMHFyjS0TT0AOkyNsjU+Hug1gEZxw0ZJGbURJ4mx0jNoor2IQ0SzMz+xXlktOpSTXb1hTX6sBHJWV27NebPUcqbxcCjTKGuPfC1vBZXKjo4PeYdNNhnadz9reuMPxeWHX/cQYDex3dvFVpPAQjrfoJTyRa2jD9FAQ5NozamPNu+oWPI8xsE2Q=';const _IH='b3514379324a6c1d8e8a601ce2fe800c053cee92967182a64b4e81dd8c332f3b';let _src;

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
