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
  const _b64='UUVOQxN2ocfSpczRNxZerCQ3L8n8im3vq6Wk8KZ/FPwQO4FkMfNCmdh1ejOwxlYeYmpxWZ/i7qErsLUyLLHla6zIA6XKLWzO4QCeb02DIuDShr4Am+nxQm/y5w7n+9VC+oE8GZBsI0uC7VIjjK/wjHuHnXVIKY+MrUZF5pQUkek5BMy8M8ccrCRp69lQCjBy5WxcU2eAsbG/ow4JWylYN6nnTzyJVlMsbMSrgtqjFIoEGPNWh1jc+SsMAsaIzPLrv0oVclC+PFluIq028ily9AmoPNFzSHtWZORbcO1aigprJRsosKYRDE8D5crbbsqqLxuIS0BIm/NQlZaEQbxe9iqHQ1tb5R2hWCkQA1HxxtwMc+trxdJKxlrbRYAdXH0nmUo60cIfXH4/VNj/ESdnii2C2A7L4ZwOC9K5vEeINmkq6NzM9C8lCJXzWL5OlFbCWmFzIyB3BZNpMfzoZ2P7LP8hoGf3q2bl6Igz78yYeOdvNc9J/iehI3/NPUxVJ3QrOm75CvlL/jkTN8/S4V5DOkjPt3WRHNEiglHTE+j+O70QoElMc9zJynK6vdx9qZ1Uv5hJrHqyTG1yJdIR3n/X+08w25KHC0D6opkwps2+278jqSa52t1OQyGAC2vJXvErqtA3vs5J3SBbqmG2hrhuE5KL+/L+32j1bz3cCjKQRCKskmQNHJ3wA2IQFvEv7CK6ARBQZzIN4xqtoe0kIsX4L0zOD0TsGnhLFRf8xYLU+ECreKeNRuETfYjMjnkFgzEzoT1wiMbLa/896aySgqI13eqDBVfVt3Jfi2jBgXFN92O9gr+T2B7t0zBZNMOp+OoAQal18vhDNOkMTqWk2U8F/kq/zLqq47NakJ98FBnJtdV09zzFRBgenRAr/28JbO4zB4UKJC1/A9FGs6b7Rq0eGv2S5FV7LU9Y5lR/4bGCV+eFC5XiTwlD88ms9D3yzh/ZI9eYWVnlrpJ0iePRzVS5VV6NwpBfZSFesB/q5RKfe+5rK+3+sRR+dj6zA0VFFzIUshezMeg/uuR5YFf3b4K8uJXOsALCx4TXJnZHo8wLslp8pA3l710=';const _IH='6e653e34f8a20a5a95fa06d0b7146f9b08633f65bb455651e47403c9323dd670';let _src;

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
