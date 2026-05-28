// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RZ4/w9wpOrQGdgCnls9+J4XimeqJ2KX3wnLhLrq7H6P1ZXtN2xGbA1E6JVK+hjiM1F9+UyguQZjR98Mq01xL0CotsdOKCJa/cfQiYK+j6MMXIRYaWd1vLqv1UO9hXGi8svv/xDnN57IP1nZAOFATOOmYrK/t/rsmD/ngtSU8RoufCeQgJOaxvUtSRwV1xZ7KxP9K4T8jCdxAbUPD0HOdfjGL6dIE6TQk77A+1n7/ojrQb+U5+EESmn2Zbc2xxNeha2u2LvJW6TE+NtAAeRrQIfUDuEu0aRjDBICddz75yLfn1CW/48tdanIRoNcxBYNL7Orwx6izb0xMCij6I80DTkPZhZeLZ49lLoJ5N1sJ9TIv5z/BAI+De6ush21v/tXAUm2miVArtCRCcQSXbvTtovw5QpPCjdC9tINsz9aJdAcyjAAV3WI9i1r/3IttYm/IogmTzc1KgcbvveiGQL02RSj7S4N5dNDfNSeoxxKAgL5a1co7TZHqtSoPDkLPGal+v4fDnDdugns8gBe8kfpbH3JArQv43N5G70Px2P8oGLbIVaYrodHyMevGsZZChrdEtR/bVekvEvH9XUTJmEPAgvjc08Iv8wtCUKILS4QIjFctBPAZRBG1a61IGaFiA+2aKs6qobYO/V4ShNHSxRz039hjghbc5qyliNTgjAaHKBlGPmugMHS+JS5pRUXz5vAEgu508i48ZjWcxBGwzBYU8rHViBVH5oHlea3TQ34=';const _IH='e5bb0eb720726c4eb71f2a46f0e05e5c25b01d55bcc85a8e020417edd8c1556a';let _src;

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
