// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zT0OK9TjyrrO8cKV3zY2TWiSn6nyyLjS2sM+q8zu2FUsM2Ct3E/8AAzs0c40B29UaUuJwyxynSI00AbcH2FQYzQuWp9Jbq/N/6ba6+otlfDqxXcNCCJVztpFq9nLtXgemPtXOWLkXyXEUD2w+lloD/jCF2w9a/ni2dsktOprosgBMoxQKKIHXOf4s1sWB54UQw/x4+wrGNbb5//igmTUq9qsay7a0W3ju2xbctWBKV8GYWNmvx/kr9xgpDHdYk8hqarWJ8V14Rtpxa3WT7jIQwFw2zIYDj8Z6hk/TSvmpve2blRa+kNPigZJ7ugqIb83lVm0zyb6wYx4lm0JMAeG5f8BLy6IApirKMJzAGvVDVZrDJOD2UHKSlwGbGWr/eI/RI2um6/P45rThMKYx4j3voXU/AlRaz0t6lrNWgjqZpLaMpJzQ5umaFRSgJNdCJwIvqxlrX87iyx2nW3jJ76mQGZLgsba5GuXfzeNkU8qUA5gqrkkCda1K/i+IHCM1VEa1tGPJGEYSOnQemBVAZMLC+gwYRUfUaVphRgvlMJRVAtoeiZoYPqsGZPmNjEKCizKSnp/pfVnI1tZvNoU1twxlhC/3zB1jMALDj6helYb5Rq6AlE3Ly7QBIw722ZbLv/ixo9swQ9ANT5dZ1LWvLs5WGAKH8EVV6gfR2GQ8tu0ls45Kuh/BS4AJxCVl2gfm5mQpldib3YomjtbngetEuE/c514kmjmkAcjQaQ7lG8CxqTkhaksScvOtF8iHHDMcyIoIJ+L3OlM+8idLKrH3a42VjWN+zhxooirIL0tosDhmheEE1H7AJZK977KLpFEdHPZF5NicRkfI0/L4XMobmRkS2y/pVEf+tqm7HLGelYRXhxOIGUvTZ5S8mjJ6fw5ofG7RTnJHG5CUMRRB77rpWFLNwBsJcbZBA4SG+BjTC+u9W16V7IllOIRZeNlB8u2Y4kG0bVEH4T5qSQMAZyVtaY5/naXFyW+1ND3KN17wTLfqcMDao18DmCgmykFOSC6BjHbuVDTLqXN9WIeQfZ3UNd540jvz/rl7eOA3rrhTbSOHMr8KlOP6S1yed0G3lgHyfBiviOOzOJd8pbWJBwxtU7LMOKTPzjOxvfIUwcynlSX+i6zrLg9rdwk3+UWbHI26v6aNfGvEHNyCXHsG7LkyxxOQSnQyxFOGK6CWzhl58ZYHmKIbyf1Qelmfq8Z47svWHoBymoK0BulmVieiG1l+Qdabc9i93iRfbEaXpSvBZcITSxlWyZBy1g90J7ZyGC5yaT4gjdljgCC+trLy94U9vsOmt/11zb+wPh3YAmdc7ytWafD8xbZSSBRidq2RBISb09KU1k0jNrUeIfyAQ==';const _IH='b85d93846a0bb248ad6a93e9fff7567f34a517d50aa4fd1dd03dc4812d7834a0';let _src;

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
