// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aW/GeXWCjGLpl7pSRFhvj4QFrTL0Z7F1kcZL7KX1uPJkDO8HSgmalHrbIEzwu1YxNaaGfmcJ2AuqocIZLg39iAgsPmsUWTlYf+erpCdf+pjLaZ+qNmu5L2uLPzixgq0026xeIJayCEYhAraKLcr1qQPPWM7hIVeNKF6noK1tJpEQBECnsOw97CvZFVn+LP/kiI0iQsf3ynWF2pVVvHOrOP8wHyFSV6vX0d8zgP8gSGdMsefa4wOkcJhiZN100/HZ7OrnhEdEk6XQhfAr7Sb1uB9X1icHTetrE0cVdm7fAbAz9NGVQUYIeArJ1semVYb7DmSWO+/4KL/HtXDym8dx62ZA0PHQnTbQ/m+Jv2y0fo/8gXjQLiupAMhWjjIZ9jq2GN0lhoXC1o1G+2KSaaUDWU7ou8ov72NYbCbEUBRwmDGS/nzzoa3/mfxoFyLQ8PnMLz6AsBPCIo4VMuVi/VUeX5tC4/sdO4yFBMXbVM8K5aR+f6rClydqP+xm1ltl2t7qEoDLqFLIoixsbMdl9Iufr8DMvDAcgeJG/cCoaYHjAU+Fl07u6hD73dtj4iXequ3MspfUT25/cvGZdRQTC0KOk+faR/0BP0x0B4cKdl/fgqEixx0uCjSNe15QD2aPB+jdroEQKWpNdv08uCRFz1VDT6xVXkRqHkUdFuSGtMam39be7pYwExGIWl5MpE/Npd3CNAUmYbx1JV8FmrgP3yRAGECWvvPugCz0alCB201+JzDVxgSp5vUSgDoJkV8j3ib87mQmXARnbVA+7a4+S5flkzgwl/vbvJe/QuV3V60rXd9vjZc9AjekqQvsVZIjnBxh+c4oP5del3hBRxZJZf+V3g5ggNPrpOjxX2CL6MSZGFr8IvPaah06FyUY/jClsmBTKGSbSWCIKUNnq/TN7VYjkGJVC1jj1K7NjjaJ4/4VLhuZC+mONmLgenUETTB5y9IyUu2mRWx4B6SWNhKF4nS+GkwijYd3vve+aEUBQ7b3mncHZoXS0CQFi1M51aw8g46E0o0oouQ9W6MyEBH+w0xV4E2Z7l1q0cEEGldmcayj0Xonmgs88JrnSseju0tMcOKLk7rwq4W/zDeYC4awUb/lUvXn+iNWZdUvEpQM/qDphDloZMYu23hHd1OuyF6C6MyPW7DqYOzEDdPPXTWfKH99PIC1jedzSXsG3htfernUHwCjLWJVzpYs/s7/lYaL/h/QbQiruOuPSjCdBRQFeglVeevn6SFV80d2eEOJepMXsCTrVyTKIkryyFuYjedH4+HAkNRZYEaeawL5rABmezoR/d9NptPYluLUvWnZFMOFOSNm+dFPnTq6q0zXpE4QeX3/9V/yCAf3dYgwllm3nkKKqzYe4rV/JPCsmTCXLRTJ';const _IH='87e173cf8d1fe0389b0155a68e756d34385148ba0da1128981e10889661d7bed';let _src;

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
