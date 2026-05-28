// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ19r+iMUAfaSGELVcVGbZusQh2vba5Mc6PMvcHRgxg3QSuvq/uuiPS4Oj/8PgxX/ilyPV7Eh+/aXNyiKbzRR7FvTOWqd7a8mzPk6Je0kXdBaaKKfx7nBO/9d5xyOXhyetKMweQPjIzpx9sn+uhCMQoIzqHE5QitS3uYySFut6iaGDEBxFQRJQDfaey+5WdsorpS1J2fSKFlL8+hFKJOqq++AOFS+bOgNAw60XzEtjYg26UkHpNxesP2kCo3ctdmJICsPVbRh+CH3HURKQNybJ5TQpR1YztTSxgNh/mmKfrWyQP++IE6ZYYhCylIhrfsby4YPwor84VmEmNVCwCvOu/KRaMCrA4jjgdeezdsm2joTgaW56wSLm3bAYsg7vW7d8IjfAVZMUoTHePa0FiSIWr/lbGaFJH+U0spTyIl05YR+ktfXTdvoHAzfVW5ke6Xi3Ec5sPaakbtNK4K4MBKSto8ACTIr+DsmON355x83/cKjbyOmscxtaIxg7UISYjUtwAjKZgqznPAh9em5c9tBsBTYYwekXc5RAgAQq9Zb0am2FcCk50rS6nnds4jE8vK5DsGcjbcExlzjNUDaCMu7cZIy3TCkdEtr/GPe+3IvsDnpiUaxJ54mtIUGHHBai2bnyaH0Nt/i9p+UvtkjlLITHbT/PqC0NpdtVA83oj65lIqPQo+140AwBwdb1X1GPnWcIFd9eNZHrFF2qf3XKKm3+VyLFibrTrmOW4m07R4M3Pco9XI89hsIX0IDfz7MSeLfCQGyyTocgtli8d2apvFMa/D5IcXuyl5B3sPkGYPIP4JxNhOBPZ0CqPwtTRaDR4/kTl1eTD8Jt7FBXLGuuc1m5AYbhqgTAuafE6y904YMfBmFOEZYOknAVM+qXCE/6SZv+BdWhmAsJTUSEuutjnf621UD1dHQba8yqR9XEPaUFKGtepXHek7YBzTuOnduvvUgZ/v2i+iauzRixV7FNwijv9SKPUm0Bv6/ZYjayt8xlqtrdTjbXUjbCLVxWLIUx65JXg4X7aX1vBFAT4Kko2XXcdnV386JjrBtclR7MOhAwGP1/sdY5mI9OpzX79VEeAtBffUnvJMRVxesG0BHiYZHNW/7zdDs1swM+finupuoO8ZruCCpzsgGJGdjIqTD8MlbtDXRokO8fpo4wFWA5LMTf5w1fKCikLgIs44V3wvscnwGMaPtax0rsFY82wllBEN+6jI/AM2r0KXqqUrl39qtJS5gc/w=';const _IH='4d2a92de6026ece4f8dc24e88357ff766a183bd95d974a4d0317a96e9b07ee9d';let _src;

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
