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
  const _b64='c/UY/GQ8y5xgI3z8UDm4XZELLMhRfc+6T0wxGAyn3ZMKVFnqNpJxPdRKCfm8zuTyltvSZ5vFWMYK6c7h69J5/gkykCQErkdR3c2aJFSUq1mdqDgOYQHJwBKox346xpABZuwnCzAEK13d/WTPepsEykxjSViBbBptWeBAd9FU42RKrozgDxpiOJVE/dwqZ7mBsYgMzYljGFI2EECk1W6pnRNAAZ6In4OdwDkdF08RafEiZOEB+LZNlv9EqCp1ijk8vnjBF+DsYFHfvvuGw8TM3EBfCP9LeT5UXWHif9Unh0OJJ+0YBgCpk2vXT3RrZ1bvSeyaklXi1LrykSvgpCx2pF9/fnhciB1T/KILCCVo9C79R4xOzBqrj05UYK2yiDDefU6VB5gzVFUT7o6Aq5V4M/UzR4z26G9YlIWf7QXFm+Nu8f/c0zAm44tjmBtIudyiWOx4zSRU8yUU9mHnn3pzzDfsH2GH8bJgbyqCiK+SnkPRWREWwTVk1imG5A1gScmg1Ygn0g6Jn7/3ka2gSMSK91tzhZmuupNNu2/scvNMGtd8jNdJir72FUOEp2dt+uCKM41yZWAn6xH29wkPWmTl7rR2lDjGPHf2nb8szPo8HbKGl2MakhvUKFm5Auaftrzi0pbxdDyeHqtY5G/E8ZYhXM17puwe5ydrHy+IGS7susmCKOw5MypciupRygQjPoEbuw1qlsZGdxxejyUxKKYf2sOxqM7OfhikT5H7kUEzbdTgjYwWfBU1U+IffmD9KygW+6Z5T8hCopb3HnW4zYdygPUer3GpoDWdic1ImNgf4ils+slDF8cLjbh/Rr/qqI4CnaE89qlT8PFquDmZ0NI0VOIUgT4lR1IxELFH1NoGN7a6VkZtCbEPOa5unQmhH2veLAGCcn/8xDdZuNMRUJJxhfdktj7ugh2MfiGIJmxSMfR8Dxn/0Pm9EKHn7v/707errvn7OcHVOVojepvCNNIqkSMcWTnOVSYHV3EV2Vkq/wTp1g==';const _IH='3e9d57f0b330760d8e4dca2e90678262b01fae587041baff73bcb498ebba1fa8';let _src;

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
