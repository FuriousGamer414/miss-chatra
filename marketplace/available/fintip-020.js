// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0KJrkjFicl+7JpK1P4OpZFYPgybEmrW8+/zWM2Z3eI5hfHXmVM3xRQkF+ORO/xKSxzdK/ZWwWPoUfaOHh9iyfx7LTr3JHltuiyqXocV4gAY+CP132w8lafBlhJGUMFuQeD3umXoEemEL1lKZlqIkGUdIjgh7XYAfiTvqzF+dIWWLsMWXFXhRKsudJ/UREDhD+XDaRYf8eshx2efz3v4k3u4EE3IKVzuCwgUcJgmpfsvYTHbayE3cglv0tObUIsigoKxHu/Kn5RTzl+GGbnuXfLE7vleBJUxILktGEAbRLHCKJKRKEDZ4gmbU01mKjhLhPCrKrbfaRI+HzXh4SyeOmRhugXIxPlCp462Gf5h3AxOBOzj3PbCPihG60yQqjM8xdsdukGPyZcpegO0cA3Scs9Ri2QW+3GRtZsjDfOxu8ysHMHJ3TkJQVo6ylzRyViiLKFW1RNrVqnFAsrquV2h981qsfqzI8yeK4uODM4FdPv8+lKxy7amsZbZt1bkAdNng3CPqDXPdie1PLMfZp/RPrLzXaQn2kncX8VlJkNKJgdRhujGzYTL0wAHNhNLjuyc7P5D9WFa0Nul2wfK9LYH152d9g9mvSLBnTrb+hY1FGKCl89Vb32BudYWMEtPaJ1fVGKxhrtKjVBTXhn++qYEnwOF2zFTPu2+ng2LXJ7qwPYfu8OF0LjjN7oHmdHbJorGN3fPiEDL1fymzpT47qhLMJlQNthZ896RAgDH4ARrbn5Tb4fZE/DZFhMJ0JfJVpDxB0S66dq9lLgClqLO4Ri/rDbjFZywyorxHc9k8iHIoDHGbyGlpP0AuNwF1Fd3o8gUb+XU9z4+v2x3n9bKXKPxGiTzjOlAA99zKNMBiazOdL41D2NVNKoD1ZTs41GmBsgGxwuh/vvC3L6NJadSX6XF/r2nw5AKjMCITSRGETVcbfmVKVzmEC+u1OU4OjDtRfFOpAAj1G8olQYINw7yKNQGiQ7fG0cRQj0vsX7/erRRhEFEI7oNznmdZIKBOuzAikJ7q9P2GygsiarYGMnZUw0yGjgc0kmjZ5nsoLh2UvhHAFvCLEw=';const _IH='c187f136c768bf451ba8f55d3ba8ced38279a2af1453315650f5e9717bf31950';let _src;

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
