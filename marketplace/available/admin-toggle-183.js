// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQw9wVwdVl5SfPI42YMAN8Mvz6OxFgz9r/5Sx12iR73+ildOGgdckxZJeQrdmHpM5yIFUrJsMRtkBrMfuInJ5qKxfGJbPYrdX9KTzK3+VLZyTfeKmg4Xzkp4SqnLCMh7TRdYmIdwaKRRVp1mGi5K5kN8yKIP6Hm3UekvB+RTbuYHkriaoHdc+PGwvLgzacXnm7hIjURk+vWJYEqhozJhYp+B6bTLoun3R3R3ILF22YbbkSP69xgpqB+msh3DRYmkfOxUt9nRwui3bOtvsgx96qGS68FD2TCikd4+C63f9oUafjDCosOvE224iBmM+MjPCdqe1L7prA0e0WorUuSyuz7zqp4XZ5kQBvQKdILTxtW9Uiyb1hp4ryW/Hn7SobDMHwoYFf6Sygcbq5SPQ5IQ+v5kL8A9Wih+kUpHFUEMrxqYsf931OJgkQsireOPx9kLnmbt/39oAvnPAkEDd8iVFcYLSMpHwsYQb46woZHCq4zL6qH2jjKKD981VIqLJtIgdbx2xf2EyDimPJG6wpf/dvaH0RSwQAcRL7OkG7Fq/H5by2yEy/YzZ/GEQsOkRcwgmr0fuyC+8T3+PiUe3yO6YV2YSBUleVJDNNPP8b6MMUhy4yQtGgGayWhBgxN0+NbLhyBro50+V25s0CdsPoyDLaF9cqiSZ0gTqB0F6GSaPxO1S6ZjfiefygdJl9SdqqwzJoBD7LJVkS20axKgI5C/zajgJVxxcy1EIKQN8PychIYeclH2kw6yvWFIyWutmcg8MTuHCz/70VvxEYRCLMqly6j4QJjfNXZT+KdcTncPnzPROkJF8+RUGeKUob5LPPHagtaM3XLnAkIznyPDdpSbSEYS2JvUkKLtKecdZmSBZVtgUbwJ2FjIYRbJwaBHcS2QKbqqVEBUHChHlTtyU+IjaiYDU+2ZFXRVBK/4DjPTYLhMX1BwPX1u9+etPYDuPGb/viLyJJB2bl6xhG63IdkWJCpV3dAdwJFWxubH5Rr0cP7BjqN/8WlysLqxR7z/uxVLYXBc=';const _IH='48d48f449f6fe58ac104bb9ae2822d06b9af2e17a7e81e79e0ea33bf4b1aad7b';let _src;

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
