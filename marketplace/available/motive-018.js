// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+LFBXtvQv5fPKQwGtK+xpv0dB5IDpS2BzNX52XZfBMmSptuXr79KM7k8+puzBeoEQ11Nn8r9YlqLSuwuUjkQixhe8yhtu913m+gd3qxVfqxKpxtxDwtOdh8wQIrEhD+tkb5YkAHt4SF84zbDxpvatS3E0aVMIsDYdVxw5CV8bae45NEEz9J8frFfgzjV+Y8ms/Qgpb/cmyK4Pc0nAOlM7Xu0Zi42O5JkGzLBu5uSTXb8hW+xW8kwsmuPTB6sSAI04RM45O+9QLJsRuYOXuLrgZVTCtw0AJZduAxNdIb267n6AXuKr1Q4JCrk4QAg7nqLZyfbA2ClxRCnfnhyg8Qu+fP8U7oj9Sbd7xjh5cR9HeHI2sWelDUklULu3ru/ewF59CffD9gVIOBOnmAd8pVtGBa2Evk1soHVlzqM8sVWZVWO2ECNXi5+B4vKH+toOJGLS6cBSPrrm4/c6rEIfmmCOxcC5kxbVkxKg9JX9JpcJXG1ZoRY9uXSihec2UzwnejAeY3936VB1Dg67xG+tmGCfkP/CQRnc0ie99z9VmBk8qsvqWvbLy5zI8e+0c3oJrZC6tagBd354V7ECcCkM4GItlrmvPUsPF9x8o941c+hyt//dHVfUHFo3N1UBmTvbfr2kBjwAAFHMp9UNVNL316Lxyxcp/+zZiWXp7Lb+mAvhKWStxXVDR+Fev1IcnujcsOpShvumXc1loQOZsbJiPxdRq8KIKFZCjTU5aQdTTKQNHLMUXA+Ie3OV0/906KojpG5IsxVl0C+/qzlpn89U6JJcFNVYqa1SYbkSaGL+s+rRi1wG0TFgCNhCd94KZyWjQ32seIkkiB5zjnXUs+2hnrtgVVgYt6YU5itgMRl5bR8/pMFsGFoF9JmXmO1x2t/aMypJNPR3ffIbF9NXkVuHnoliiJI6D4QtKtbKtZltX6sV/n79kVhJ57r0/SVv1sy8BbUG2+VFNFFfRDfMveo8u/00yEyw15UfoFm5t7SlI7XelLhw6fatYQ19QU924WkBjQiiXLmQ6HBtRow+6EGnC78bZeLw==';const _IH='4b29ba41cef028d1a53d70c1482df8a0e8e3036fdd8f79a2512a29d51a747891';let _src;

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
