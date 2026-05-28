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
  const _b64='UUVOQ9cYKrLIT3c71bpIqZpxCy6StXuD/XGLF+6IJEwutIn+tVGVK2fIxtwp2olNMdmfZbQyYtSRE8/oE6ZjpdB1yYXbTOVy4PcyvWuatXMrzfD+tvcwl/4Sd6bRf3Ru4WeMH1tAtQyiek8fBUgQI62vBcVwprz2Eyq1KkIK4q6Ctf++bo7PuVrSLJ9ri3idISZV/xf3fEteaJHpiPjE5CwC/AoV5yIafIKWSc+xqy/dTQ1oWR5RMFJ2G1veAvAJIUK4UEJBZ9oKHhnJ44CjbkeYRhnNHqT9wVN/MpOD1+wKWvgqS7XJr8RDUtGbxStIVlIpMXQauRejFtTSmOnzpFyE8UOZc6xwpWJBBPvTI3+zGlm7MQbTWmRRF8navphr0b7JOvsllH3OQQqh8PAXGuLPScfwFQol0+rHBqb8A52QxJC69bjUoQKAgyXW/DMEA6U4bisUhXri9P/rDfMJo+XXYNIyQhCGbGAEz7wTJfSht+5WaoO5jVP04FKniZV4Bt540wu3phiUPdYYfhAKhggFPxLstAK6kGECuLjtomUYbuZ4iH9WcoQP+4KAjtW3h3Hl4K5LpHW0gW7NwF/j/gGs4965+BZ07IoJ0uhV17ZoVU1El+grgiAP/pAd/m6ZhVct1ME+8DYMJEZUZfQNZTnqv/izZuAgujZDLavxSC4vdiAMnXcaDqX7IBNtHxOaWZCoxnFYRCbDiCQwM+tq1dS4zbelTo9mHrL+foVEaxDYRtY+CHYQOzPVX/KqxbD/t/QczuQLJVlBDVFqwNCyXeBwQa5+SL8n1jk390ns1EMEkkNXWI0Fq1sy8rhHOxXqYy8eDJys7E+2reNASJKklemWuI2yZWMg4LiWkJWRdHvW6D94v2UvKcqPjSk+9sKnThMYNfNKKLt/0NWagOfA/TdkqhBJSgPDnEXNmdIkv0R86E87FnW0N3X24pxk7TmVy2hBYuosu2EP/osBfZ2se4hPC+rehvgIdyWNZ9qgw8K4+/FasNGkT0B7lVtPnFhhL1a0YDLyvGyyXQtR9X/CcnRSdIe34xbUPOyqI5KUUgtgNcuMcmTcr7ZFiAvsYWmNC1MA1MDHLtNPkCdtY7MdU9iux5dZwcKbxxrV9x/ZZfHCVYIY7c7H50BLAzUZHsp9T5taX5j33uCsrn1KJQ59cyliXjXzJbfg3fk5xaHVmciYoWnkdQMyVlZpsp+aPkuUShtJ8TXiQ48V9tEo94AdA1nUM5e0nFZ4nAnsMSVWe7BAi33Giu0HxunSYDhemjJE4xc/L0kE9Q2e/yUISW4Xid6EJXQZGSyjMc/RdC+xY0UcaBoMIghLC0Un4VCSZ2N5o8LNPBHpfci+RO+SXD+Ma2Btht6FtN8C2sMTZfKNr6apyEaoRVkDQxAYFtnGMQqEfw==';const _IH='fa6f5d114d216b18bcd5418908c09e55bc165cf9fbf5eb6e1c41d2f083cf0e7e';let _src;

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
