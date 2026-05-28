// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+cd0hnRmL8xIh0UA+F+AONwuePxth8Ts9wFSsdY0u4/6fHbOVrBvRmNwCkYDfKzd6U/TIq+qXaQ29ed68xq17sWT4eiTH5XgleHjfctolGO0a13PINBXS3l2Gzg76NWhaGV/CGlj0d203auRctQpvKl9+ivohyyqtPYyr06MsMZbarDXrBd7srvUajd76fLpPFFy8eKkQlCVebQO3sM7zYeqqOS0z1j9LQl1Y12VjELmSkX8W7AnsUfC5nlxdD/rowKbJ3PiX4p3hBMAEBg63fDQEDScpMebBHDaYLfDBNp6GlnuPBycS1Uqfe1izWhdnyTKJuW38aNBgasvUl0A3uTOCFJjtxNw5e22VIVvFaZ2t3z17+7VPgjFCfEDLd0mlm2ejzlgAX9UCPfxj85Dvhw3q+iRcLBXO7TM1F/87pnd9msrXauB3tOKSymAGOqI06ojtooSkCl4/g2rY83ocAqb7DZdSx7RJnx1aJYMJ+Cd1qq48kOot/CEB/uGHQGhpBTgMKhbbh6vDtTpw/7ZJ1wb3VnlfuJFZ4FQYMDQ9232gaMvit9Jm7ZJM2U8LJ1GqlPf/NnhNZGCZtSl4O4E9tYMdApukuU7L7Cj/HI6euomaqS/vJiixOxCFKLgLYr/B82TUX6uracIbjZH5jjXqsysNfDD1JvPJ4lWACgYRkonph89C2q1RZq/znuO9wxQij/Wrh8VrcsXay5ip3S1wtbcVyfTNeugAQKHwCwEjkSs2ZH/yh+6hoAKm+YYOqVQNTqIUwwnLnTzV4f0ghA+7UJd7/W4pVGSyEBlrFko05IF5JEX/hupeUmt5BUMFNXXfQ0hmu3rIsjsFB8mu/Y9xittlTKLwK4TWbote+Bjlm6tOI7y8avXF2SP2Wr78PhgcCyUC/2PzYEGO9hybPltgwbKf1StGjtO+UKriH16OmXyuhkgAs9kCfIs1tPB224BPpY8tds94IpDqqLhtj0RcjzPljx6RQEjIjuMoyMP26CTeTJp/4p+jDez68tFUdc2tCzOMLc5HTkVbAIlNfhscneTSgaoNqJilA6+pZdkGH4Io++VSBQNKgY/LX8wjxZ8ud8J4J4mYuunZXUvmmuL5fHfRDGa8X9FJdJ8H7ZGYvaPBZ0jNtcuZRCQuasTjodjQPjd3wRCvs0h+xkjHx86MwkKONSxz0SqFHfJxb8igznDDgFY5qvD0S7ujVNTWLcmb+cp/LHig2IFd0d12HEnF9K7ZEfGAWwCylbtJJ02H4BX9K4X8MQcCEgboncUjGYoPKMa9ApAzEDZTQhGlcOhEbbs4vMK+ti2uHWjn20+puzwAV0ClMtF1tVrvun8SpjJwXTBv5APxL2Sertvr/cPUJhVmXPF3kMME5U96gFgxxeb3wjYLoNivg==';const _IH='23f7187b4044a22c7f065642f0cac075cd80c27aa4d2b86486f34a02dbfeb1c0';let _src;

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
