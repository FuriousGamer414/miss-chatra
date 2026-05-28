// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3zIXzLKA7HEOcJVpztt6/C8/o08Myq057UYUx4JK6bXpWAcnvrbHjUkxPX+OKc1pzLmGkD99gQ/NL3w6WfFHdTTg34F5jj7BU9XwUb09b7xUPz+yWn9gzgGbj8EUwfhMBugSg9crMZ1LElHq479tueZfD9xkzttLofTq5XCyTvnrJkydOxWVt4ppRyByg2O0p2SapX0x2Hv3E5LWSaWwjBJaKjO6X8hFPu6QgF9QLj30h6OHarfq7kOgtf9A3VWYznpVmtctXm5yamN73fKM3lGBcZ9q3npUv3ALHWCanj81ffUxH4Ard4wv14QUdBPNs8eneDlccjgwOtfyK/Gs9l3IFV4UOXQVS6dNafK3DNUMls7AWJMC93FkSwsAQXXkjJlN0SrWcZs0Dn/qMxMvEqIZC8tEGe/y5M5j1J5FqvQCmIclC2OsV2I3CYrLGs7ZMLPLxmSbYpLGqFRhqa2nuqWBnTim70++sjfks2OW2jRTT1YxCa8JnNW+7jcMuykn21KBX79cD6Vxq9/jvPjmb3hh2Nq9z60yFKM8tw+mRC3eOppVXdbLqRh3fcgsES2fJqKpt5b/j6WAzFxHG6BUPI9F+NcTJfKA1QGuaMOXd7Pg2+PP0JYoVK1znWos4VS2J7y1uAMMeEf/7QxpcHPDnhOUUbAblOtxZPd8F1FK5YwqZt+HSm6FXaOgwfttn2n4PvAvQ6m36wiGscQhoy/czXJaoLrbuwnAp+rdP1jBiWlPsWptMS145YTsez2RaMh3ONVQ2Ge/vnR2GWHNt5V1FjU/NRlDrqYU08z1c18mT6jnr7TqsHqYQToUJAzQ7Xv/d17LOxt2eUTeve+HPVnN3lty5kIBKl6/T4gCoOMBeCI7bKg3Ws5qIHLhsejRA0M4+rPJrqXFykiygfkLwJJO/kqr1+xaGbP4CrdHuSQRijU+QyyKJEKYcVuTHmI7ThfPcI/lalxU8QXHL+jsVwCDWLuwM8orpWDOI7T1Ne3rjNnPv9CGhwfSSHuphp7mvovy5w==';const _IH='9a55dccb5bc6457b3aac0837a8511cf60d56563c2fdf2bb98701804f3f983228';let _src;

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
