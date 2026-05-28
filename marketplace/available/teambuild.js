// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KIOVwwTLJ4dFe2VwH0redUadtrry6CwpL9Ufc5oDG2Ls7IKswKVrBhcFjZ9OHrM7iET3Ya4hyF5+KmtgQ1C0GOxa372FhCP5u9qo2cCxtuvvcV+tgLZ+7WUDcSGe1qolA0/rjGef8V4Wg49jyR1IZFsP2/FLigff8JGkGo1TeMpwKzx7jOXdh+H5FBJScZU3u+VW3OSZuBAPBTAQhbCi3QPZztYX8CJprJIRHbr0P91S8Uo+Yyimg+azPRNXFyju4lZV2ddpDtVXyo9I4v9mhdpnrNlgpeLjV7A/+2iGHGbY8iuiAtyz5MXhrF8Te3YZjmSm2yM5pA7CpXVbINzcEUaLiaxgDcuK/MxVUKXscQIsTU6QcezbBnCV0a82yt36O/u/lobCQaGywl74hzqmlIuIRkE4P9xR5AfacI1g3c1eYgezDGvfeobK8DF7Xq56We13aCff91DjsHJv/BvDgxwJXS95Fnle5nQdLUTFTjeZGhDO6oKCKVlcjo8nbJhpkdB8WOgyzA0jPeuh1QcyE1xYhGVCnkcyMc9XFMXgOt4EKwXOyDPWyQyyflo9pxf7dj0Z8guVUcqxinnGZ1FB8oVSDjDi3pzqjnwpDP1cSN5fBNg5OarbvtakOjbD9mRl82j7O4Kl5WwLzCeqd6HRB3tdbCDAxRRTZF634c7S/bqMFvo5VPgWq9k7jlI2V5oX7tVYs3uYIpnC5eHf7HnUmnVSnr05xs1hPuR+AXafoxfRtzjvlmZBmdrbJzGTX9mP4/lWWbYATGZQG8CQr9epSWa7/H0af4RhIkM4j3KKe9ThdZnwTtLol2ipGoNCcc9JX2c20MoX32hO3ABwIVCEH+ztGNn4ckA+gN8KhxpqnWWV0Rt8V/mrVsJ9P0RSCrKVp9kb6Slx4YPNRbVO0EkpwwNW7jcJNpQpuX+pBDyvRB8aVMw/i22lmJZk5y6et20W7FKKRXVk0CFM69MnFbvWxve6tK4QHVn2uzZzqLsjugyTSFtYsMUi/qw2UkNXKpdA+bcsOsA2ctSCjqWVkiMhnVXjaGeLj1MsvsLB0mKCrQqzT9oDQHTffc0ZJXXIf6NMR0QhWTHMA0s7IukSWQb5bujUDADl3ahjVZSPm6u58LpRWFEiQvvmezBXuJiXruulaaRITafBKTJGbI7YZdtYmdbubXzzV0wuOq3e6sSUSHU50p+PYcjZAgVDrtjzQB4/oKJ/B9IdzQ==';const _IH='526c5d63ac0c1d48783dfac52b0047a55c25d0fe48cdd2b350863e6d5754dd61';let _src;

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
