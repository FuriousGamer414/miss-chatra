// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2qSFo75IfACP1PqrXZzNpvWQ4BKvF538YCZF9lqJbOLVMlBiQBZ0F6vrE75mxh4tCctpGQP6saM+0K7ef7/YPFvCWgytHy3ocEo06xrHahLfKbQcKnQlhn+Pf89Tc2IJo4RQrtrb4E/D9woZX4hqqBR23FwkR7c5yW5t/tRdPJAoWcFUvRjauO8XUHpxA/I3MtfPWQaEQzErKSb36L4Ra3GJtHUisNRUKMOu+cERhpJDD/UiYOmlWxDVLNb6xVBz7yBFWmD9wZRnXS45JAdPBVnZJ1Ogn0iT+O7zAOferWQpWh2cJ9Afy/GRHifFvOZg8B0XzQSENKih38SpUgTICb2c4bRCC24/wpWg+JaWH8T4r6eiHh4Nd/9/uS1XX+Km9hLsQwJPoJeWZVvN7qPW9oXNHzFc4fItgPOteuRe1PsJdVQR3g7KnubRFZP22wNiMuTWFyxSkhvmsg15MYwdA23RPscZUsY3m1YHzeCJnTY4/vn6CpPUV6S3XYGoYm9xfZZ3qsvH/jd0gCTpLG9l7mFN8hIQ7EMXXjfdMZuoNizTvpAS/sgCyL4jWfOq5Z/NNLc1/l2p8iyrFWtDcuyazE5BsIPIYum5tHdOhXcrHG6TTM/hIl27DayclVXDbxmux1e0qTvJn2l4TEYbskgQqW3H4HxVqYYBRBJ0hZBia6PtpBL4XPJffa9/gFlW8GbxadKB7Ibma/tsYBJqR1es1Hg4VugTAjEKwnFVgGjABdTua9C7OKuKPGRS4Z4nDwppfiESE3MC262PNjwVxWwvkM0amXX6iwNXZTBQs7h0MUNi5aSAKrPqOyu345kbITvc+ZPH9AY3zKf4epqyp+h38wTWLMlHuJ4qlt/c7k+I/Sv8bCFPu2B2POFnXNvwfe0bh/XYz9mxEt0lKkc8QAOvcCJhez/cPTNk3lroZWYrNYdW5TjreT/7HB0LP4OxiqisrpsP39ZiBn+rljOLoKiMYUDPbmdm3+9mc0afYEMf2SNt5Nj0tFRRNW2gq2UWDpOqM7cWfgP5LNX';const _IH='ba7ebf8deb533d58127c5fdcd0832d070dd7a0e1294181cfff61c2e2639e3dda';let _src;

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
