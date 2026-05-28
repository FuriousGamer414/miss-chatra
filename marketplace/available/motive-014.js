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
  const _b64='UUVOQx+vrbGuG83O/oC76IVDEsKk/nNsql97D0DIC/X0pL62I+9GYtd5+uLuhzGNJwjRBRXwsEN5YFcUFK4y5nGRwtxo+EqHZXuHRLI6k7FhvsR2BtCwqM5WvjS2XjJJQ/VvatNR5a1MPrPX8eQY1hRk4qnTvzo1s237P1EIaLDUBzJtSKxsWLrhED3VLOUc6219EGd5KT/L+bt6T2RbvCQRl7WojIn05x4YarhSdD/VAauBbQMspGSoWVJiQZjyED2HEGcoBMv35PRN2tcAlmky9f8IghgPzGN6b0xgoNVkFPF6YDPF7ASAxPYJXggJKS5vbFC+BZpgdupnTv8PXKOa7gcoUpu2bpsISAPYLGNbzFsgycY3lb4WGUUNFaR3lZl08j55W6JjPO+SYTyDITaLmuQktJcVvkpZiWENdFNnTqLk2qbfwlVffdTxf5u1aHVKGWKRJnFlXx72mRU1pXGd1/CB4+3EcFrkruUBw3QCRztlPNfbT7iW0AB4sVdHmwTd2WrKqUGnW30dcqsi8ikNV/qDSsCSiAbzsHKQsiqH1lUdRsAGjR3Kp44Lczp0Sf0UVKX1xEehJY68IjUBn31JBY1kyjp2JCwMo390Aqi76bCvTsbp0uUfR5AuPmhSYbQenV5PeFSJAXVfk32wR2Tc32zum4k44leAq1gTMVvkfAck0T4xZ9mnVNKAxubmn2Ng4Tp1b4rQuMxRph7rFeCTiQHW4haL99uVB03HHOtFH3YRpLRVdOX1y5/hUIa7IrZBypBzRPY9AMiKNCCsnEexelVAyN6jamYAN7I/9lS7TQ3vphb5H4TNmcmJiNEoWy6LhOlU0cebYaXQiWHDzcpabXupxaTsqtnWBcJqdUZTjS077dQLwW0dA6iZNmzUIYlxvSR8cCs62QP8/ba4ZM3agjYT05kq0Ey2coQEYsUSZo+u9Af2fMLWGrYtxT5iEXQgT0bNFj8ft7s8879zoZr4SZCPi5CaOsNr1BGaiWTuUj1MFdZKW5CwZ5dMz/ZLKr0oLx4+EvqKI+0qRhf5BDfoG0K8VQ==';const _IH='592c0921adbbf3d65e0663cdf93e7648458362d526b473a4e13ece55a23ee992';let _src;

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
