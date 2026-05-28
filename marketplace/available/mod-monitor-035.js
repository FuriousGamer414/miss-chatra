// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1y0/EQukh6HGL8jg4Szr6iBSKYM9CtyBmTsK4Wz2+x2GwO3aK897fKrwxq5oBHIlyD2s3XUoeytS8oNEwkHknyZknoBdvgVnYTdgbDMja01H9Uy9NXmcpOB/sJAao8tAya/LnyFkFdKkcXdVnpGh4wV3D7zNhwhnksuSPX0YLK4dA9VeC5+Pzis91w5P/H8hX+9fZJNoAqqURNyHTgAMkt89Qo5CC/39DItD7r2zaRm+0DzIC9/bxGlJ33KtW+0PYAUuSkmV+Jl92zBqsHLkzgPrUFL9OAxnc+Ke2xvpv+sqO/w+aBHKRR1UsnlZLna42JKSRtw9qYSrZKBodz1E10xYJCYRBiRSHxtcrjhL4FvKoopON9RVHOB2CHdBwB/ZYgtaE4uAPJywKyyc9LQfcjJ1F8s0/77rmZZX1G5ANDUgFwa0OxWsDTgZ8zVJDnD3CHaRo9v/dgLaCscA+xGRCxXDnso9EBeR2EXILZpisBbRmKPjsVMl5JIBZphnl4nY9OofauVPOQhyHzYw/ORnDQ2k9W7IURAxnRqBv9aDYMQOmt99bV3ryVFncvQmlecMiwOBGOj90YszWBDUF3BZsb9bbfH9YlpWGj1NdNLvqycfYe7BM3+mOHwBJPMTxtFSwk54J/7ofalMCwaupn4u5XXNnOlD6vLUAbajQY2rEQlQETN7ahEtw4zY1MJWoaG4IqSW3X5BCgLYEHsJCiwojKOO8M55ZYq7jxxDladsoHu9GrBtRgpP6+N1XzqQd7CAdCeLKY9WH6xlSzcHB+JO6Ss7iH7+OKn8pb8tm82lbmEmnE88q05MqQjP2/1Iz4OoUHonef2oot8QoxQbb0Kjxl6ryE1qdlmFZAVHapz4DwAToQbkvumovDOhb1OBfyow0Ng+k0Z9L6BJKhf9gNoe3i5x0dsHO0RTY5xfSKTD+GFlsZjeXxKUdl+32UX1s1dcJW80VhAm1vzscP7L5tywCxujt96D1bJ3vkZa5DPDv49Ql/Pzi0aPenPO7HDTrpQzUw7973X8BdhPwBTks0gFbWv+cJJxbESuiitRoAGOp0nHTQHllN48ColUGPHb3VSDpDrgd6Sdt8pCSv80esbnfs7m9u+WbjFElV91L5VJG7NcBK/A0lkYQ9x2kfczTqKQyAj94y2T3+gAwHyw6rr8W+Cmo3iPBkVdZisew97knHUZyNEbtY/IZ5IhjLJyBmmV1x2A7JPwyp3AKeVx2RMe0obFO3wZ1Jn8SAz4Q1v7YR5vuNTQibsQanx8HjTEKOtT3Ff6AdatcnOzHzfcUshYsso1rYDO1xV8F5o9HoL3unGwhZvT4cyYIl42vefPW9rd5Fg2HOH2C+NBThijAz7WQzdAL/U87jRWZSpqoBYo1BpEBIKS/l8zQE+mz0tng==';const _IH='620d9a782e9ec26b348d2e1cf8653946f76d85413d94916c30be43c703169dbb';let _src;

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
