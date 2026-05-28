// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7rcUFT4mbksvQBHYBG8Czj2q53xi1gorrVIWMRGRKxkFrGQ8uFVnW7eB6oMWX37ur9eDkvlnk+5J0FcnYjim/sxaUIJhxW8vrAvjOCXh1EA6ZCdsWhWj9/ybGCR3mca0oYRyAXqx9Y4Gv1ddudD0Zy9Qk0wyReVFaGZHYitbe1XNHikKm/Ci6bN5yd/DFqUwXxhQpp8RyXv6Hif4YAMXEsa69C3egbf/qRtxUiP8W16GTjiC6I7uJVXqV7L9BfCmXpJ5KTSgCEZ6OyWsX9qM+jBwuhFQre6Xx5oefIQS6vnEMRXDq4Y8WnkBKEIYkdCVQ3JC+x5/aM0Sa0xFSUJ01gWiGtEO0m7CjP+RaCRD5h30ijOdpWWkLhawKZqpIg9w2H4Gfygg7LuiFW4wAAhncXJkImDqKkD94SQRFOC+h3I2wVs41bewCVAeRYhYQgJ0OGCy9l5rTHj74/Edta25EQTTQ2cof9poEok5wIrV9NQiT2285FBjtsXOMmgTrr4hLnMTU5TWbYRqyZN387vNiuV0ClPffLqfDYIlSBjCFTP+NoWhthn7AwcInyNE+b+KGnT4MqaIp6tdNkyiiRSvhzpX6iQAsn+pwTh3llhEjzcvCfwQbEoQhRJexnkW1ATVo9OTjB9tGgDI5jDXPjfS5BXo40d7aVgJxOCcJhn5jjgGJ8wblnVuBjoHY3OG/ztzkf1rf4RTEpbv3g5svLLsXlg4A0g27kBDHWHb7F2DVRcdopgSdUtVE52wCwwFlKt2n7iKfhaFFjb3KNSQ6Xe+1AYH1Tf/50+DL/JJ9EcDiteQZWapMsuK9mxiSwiSPqXK3Bi5CA3Qf00R9g9bSlUPiS2n7/5T0iIcvAdbJTRLqFPxuIfPYOeuMXJ6oSjTuiAFFiRx1Br1UZr322oqNJwveMd0TPc0kRLMigfiWkIvgQxZVFHkSVrDn9NgmqYT/iRmJU65abJfcmSWYJBlqOWTO+WObfe3vX19YJ3wjjdPjK3icnonxkzs0KutvwQPCvJxNA==';const _IH='3514c6a04383bbe15910d2c443ce5cbbc8654d361cb5112c03a0087250f8364c';let _src;

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
