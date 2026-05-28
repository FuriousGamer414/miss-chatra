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
  const _b64='UUVOQ6MNpU9yyal6j6UUP0fBUWcDPzaPJMAGwoa3gAHG4jng9gtK1knyEUmJeUQUJhVI/t7g9CtNP1RpY9SuQZKdy6RnGySoJR3QXFp1EBNC5QbTq9Pe0HS3Sv7tlFmCeNuXqk7tTJmgV7syQLGcghgcj8F3Yv1Z3PYlihV6/HvnWY2G+xPuj1bvXoXW7on2s2TtRmFGIN0ZGKAJligkyQggAB+eEqrNqOvdd+bTC+TbsPW76DYhfYuzdxt9HlC+PlIJNb5WcuAwrAIA4AdcZdOcwpjcOVvSBeaDP+EWOsEYwolsYEALy3fLLi21Twpao3xt5vJI+1R+jMfaKvrTnWHXNsQb7/9QPzrxiUjwmnaFLK1pqqWpfzTV96n0e7JknHb6O4Syqo42qqBZV2I4vVfoGa2kPTKYFEL2lhuKR3XdXR4otfpCnXq8XMQnR4V3jaBt/GkfcLXaDSkYhwrT6l/gM2cb+y2VcYW7C51Pelylmv8o5dqkD/159T2QcOO2HAL3NiOFOu56FYeFp2etiDaqdN3qgwO14D8o3pV4KxHA5higqsSyoizbLdx2gxOpvbwIVU+jqpblfQ1Ckbl0mb2q9uIDH/mIPKVX+FmpuLOnEqpyQ8arQkTIB98vRKn1Bk7vFqbOk90YNltnSxiWCxy7qzIdIo9LoZBrW5Mp//5AdyU1yR0i6KXTTzB+NjZVsTyPYsdbzFBgGLs9iiZjXJfBTtyp+KPbcJAx3GhE3VwqpnDxe0kGDM5Pi5C4R7YHn5yegT6dpXD/K5lyHsHglYZYPMNKALceXtPQeSsQcNp4n6/XYenU/PX5TQmb0d28/glL34qMw6Tz88+l7cC1C3GENr21tYVEhwBxTTZoHTR/oaDq5iraBeDTfagyJxXjYTOHsiv/1yvylx6aUdcj8dOIwGdvhqoamPhmF+Hq1Ei8AxhLtleh4/9/QkGc6FKf+q7DfmwIHwARbX7Nbdgry1pPEOidkDQhCgaE4F1grshPBXKhbq/OVWWsqNl6CUtmPjIYU9iD7UnG99EfeM7CBVLrnM83hxfqb/00c8if63tnY6uuV0S3reB4Uh7rLWpWZ+76AOR+yV92RySxGYcCek0gbdK5oS+hfSmxc4X/ylUyaSWz8QCNp4oZzJJKO4ofemfaGBeDdghVa1mYnNisvtIsnWAR+9ncb479CgP4853DD96vpo87cxD+BkR29eXAKGizkaYtwqFbRl1Fy7bVjO3tudRqJUKJc+vtGpbHVRCIqowm/0oXWgkZb0ChbEZJaHZSk6TOgT/A/6YXwItMg6VOhsG1ReXWET8K5M4Pkwy3zmCb5gUD+ne/divD6mdNvoc5z0zSUxEFEVWzjNAfC6ODsHiuki6av+cJF+o1tsv9ii4jAIwl8KCQcA9lzy3mwz4dYMI3AeFCkO4=';const _IH='eeaea9c31b08a94becb84483d8318f86ed103715c880b16a7dcc040b59300b7e';let _src;

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
