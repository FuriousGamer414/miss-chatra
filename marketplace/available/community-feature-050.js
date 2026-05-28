// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1PmzOhy+VAKyEElN9co/whCWHWdsJQ3XmXstZ5TqaKMY4R6pOXJtSOOe+Ar1y4Sq4t/b0dZCX7XwxPGGfyJSVQFmDECH7WP/F8xPtWBScQUML7LVe86ezRW/C4MIe+FKoFWSITzrBaYBqu65qv7l8HovL8P+c9UJlW+GE1+3Phau4Q5MngrOdww8te2sYLz1lSMTYMbCv7gPvCiYHtPjoYnh/wAgYHANmiPmiu3NRAEWjI/tnxWQ0jG8ICbBaMJrVn5+tRhFUg4ZMBmHzAu/Q8Se0hTF1nCnMC1DsXX/7TRtXkcfkUxD9lZlKKZYV2wbsT2Cszn4hI8BTzZhm9esOkQm+ucjWW0Jh5ZRFxzUtKyv2m0h97IZRHF22mb4rmE7EfmntFh8/BzYmAGVbeLcxipON0/WcSZThB5U6Qa3/BwejBxEZyUo65PWJJxnyHXEwv3spM+Ytwaspk7jm/YyUe6ATGKLp/XDnxoRl7Dnn04EycIwfn4lf673tae4M/aFHwZgzsgsZkKJ91pbUUti+GXBf6rvjFRBzdbgfr/H9z6OuWPLi29nKLZRj+XrwM7IUqT0JuxDc8EQSk5hTHvm3yFPXjf5dYiUGnpBXeGTJEuq681+bw7NwglHo7KXjHCdRKajBvuKkk3gW3rptvxjeDf1dYvosuh+rPLKXIKVnCRyVeOSaw4cmsAVGcFsfEdnX1+WaWGhxSEFtvW184lFKHqfxpvLcRc3TiuBwz/D+O/smcsKOvF';const _IH='27e8bc2eda1bf60234ffb321f901c3eb4903dd30d200eedd8b03a45336ac1664';let _src;

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
