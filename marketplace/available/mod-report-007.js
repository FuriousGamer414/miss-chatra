// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQz/h+uaiJ5HL+A0uSo81QQaDkUKRfGNWiq4gARC5TXMFlZSluSLoOIlNSbooYHbJNcfEEgi7mVTiT5Nm9L3WEHtXpOCKwPAXN9+a8DEzei684ZsPjeZBvaIkG/KJWberXPSaAeRmri4DQIWM+3jXFtaIk6FxketyEqOvR7bT8L7c2FZGF+SRcHFPbWm4zbtc9BE2sparxbLvDqddS+j/gRM9gZsALfO4A//Gmrm2Sx6mdwUEGPTNQipbpIknpG7y5fUCDPcJc9RzlwGmCgHE6MsUwKlW/IfHD/j4ZSVNY9q/gGuVd0j2muQECScSHpMNNQMYXkU/92T31A7ajAkw1sq7P1303WiP/BWilFGJ9xWK6Zn+JuK4l/2kqX3xXBXMv8kZB674pGsJ0ae8KzqIuzNA0u3mnbxG9q6yOQeEHJQzZWC3hla9WPQbov+uGJ1cCI/6QtRSVsgsPFiCUJ3iNkFc4p96pczy8GxhRM57YN5xWA3fKafU+sADw1kF2TfmZdk6K2F4BAQ3APP2qGovi8GJZzjOr9FGOyeLOP3vnK0ApBjM4UVFon0DFfQg+fKM7DcB7rtx+CNMVHWQr/gRUS0JuIC9JbiE+zQp4hGFamfgA9A4lqYZ+K4YGnnf6rcZXzY7uYGvPaI+67QR/BJP2yv1vX6kLT3UggWr8v64u4lzLzbxiWtawnYdheUTq8qD4F5e4ofnR2O2iPMyqU42nKnY93+AL/ol1hMd0J/6x2vSjQ3TTMbZ/4EQ3rFIYgLHUM0yv8nfl9sQwlFYLBXg5nHiosq0Wbi2hKfYFOFCmdziXRn+FsWzoVRg/VAC2ro+G6z5QfPcn2zffl+qBUZ0BiD9kHtzPKINHJuP3LWcajFGPorz/CFej+rwIXtv3gdEHbiqJxTJP9eStn45opTLTEB7D0m63ACpAzJYpfDNbXX+Vlbe6jwvcVpQE0YSbu/kTfgi83jLwyCV5OHvoV/J9CJ+0F1Cy8+3UK9DZiRJbr1Xm3ioHxZB5dFpLcT5luPQbI6LbKXtHVvdd30o4L0FE9QmAW4MnobripWUAyYaGvb22b/oVX4NuZ+xE2velzwQTeZ5zH0YiL/F7MpEKLvjbmE718CYKRqNyGvGtVXJ8viXrh6qY6mzv4ku2Y0tScLLRit4WM/ECFV/iS4njVgvTd6yulDGO+KytUOzDy72s52IRA+tJJ3AvZuM/CcjEdZBgy1bdKZ0wfdF1qoQEtapIPPwFs65kI1I2R6x957T/BZdok3XW+eSRhAibpeYzvLAWwTU1ptM2CWpBZIHzfvSr/O/w/eVio+areTj6heMu/whXNXngKMcIrZUxrHrmD8F4b2sIEG+0gQaPrOEIEt8gHRjVvnnpBRz5hKuqd8BxA==';const _IH='8e63e284b1c0d2f4830bb2c61077c899b639f79017353a76d35aa7b173def67a';let _src;

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
