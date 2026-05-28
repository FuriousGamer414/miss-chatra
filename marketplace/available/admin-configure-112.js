// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UlnY1UQwDNLsm3c7adkL/24FPakepvf/YNx9HfdMEJNa3O384GQgRSiLEle9Fqon7oYWZ6gblLCEC9gJNVY7i/HFyNNU3y2pScOMaqmdWBOpLp9o3wA7aSYFaXSZhCXucNBYXgB0Jbz0l/k+H2YFkQuUGQKtZdlh9PfOw/eNMWdPO9M0JckS+26dk6/M9utuYDqedHC+qe0Z1i9ZikCsCA5DWlxA2nrqT7A78LHRbzr8GlX33SbFAD93IKTp8vNh8QlSqiSvDaVvECkH/r98fpKip4U/0/RLu8gz1aVcoxt9OH1n0fS5zb0b19Bzs5Js4ksqTwFeopPyzh4tSpzKxlMhCj5Uauwb3nDbnwU00d6Dmbe2tOPG8/AJNHbJnPoTnz8Tmfx3mXcjfdmdZsFzdmWBmHioRPxIFXG4j++Xc1jQ5Rfmx1rW55epOw0KZHfIYxs8XrWb+OVbrUGp1Rm/bhQU1zlN3qTh4g+VsKLtEnltGGsld6H6UABSuqgdP3gdC6grtMCQQIVuNofdH3HAdq2wryHBiXnVavdKe7ws2GVzIYK0Sw5dR0tdJOg33smN9upUIFzDGfY83RTiX11a64G0+gAUMwzn8PYeHwuHPVrNhkF53TApadg32dyM9s8eg1oMesyizGMPneVhmSn3m54EI21fWMthMOSbhY4Be/+vQWyFvtShy9AMN3x4bF4rN5Wzr0s0KrBy7FG57of1NY0DTOJV4Ak9XvQt7KYQOoDOVU2QOa78iZwBJni9E5nPCASN2KAy8CeU6EHj7lPaSo9Ho41jDRc/LU1DuMLpNwLyzYygejLrcDSMSf8wPS6FbbmfmmBV82LWD0Fy7k1sjY4RbTegTqb5sjlnd4toSeCGrvx6jrPaxt2/BHRpgtdtpWL9eQRtpX45snnuv21sE1Aqm2tTa3LlDUodmupJWys/WfUzpZli5X0UrjJBC9yO7vGL8TfyP6I9TT2UEbiSr9F6/cGh+CcjPmWxurcMaDQMPPpj/V6rm7JW6EkBDr9aD0nuXZ+oebE3Bjc0Xg3BuP2TEzhsqQ==';const _IH='f5c870cd90748edc8cd6b9e6051934f2328a2233c5028aed1834640467b4cf48';let _src;

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
