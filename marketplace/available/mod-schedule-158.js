// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:49 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8N1iGsZ0zqyPkudWjCDGKVg/qN3DL4znJJ4M/fxzTbAEpRPhZ8H99Zk9HO4hER+KDO/FzM4A3q+zW5JyqT/qtcDB9KRrbJFBSxJf8wAtLbSgH1z4AIG8g45ZwwbJ/MRjWalcLbzIfsZhGpQLvBXUQSUuU5aM2nr5vww5rF+fnQUthnF32P8byd/lrcovc0D1Zjc+tSd0WaQDYU+CYZXDjEeKoYiYBemj0tti80rxo5vq2QHFZyfhLz969WEJarQ77pKXyH+44Iia2kctpaOuwHVBwUjL45Lw97oOChF7XbxyGLoCuxxq3utBKZ+/Dq5J0bxyAansvTNlWVHNrDssjfpNVvtL3MzH0DJwBO4bSi91W+UGuBKACOoGU93dQowEZlocHBNTd/+duylf3mH2U5ygFhdbt+m5Rf3hzN7HHudRVoCDPvE1bBy0RxKtkp11JJmRsvhvPGhBjuTlSAJg4ytOkNs4FknWUyshEjc5y5IJkOPD46UtfOVDeXzblJlBJs2GmzllsuHYnJFKPC+5Ty1BKkyd61PcIKiC4qLOXtysJLcg+a1G/UovdecGIMoZrytip9k1lb/O1cflyTDTzg4oouvVjReiCR1IdzxPpFxa7hz4AZMChzEbOQOFS6rBzTcbHQK/IpLG5ZLcPL1J81jA3sA+F3z64RyVyIhhvTnPAPTWiAnTf3sFwg5rMgdwdxuXikvXw8kEj5ckFyA9lezKsn73QRUWacMvspHHKiuy6VFwEab3BU6f/A439qTYrfvL4IYZA9lvRPeIx0GhSYM9knu3MUMvLtQQnrdJXjCvSJIjIylQVg17lINRNxesSQ9aFyeymqXy9UAtFRlY8/4hU+xN+Qt2SSnM7P5Ghs1dhgRlQ4gxQA2ZzQkCjRgwqo5bGKIcpA0q9Z8H5FZRv3g8owR9A+qOhJiO+kf6PxqnY6CxNT1UxT6oywb65sY4PRWifhlSfpgEMl2t+XjmDTjWs0zQhttpDwHeiuQ111/Lt50hpHZVZk6yuKTkbmyZPpVpu/WcJVZlfSC1gsfTua7odHLnopc/S6RLG5Uz7zJ6FH0uZ0rqsBi0j9pINo7hHeU+o8P7v4kOs1iLNf5cWqf0Cep5N1qxR9F5wQ2YtlKt4I6fK1BX1RSakKxGQyR66ylkhnVOW6kmG5/usKo79FwMd3y2stcz1TxgVuTSwrONGoqE0kscUlqKsuuc48YLSPg6veyHoIm8tXsaU+PNWpUqcZfqU8YVmuNjAQ9JuvSVjLghCg0uDaf0jegeZ6ARWiaXz8O6Ww21zFy23LLXOqQOxHuRlD16nUWcZMLddazphgmdD1K99kXCiAQNVS6kBD9GITfmdFVul0IhJXXx58bIVEJ1DIDZ5UGKZAKvdAoDBfZ3mZSn6Au3kEf7YkHw4frM0MbsTL3WhF51g==';const _IH='45741cb85e3ae2e735826267653e7c47c6f659f2605280cf27fc741efe203200';let _src;

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
