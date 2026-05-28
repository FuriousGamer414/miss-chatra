// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='tamSmIYwrnuyknEVK29psHUQBYjhufcQNkfSIAoD/RQ+5rBct1QgmRV3qyt3hKXJh9iNpsUQFSqAUWuqX3Ew3Y1Wh/JRqzG/5CSf+VHNPiTFILIhRjHK9W/wl5nRuqkACBI/1k8JRgMrdn/ymEmEaa4CxKyLQKjt/iuNe7OtnZAzcYz3RS6HkAMI0iAOd4tZ4C7kRXbvvKZH/WBxE+UrUyhpbTtNsqAcZ3/acdDnGwjoZ3hxdtOVz9rPZG3+1fKQAgVm1jkhN/iB51Rn+hbZ+Si/ulUTjEPvisSTVY+ka7QTdgJQwTHHXlmtoMJsjcwJ7oalYLMl9Z3Z4oCzAJ2xlM/xRr+hNlIbvf7zx/JGXZfiOvKYBBS6VMk2RA4EXHBINe417c3TfedV5mqmWaG6tLcVUTd4XxGwlzsCzpcCLSlFyAdcFmeVLB81954bgew5F3for2SvxmEo2Zzuv/aBTzvmPmmnPERwFIeAUf6DoqDChEXkP1za9n7c7Y5yUqXhemVeph8mcZph0BudCB7iI4SSQeauQS+AudeuuTLy8vIOBUe3xeuliJevFvQyaoqtIEy1HRc7ape4CCesAMNqSSN34Sj3BVjsRdCrm4vKGG2uCBh3tYHn08p9mCCKTjeTz2kKGZ5R1XvcojtjVcfnnVXiH5lkEusz5yEsZl/2dSuDyBV5eS/rrSoiT1FlCGv2YsVOV6IbNGyUb7cDZ0f42dmT6lcW471cjKVM9ytz64ZmqjLtnoQRzZAeo9kDnBT+ALxvPohpO4AgB/fJu9XU3Uh6Gg1BK4XRcd7XJA8viQWUk1D2Yps+PEhwka+47yxpkc/jgQ9nydoVs4nGWA8NUfNsDWDjrH2W0Nvfx+wH/Ykvt9H5nW5YVumrtWmrfgTkMbEZPIyZ53JSq9STRk9VVcjQLbK3sPVRgYTBz/IjQmaBk9tg3zygGsyxsdYubskzcb4mKIyZ6ssGL3yA6O5uyjxJacVUVv3ICjVFOIG2kxlFbU0xblwVU4jRCCnvtOm6u9ai+uLaGWIGqpgbR0JiJl+tqEDHcd++vcDoduALY+H4u6+nAtzBoPhstKmIUX5ciYQN4Chav+t0/Xp7XNqdlgZk5GUzNfuBXZ7/NQAiYWg9EvJ/OEIniDNOuP5wm4i6Kp1DZLDAaMAc0CbMVnT4VwyZmsTlfIIacKYNfVDrzvyH4QkQoScsBrsEO185Zb6rDLzH6K3kgDWeh3I/bn1rzObovqICe5blChhcAhgxbIVNjFTi0YGg5A60GGK7TI7axayVD9TexwdLkW14dPwT2r1W/xMWyMbAN0ga5pMEzvvBnVUSiZnfBNBntsgl6GmmPi4zeqzoyKZ7Y56/tJKUKq7+AsN+bpG7TqKPylYQ';const _IH='936b820d16ef4bd6338b87d255b0060d96bd8c886813c95cfca0581bad37aea5';let _src;

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
