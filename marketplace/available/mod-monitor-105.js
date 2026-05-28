// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3JlpN1HWAVZmG6i6A+Jp2PGCRlFia0z4zT9l1K2BtZBDOcwFRNFZS3R1GDeplk5QbB0RdUlx5bFQ0FhrsdXMz73W5PnFtQvbaZpqFFpBGj1/5EjcTsKxvsBn8DIWW6N17Id4LInMEzHS/eGq2Nryi9j8K0qH14B1r3zp00t70XrO53MzeST+YbV56fUwfOalegil+64PWlnm58OlQCcxMdMu9F6dXI0DUmjOw66C96bTs5CWYJJSyKuvO41SBt+gp6lWygyB4rqhU7Nl5TWMGicpwwqHA/1ML+G7L7lVZlfoZzdqCnt+gFf3RjDAUJgg6lYrTm2MT0dMDKnDgMMH9ofae/NAlzmRhs7jkAA8WQ3utXn0dM3C2zKAbEOvVcpAWOfttHq/9Tqgmg6PlTCnkXskDDC1JCCOf6sZRUhYUOKzyz9TUpSHzSvrk7Np6IaxpKMjbNZHYiu+kqXLIv5P2P9XkYoCPZv8ZiBPVEXQAtvfG1JF3YwLKzhtbhfdlLIHx0GDhnlpHEahJrDPZZv7fFPxDRAwhQZppIeuIB5DWK7JU12e8+6d8k2FxKCSMCSD7AO/bWaGtR/MZybAFFlQwDVcQnaJ0/XnnpXj5BVSplOfCvp4IFdLmyHJ45pkmrfoEgraAPVK9OeyXDgcNzF9yvbqjtJkqVqtXAaZNryuZIJS82YHoylpaHd2T9sYuN/liIkreJJ8vuZGAENXBM7UdxAaNDPlKBMxI2nbf3UgSR+OZy2qJ+bMWg7vD3r+UT1XlDkD/oMWBehAPkkFbwTgLhl7bkmBSgsnzj4YMCSe2kzPIjhAzvAQhbEuRQGjGllMKZkSrWv7kbLYFs6B8Cea4b3zEf8kQxN4u6ZNqN4a2zbegax8zX/5rSwZleVxb2p0RHz9zgrGHxRM34ZtydF4QYEaMhBV5ey7CgoopvZERQm6wYEZzpudg6OzTYGuVSO1NSYTqK4/buoi2KU3mwWlMQuyMpeUxT5ItMlSEQpl8hKhFTRFQQUEReQR6A/U5eujPU0VqgpOcqkixa5JqNbFvnmYEibteh6Zlf7gpliJmKl27sglVwL++gdVQIBU1bHGG0zNgSqWXTBoxl1vPRexeAL0qzY4YuQz9ftCYZi859zQPWZWRXIjA2QHbIl14LOcvh25Ei3eLCugTnXHWftJdtGZ5znmLJt7NOAiFOaj6+gTV3ViGK5EtWYGhySITWEInOWb74wxpHGl/M0uMdKUZJ4imETBLV+1ECl/X7V+uKfuH67HrRLUZfFEzo5DMsZ01twj8yfnP3Ye4LUBJK9VQrF1uDaMjAEVUzqJ+p9d7YV0Q/LQbMvlVxOdDbxEsCyG4ErQOB+iIIAfeXE5vOrNOiUxanrt4DD3ivLWdgFs6Ou2Ktmkx5N2rqxGGv06EnqaO/j';const _IH='db4ef596d81bac717d5b173c51f649b850fc85a20032b18891f22832226dd836';let _src;

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
