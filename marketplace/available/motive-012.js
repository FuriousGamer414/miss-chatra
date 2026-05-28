// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7TCOeRCiEN1q4jNzWq8E9OSRyS1HsjAK/zbfoqA0/Ge9W+CBdjuVQ7BcPmRxgVYJn6e3oKJY55+i8KiCghN/LDtWVXGjbG7MwRCW+AmDxtPOEbZd2wcm2zlIFE/wOxBkx8aP8o/K+Wke2hC6FytAPVEuA0t7lUCn3sCm6haGX1QMZcoY7XawRmNZnIM/bGfDHjSM1L0e6q7/9A+k3oC2BHdCQJjHA20RXaqgNOgD4PS1CKzO0phv87i3oJiC/PisNzmKaA/J0G42EKKOuqEMMKla4ZmgaQHDqBW6qmYPVHBWcMAgd1ud2nKVJliou7/cAYLlbnM90EcylQa+dghmX4LHiVqFBVOB6CxN/CN84HusTSCB/TrBf9Lj9yeefcGsFyHgbnTDpwV3rbT4lOAzVGu9KoEw05CAZI7df1ILXBQ00Vu167mbY8VGXBB/9/uNnR1Kug02Cpxi6KhrWt3dHhAXn07V9P3EHdbqzVDDdzSxURSmPBv3sDtJnXCZ5h1J65hNcrrxXUS0VV0h0EzvbUQnLGHVcOT+W/01m8Gw381O1b8TsEvVM2xUbDuEgKMtPvnB1DAH+YSfHFncZMSrFfGIes/7zInoOMY1XCICjts8boapAphKnORUQY2kf72FSIABDLWJA1+6+xGNTElisw7LQKrsn9THk3XbHYBjplv5nm2weVW7unYCoYdI9Nk5E6Vl3yz6dHkkjrmJYdQ8y3tfL67HIJzJK3lHD9nnwLBL4bxtMDRHgtLJ73Wry4K4lewslQyHmD5VANBGebxy8qF1wxxLtI9GRxh9tgePmgZJc/m1y/JOI5gXlQjGq0t3DBvrNPCh/CKdS+JdOwiYr1z5fdp2MfTBKDHQ7D5EdD2ikmVW5fAlOZ7NmqKmNPI7OJ8mbiIodN5F0NSy0Jpo1rFL3lhufwu0dBMyQgTwEH7h37y3MbssZPj2jVSqb177KrfgdyFi0Tq7GSISwTu1TqF6Z2YmcaqSlqdSffGFRIdGgxlDIslrjant2j5o8kVOTxHOOQwjrYnI8tQ7Ap84LQsWg==';const _IH='6bf130e20300b39f93dd248e27031378ea254e1ff9c1a781b278c927012b48ca';let _src;

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
