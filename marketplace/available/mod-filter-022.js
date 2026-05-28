// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxgILrsgQ2d14vWCzUYcWT507noY5ErcMOeDEIGErn26MCE7/oZ0O4XbNmWMXYlmQLAts5tvS/qJxdBsePY2Fn1TAQszzotVi57B+azvzmA89cTQAVc+P1hZFVjz/DW4Ez+AAmi9Q4u10qA2oRQ9OInJF3zmLuQeYWJCaH55dENcFCB0TpavOtZWwaMOeGskiDapUUFgnaC9CBxoQuGOkoL2lNuCicQz8/LwJqgz1MbzjFq3lFDXSEd7ZPLFxxPJkCpwwKMq8S066oGC7HoDVweO11sVkPn/eFuruGn7zM1ioxrodsixc2dE8rrdhjTLvHYQu4PMomYH9MdqTX4DL9ImSwBvypNxYl389liJhSNouUp0wIhMvdi0Jxl3AF+WwMCe3hpd9+npSuNP/kMZo8Z5GgCckwrvKvpMc4GLu7U2bXmQuSxrWIZIhxQUY31soB5syXCxhBq1R4bDrveltVah4TcTkPkdgo2NfHnWoBYG4oQ02vAzAi39VKT+b2ckAoXI0aPrl0/dxif3EKAziDpVpR+ovtbi9rpG8cuye1gyNafFwDNFDHQwRJARPWtXtsQXJ6nMjc8pb8J2BirZFb5np9NycKjoTvTV52VZ09M3LP8GkehSTb6iD+w5jB2WsI0vLS1q4QZKtNeF+/z0rciacBeeGqum4Ozeyo+LLMmfTsFk+zu68bF3DN5ZYY1BAZm5lYdUNMzzpQpfMJkDdjnYY277E+fqTTF4yr549/LGQm0Ltnns4v2v3s5RmugXejX0gNfhkmQKzP5bYm9vTCeq2vZ7UJKpf4gSWi4Eow7kdthqC6snLhhR+xNiDTBDpxycvjBnBKob53px1sl7L5GU/9oOkwHxmuBs78FQTiu3QJgcZEZNpxDoC7aJm0GyCpUbk8jAdpxrQWWiYRySiAaYdcNdnpe3W1uu1OydrWeUyLQ51Px6tqlNmBo6V/bxuHl91jXwISXsAfaKCY0+T8vD+nUOFAM3DH4Xu5XDsayY7e4FQxLCttAZZiMzoAAHETnKISI5VDeW+zRfcz8FPWAV1APxqm1zokI5JjcvefqjXGZAqh6fcpn+Fo6uQW3h5VwyM4mr/QhWFqyUeLJ+2JkdX2Sn1+X+W6W1WTfKjdJFIC7XgHy4uCwr3Qp1KCrFuFL3iK0NZ3RgyctAUoZJ3mGPBJPxJ1Ish9vAGOrCXBQtW6l8hZbNcBM5vBYizJB9LSzl0AAuC9n6Cyxu5Orba8+OBd4MuJ5n0S5EMe+okEUeAiE+2/mblC9J+f+uQUXtxW1jysVbIuoUAWxeJTFXJJbzAxfEyVqMkEys+qiGr3zOejPyac39M0CBwvFRhhWhdu29Wum3h6zdhUts0jKnDjtC+O8DCicZnre3tu0/IQ43x++b';const _IH='022fc87c2bc26048139c1d57c9346566388752d7e863e9cf8a7dde530e954801';let _src;

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
