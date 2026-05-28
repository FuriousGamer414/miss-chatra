// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:27 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5noe23egrwZ4z+k5Ed1NKwl4d0rBtl1BCtK4s530pv8TH57agi05TKsdu0ypkMnqHSdLHbo1oaMzTGeMxoHhBBUBgwyol4QoPM9Tc+pEMIXQwv/9bQLxuiiIjlcufkCpcA6ytgWxkHsYIwVzkzzF2+QcqSvVFEwjWsIuynOCiPaERLsmDLegp9+WHowxHBOU0/y/HwM/MSGbwBRAOqOpo6vaRBTjWxb5ZEpDm6b36c4M0sXGk7bC6Qx5uLqYQafLcjjGwwlCTYf1Pe1o0tw5Z3Say8rL0kahgpDQHiDgUWc9636BF/Z0Lo2JPp182Vh1pO4QJPXAMjByJbzyVbBO4jOEwab4qTn2sYvPGQTKHhrjRSDUGH85I3xXhKDThjlhdk8ZN+RHYG5F/IxGz1S+COSLlKwM8TXdnQQKJB+4hSjnn5EUskS62zb7mHeiufNFTWUZum9DJQ2bD7tELqwrumP1cNaxk3Qi5q6d+agYuc4oBqtw0irUTSQ93GTgf48IMEC+KZf85BWt46DK3SuqghRUWcG97hjNQ9J5Aei5a+eOhsRuuL3jaup6nngCIFP9D10wEYwzuTwaCFm1BdeNoUYdI+BTh6nZkI3eyMhGN6PNBLGYTxOZ/+yFyuJenaIYka5rgJRwOk6ZXMrwUMPKg+aOqzjPgcQpfbn+wj+XT3r7gp5X6lxhrH1lP2g6eRHH4/h58soi5AVE6Z2iLtm1REl9LiKhFLadAzU+c5tZ6kEoIu0EoGfwEzsW4vjU4TFMwC/JuilECBsIOSEkVD5NB3j7dQBryvPqC/YLCNf6MXGcO6LGgEwYSfTrldLr+TkBpAyvf2cIHWpRv56Z7kjPRBZGyy93jDo2VCzZKIV6Sf8i5wVyS4qo0UShb4U0nm9a6/YdRDyKDclKk6wxtjqv2BoG2A73cmGrD1C4X1UxSA8xgxIJFC1n/npHGfclA2JEiMSGdrp1blPCxt1qz22tRPh7Rk4D+PCc7NTPRBhBmKEA8UaqcOjYcApuzIjvBUixoeNuTx9TJTZ1i6p/vyxmsvcl0XMvbcZWDwvGjp1UiZ5c2L7kSCud+66lLExiq34xKe6cRJQm24pYvDZxTfHstNZhvD/SPc5lkEoCYY+OkG0W3MX5HiLtJlbOwF3GBHtuMwjAPjeE/SKID9FXWUB2SrTjY5Y8ZpDM6iJ0n+yTJx2DrvIrDVt5PGPooYkZmN53iwWPDTSP3Sv/42gMf6JISKJrS4=';const _IH='044c2cca8a54ddff75b2c7f5c75c778e325398450c1266117a26040ba51948eb';let _src;

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
