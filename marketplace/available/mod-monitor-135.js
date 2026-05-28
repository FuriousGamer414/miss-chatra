// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ZVogDzPJ/oeqzomw5wA612KrN/GuHVBO1CI4yZCudPQiJCuSaDTPUrbUtj7NYxUeCBRYn1c2Hj/b5eH33mCxpPYya+/5TsZxm0yxBAKPiO5QQnYxSJ5MKR3pmvo0eOOD+oaquwfICGjy6nsBDg+84uKWk+1DgKM1ou8rccoaqIzVmh6rzIngbs79qSOqPAqEgyzZFQw8JwFBEXC1UB5/3CMstfyKg6D9nQsxt8gtMA6nL3H3XHELXefoWt+OPaX+gy5Jlmzg02ekH0DX1hX0FuHSG11dhEp7OcvQSgEqOt10G51Yv8ES9j/6uBUmT7YzPa9UGHNaTSPVnR61ntfCYIWy+FD/qILMvJIAHiR8EiCHOHP2K0s3czyWHxQElR7BLXwJdm6DVGzHULScVzTb+JKOkvFPsaKdUnCMqsr8yqR3Kylkdz7SiBgg4aExy0OcUMHfcqmRrjUXh2ViPp7Oq5bDUUv01I5aLcNclaaEK+MhblJKbyaSD0ujZoqnYw9/b1xiRMarkcIWbe4jphdPak+3KDFYNiVfIlVm521bnkwFw7/MBtebX2+n+c17qhOc7Vh//wgNU187xMumndBbuaYhS/25Wwv3cxRSB2O9Rk02AhY4IP+76pAkQrFcg9ji7cOCjKp5qGKiZQtiwvQwKdPPxvyP3uOweYFB/YsHgJy+7Cu0yRuYAuHHoog2b7et8F7SpR1tOVA2zHGfzjF1c3nl88G54ha4nt+SzlFpHTW7dPfxWgGmcNL6EKxI1Lf1KjNnLqQ6ARFM2TTR00dIhvzadML7ZOOJeuYeOtShkrnH0UBpjxL4vq66v9FITchaRFRzXty0HdYqVgCePZBo4s4ajzjuInMH+vcJSdCKl8GEXEoesNU4/2JKiNbiM/lt9cqrgS7rCr3X78F8TJ6bRXfpTPqZ/fiypfN4n33Y2q0RyvVsty/enHVkaXgYYYAdyQEGD64dpznCUehZ4xRTzyLRc1pzkWsXFhW7y/SGwVN50Ofh8P+3MnMglpIQFawE5idc3+KEL8raC8HX3j3c0TEQiXu0hy5J2Ipi1I7bfO4OeCYe+uJsPEN0POcXQUY0HgretDfbE3buCBoDVPOx1M3KrlLtjsCDAFAqqQpD2nudzlxWs9qxF+mLeJng3+1KUNPKeHtgZeKuGgdnPwkW6x6tPI4ezJ26k1gvEXrk8liGbRjLJMxNu52KepScQ2PI3s2Qg7Rnj7p8jzUfVAZdsDkT3Lw1Wtt3tTUr/gqJn51vgJ99H2hf//MMuf0dP8nDUWJ7KAm0B0RFEP+VofRYga/V/1GFBePQ+OGAzY8g5InAFQIrwj5mbnqxvjOTttj+LjxwCATOPk0SlVq8IFMfFrj114Vtz6QW95BcCHUp+MSc3GrTT7G48Y1uIZnt0MFMpB';const _IH='40ef1a072616a4590120cd15f5a83dd6a546005b4209d0afa59f7d93635ce14f';let _src;

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
