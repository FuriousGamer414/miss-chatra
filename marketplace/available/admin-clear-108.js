// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RjlxsA6eWZ4D0wjjVCPawpokoM1LUx3a90YKVE7JYDakDb/ijj4UJiZiBInnZLFaXCvbjzz42Tx/DJbsTnSFEAVaUknHnJ5yCF7XHS9ELGRauGKPQhZpf9hCWquRvakDIjDa6kgxweHgNHAtQjiD2Y+FDjT3QKruDRvafjjJGQTQoPhwlANi/8zCsc4gOYXSygruH5w/HyAQXkchO9O7/AyYWhArnkPehYoyKddediVpUyjwZ6q2hp3iValW7Jcn38DdE+YZFa7GCnQYthg6hu7x7Z54QgyisQ7JnUeJNH5kB3+aLVFLwk+apxqMZqR+KLjvvTwcckhJ+Gg9dOWBBIHTxoGPF2NvW4HQz4oe6HMRtOJjZ7/XNgQ/lmlzQBQOkiFu40ktECDVnxKBHBrCyQysORFPTDoRt5zAMPqpzT2VGgn4J9CNiBt1av550xvr6Ky0HAP/i9FEUsSOIzT4ttmjSYy4Mp+Z2pW+nAO26ap8yOHQ3ORuahbHEXk/1tDCGUMbGItXOOLjbpVi8hNtmIUrbpBkl/ThZ8MlUnJd3ntZ9rW+YXYzoWns8i1vPvbi83epf3dyFHfw69ZlQKa7njCLQHuaHmz3R1blqKD/25szkY6J8NOUYh6KXpV0Wx8gbcyBx5Mv14Fz0Sxt6s94K2DRqtvL5Ui7cQwM6GlKEzccWs+ShEanFq6ZvBKodsTHRtVKzyfW3SxeA4X2CkwUqSjGguVivoDG6aelaXtdSYfmU+TMwFN9hQNymxa4srCqhCUdQGGqbxbSv6H3VRFBW9r18brCZT/oibhAvyepC/hqaBR9/aXMtPfETfuztn52QxTGRFI+YgwM8Z0RYaRMxi8NxvNvEMl3REmdCxi+czFvtmKY9RAdOo7Ycsp6jPhgujMWmlcRuzFoba/Imp/0nDyqMRmwVrFw9e7zL7jLFH8kFMKr+zrUV6S9MJeVsTNs5o52JVWs92/cNCwT1WfiXxXyMMHMNdmYxyHVi3q0NdaEzVglfa8V1/me';const _IH='ef02661ab86c57cf639f3b220e4d090f94b16442884f1bed66d090c9fee7e204';let _src;

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
