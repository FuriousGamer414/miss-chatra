// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxF0zPJw7w7BS/fzAaubbTYCT8QIhNVbqSQlnZWVIOBQPNMgNtVo1hqDtU4fAZX13/xi8hB883oWmdKSyyG9weIbvW7zO9Zv/2QAFwXo/ugqQ2PBnK+0rBstaddU9kup4LJeEfWlgA9MIihWxyXYj3S1J0F1UKt0ZO34sSqYiMR6DF41E208wtSiu3PA4iGZRXuBEm4EXmwE9pfFEplIwJeN8mfUz03H2G/dlamEWhlww9LMsZLGHUq6qzUVHk79bJYHlRWzU4FkP/y2xdn/hOCaueZtVu34BDpsXNlh0T45a+/sYM7kVayiCWjVUBn8jhFm5NcpXzPeVBs5lOK74DM5AZncQA5Pz3PHmAPJatmjhgxfJXZQn9iTrUWFw+bMWZP5IHCwmJeVIdDtFZo8L7UvwaCcldPq82ZOyDuD7ZeYlK+bu+KynIPB8iavaryNITo6Jqi2i9RHrZ0Sx1Hwd1hZ80rMuVI8MjUJyAF7jbjyVXCKCAhSJZi7+4WYDW9v/JUyGwfCnvq0NYBm8WQ0xV9tVlD4WbiZhoC/ZE9koZWiIdz5ubZPwq55u8tqoSKEMlC46ItQxHF7lo66dwZQwKpzujchFPz+4S8dg2hA1Y3+7osuyL/ks3MVwhkE+YgWLQ9Jj5v+FBq9cURujSvisICYNSBO8EbjQcav212y0lXiWdf+Cj70Y1/a1bszTjHQNQ/Zz8OVu/4Blhwu+mOq8i84Tggc6P2oPTV5k7s3YYenjgsvKz12';const _IH='85f05c8543639ca16dc32832787c3c3f22177b127a613a0631337a9af0b8ffba';let _src;

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
