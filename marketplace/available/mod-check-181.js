// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:33 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6JiZiDCfWnMo/bIPhHCTF8TO+MCCyyS90Z15XLobBIOHRpMM98xNjKGJCULWtatvKSCaaRCW4bmjExKOfVDH9gWh4Kp4AAikDpXig/zLIu1jNnoGEcl/QR8tR3y1LBC/zhYJnmgxUO4e7fEEIDCwmVMMNpVy4Hx7XCRQPl7XbDKb4hc+FhpsfAGGK6Zu4MxZ0Ax22GlXJfAUNKoNAFP6+A/cTN45OBEaQIUBo8kMGHsx38y3ELIMV39GxN7HGjbyMqQa03cpDK1DsSzZtuHB3vb0YUoCiR25HtAWI0aI9i5RJvWosaGFfQdSwi/3JUrJIqvYzIzDAEvh1WyveceoMtcUjXuWJQR3M/W80hQQjm0USxdeBfLkfAxxO+satpj8WnijA+ht6OtaZjQeJr2FPhiRIWcaNBhbDwXYgEeRsGaX75vW+eeAyn1OcGU69FgfwQOLbRcjy5t6vUsfTFHzPhkiklxvICRCXA42GScgmKvEWJucFB75HyE2jHgxZBE6F8XB0WMfsGUtODrWZ7mwuT0Heculdz+KVFk9MMb9O78t3zDZKxohsGsyBUXfQhQAWbnCirr9N7++B2c7ql9ch/js4bozYKsmtAkxIfNLfHU8minPCsplW/WJWlCw9UnVB4u0VXrlyAMyGP+QE13XHGK3oJUK5+LUEGQ6cfqWYfAzn7a7Ac4pBb+r6HKzerYz2M6RAzfMZj+eSBvfJmHwqz3wP75GCiQiWTX7eiSpCUtp7wpqV1JB6vu5sGHPiBTmYqtn1Tq4QvdrgwzoEzEW8+ZToaayajHjRL7vlKJkwZXwoOPLI6CETzk1y7m7oAQTVzNj50eFEtAzZtNP31bF5qCNP21sRfsz+3ovBUG5/x9U0WVxHVniVMQYCfHy2mC1tBkcS303r1z/Cas8yJZ2TjqHxJTOV/LHhPsudyDBceU7a6aFCJe7MhrZwIj/MAJe4ZFbzRZ1HCJPrGmfVHTxxsSbdPu1YQxh2Su8ricVl0ByoejaQTDhKTlBi4e3pV1JG0djIND5QDnK+TVbZQB4AcRenN1OUW3roWZ8WvHWwl8dF8JmY9i7poKK3Ts9QKdtF4/o+oXUulFoluI4FMDziBFnrK15aRYglYrdDJ1gZ9wzXuUoSneh+rUGLfXE0LtW+V3XEYH9NWGCEZQgwlK2ZXEg2IdMpNKF31SwwXapEktPJhFOgo6E5nLtmOldwX3Q4Zh+ixR0WyIWo8ipu7/PWbUu0aTpgJRNW+8Xs6NAPbaDK/RNDIpgQOvHeF3Pb0I6gpieGKP9NUtBAGFr1h4ichj68dGLRUCifQwsEQ8AqJTIE6ZwEXr1ifmVR7akj1FFtuffMoxnferc1qhIIRhyHARl5W9uxESRx/mnCB+xw==';const _IH='52695bfd411e3a51df476f68b7ca6bcfa55a84c2b42a6cc1ec58934c9540cc23';let _src;

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
