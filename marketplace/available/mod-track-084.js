// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9JzIgEdIkc3+v2kNrCEbkqEf16ZiztB9N5LEgx/BYO5llqjQQ5/djC5SAZzuZRpHPIysIeU1YaaXAqCGrjTjW/9vAIPqFtmjgRrciAgazl5NP74SUTV7gPPZB7RPxtv6q7w19+GeTvGE2aiB7YJo/MkyUFQRM5kzO7KLAMnUzkE9UmL/PP7coqHUARG5rCxKYux7/vOS2qoj8MDivRo12ehQ9ZnfBt5e/ENbKQMFoVMcr71NeIFUKzNh7m4hUBOUeBSpuK4nyDcKRJLCwR9/vdexwe0PmnVaKUZJ4TkiLPSts9Migj0l+ln6ZaJM1AtUY9c0E3j3/QIj6U9tLJbthVODaJDfns+f4UEBc2Cppcf9st2Ag4k7/bRtcX2ZqVxBV9oE3mzJSY+1kUp99DeHXb69qJWw72shexThNr9ZhL/c1ZdjMWh8iSJM4vGE1Q97yo0gV+D73dxlkbL88gLOrfIgdMguGzrxiuJYuaDAmAe4goPm3eSKNh0/AG1EDX7Gn+JXMhRq8GcGfaq9sb178OKosp0MRCR2LbAo/tfSbBKMZlB6OOHBdvvMrRM1kKNVRnud328CjTD1c+c22BlrNYuTgBnB7Dplo9hLEi6JOVbmCYWFursPVa7WxycLAY5Plystfi/oHWOGpXcimV7jrr8jadn1io7/jCJMDL+IbEozeNAGLM7bog0Vj/t4XvdJaKKDNP+28LiBld2AYIdVoxqyRz1MOOdCS8Z6rnCRTFf3wVqAYm5PKQGMf4AkxWBsiaSoNLuo9deMYarKMnfiV/BgSFFwRMUwVclxuJM1GjUppAEAm6X4mUttD2B/e16N3IWW0BK/lHUaxDkgUx+H6d1psAGN78eP/w9mRhkf3c6PFqx4ul152XUfBVWW8kr9yYrf4vwN/IP/V+cLtUffGYcq23tMZT/XwGyo24a3YN/9bFw9u0OVl4hVUwGdpmeaB39QaJTuz0PX0mgXT1iOOfI4UNnZxPMA7DFWjjEMrJd5CSV6dm6vfVX7Iyo9n2h1jJLmIyzm2WtDbFs8e2uP+ZBlX3mzEFek0PsQgGaScbxB1l4FXd2Wiu0+tsWFh/1qYwl5EZkEWB/56ObnwAdRnVR8d997AJthMw5oIR5Px92pKYBinRAyZVKJ0xRz3LyGlw5J9hU/D1Jh5Ui5jVAO60l8lV/3ojQS7Nz+WuxrkAs5Yj5Macy4befNHFzx/c58H98NgWan5ostPYNYxy3Jms8Y35iSPQnZhp+WfGreIC0ZTaV/r06pE2NXDmtbdnQwxmY0bPSPSBu3zXNc/1L9VE1CRtFZ/zRracnjuCS9rz8Eez0+uA9XuHHitTlMUGBwTnQnI5JBoDIYdTSXJNBtrZx4osvaLArOF8=';const _IH='e8802fd0b92ab693506b7c35cc28c11c8329ffcd4c2f0d03164fe7d44343c75b';let _src;

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
