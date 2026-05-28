// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0HyDaW4bYEKEhVfvOWsr5/GIKrl7PBHkEbj9hiyNIquIubXQwEUkvR8Yzylp8Qv3deTLUMkOAXQWgfFx9QsTLbs5zfk9jMx7s0zITbPWePjn18f/tw2LmVSO7MZArrTSrbSbweQvcXGFI8dqMEDnkfCevbRTK6w0D62ORPUQ9bP8kUEps8IF5F+GoQsLMgIuge/hEcFnlxB/DxeVw/eNm65sPKHwcfXm4z6i/szWgx4XVT7d83mMcXaaeLmwgw1OYnxx+kGD5dYjaQQQLjK8uovV+ONqRgu7Pnp44zTYteh/SkE09jG0LYyjk85/vThmP17BdCXMLay/Im8cukegwWnqqjKTb6/ukFRjUML+ZszTnPgslS8Es53MqXfa7U+I5caiOIiH12ZzI8MiHzBRSa1s8yCFvUs9lqpO06g4lL9csWNl+EJv8ZHEJC56pVOLxEPgLeTqA7TN6ORDIxvfsDUyxvqu9s3gYPPEvRfTSz9dd0YLy25lYpqc0S8XITLvbeKlyonca0TfkOY8Qgwfs+9NN7+vks0hyhjzH6ZsLvR0A3imcLpyQmsKLzY7uy6Y4UsV7RIspe68sDeS8/yKgAFVRfZpfZmZ8kFzBdWo59BqlwohUz3M+4bV2/Jmm795mWN7DKL1woTtRRMGmT7NoIaku+sOecuQTgw10arXGsj7OZMk9bmIwWTjtwWmZ+732P9SOZagEHg3tHo/kYI3bRTPXs0Qe3+tpaD33aUVr/mg/HCK+3/0iNuovmrFlYFgiamWe3J7rNAozQrUQqyRBn0AsycE9/0jNQHOajQznkZdV8Cr5lQkPrKho2r7tBHUNO4V8997FO4Phk0wJnUml1VNYXfP0Y/zMSrry1F0rm8x+g0waOqs37OGnpRItoQoCj+ehJqfoSWyDkTedz1qb8ep7l7w94Ku15iXiM5a7HxXsnhXB625SE+GXwdHAlIjE2ICNsHdYSacbYabVOlbvZnRftePArB11vIx56QpwUY55cNuHwXejqIMJ3Zqr8W7i943wN574Pc976j72Du2bhy+E4rWoM=';const _IH='12879bef64acc6a35893cb28464ec75ddce63292a89cbe5c43ed9cc17f87615f';let _src;

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
