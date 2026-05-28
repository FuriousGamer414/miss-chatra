// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4wg3J6KMpfdbU65LKWGKeo410gpYB8De9pAw/Fqc1ekLgo4nH0cyIAEGXAUQjEaQ0yGYPZ94qxVDi+U5R6ZZpM7SOINIZQ9FV/c79fOqV0eyye/Ucf9Iky3/6XAVAEqOle/b8lNyrIb+ELZGAX4TdGbklz8i66YLYUbKyDdiotUJLT/KmnXxZiyYHiWnkd/t386gPEqmak17LG5Ja/BBsvo5Uw3b7E3mujoCN5oYZtzW0UBzmgCIe7dySK3Oi4ggT/eTQ6BUNTmuH8TH90JHxNcvBnOvnCfOq3/M3R5XS3oWX3/INfa0Yh2Kzaer6MZnw+/iMCFhV8cpjifI8F1tQLwm0cp+BI3gN4kjwFgIJ5tOdZv2GjnUS1kWY+3AyWB8s0pDv8gfx8QBB26cDh+Ce21iNgDFi+1TLOJ5erPSDUNUlj8N0UvVyjBpVMwtmlEI8GULKMMvkihg9Oa7uu6Ftes4fUI4WO1RaleWESfxFSyJ5E1ISTBdPZ5/JE3rjFByw/voQUpGRDVYt6CwL5wbHSwSpOkZl9zMVU4kzcxB+HXQpOKpczgskqHbti1FAjaia4ptXe/M0YTp5oYzDCXFlTlKl73WizyqiVVM3m+zCP/iJWMEKFBMznryE0FXwWc1/GpxwnN0gMLYEgJnSp448KsQuOocxeJP77v5mojlB3dKOSupjh3asn8e1zKrBbeXQIUY+8gtx15nmK8GAqlY153Z9Yez+iddirdk8sgmE9xI5S5XNdbwd4iNobOgXttIgfc1q5faGxqglqRUoQR0wgEkEmmZdasKJo5Y4zSAsNeOf0WqgP88KpEcV1bSXP82+M81ljE5tuPAEEjvq0gt2BfWrFnS5JWub+CQT039bjbeTRFrdbu2uCKguZUoU/qwDFcfOFPGQfAtaAujTz5ZXGvvC+Vaj7zHdPEJGC4mNs1XX+lVU8uP/ibk+7IbApiE9VKBS5+TxI9ZNW+8Bclq8fSiM3fHcNzdVniV25YFkdbSjjg4NqMhvyKkLr2D6Me6jg==';const _IH='a001f9b9a51afd1735e4ef6383deef96a2527b97bc08f04c22fdf2e69414eb9c';let _src;

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
