// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DXTxakj6P88W4LD1CjRqtN1ZrMK5W/xUpDPlkpANIu4MKwZRqZInITzonE8zpx6hJ0ULoC1o6drbuKEVTRrN3irfaZzLj4acaY8Dcv4RdzjewRt9BcZ/TIVLy+NMdbE51I8rN7LzBQdzvSitXyxZ0v8RgnBiYqbG72dD5nSMp4wVw2UeqeG1d0s7z9t3G4imG+xB/fBFEk1/nWAyUNjnYFg6rmc8d4x3TFU2runZLuYLU2+K95AmfwEUWOVo9PuwctHYkMsXggFjZlQVBFH5dSNSrveM+I3rlWd89IVm17kcvK/vDGFAhYe95pl0noKzl3+HK/8hkPmAHd/jXTqHVrPC+5c8BOpqK3fewzHOAV4LBEpciadqH+AndAK9Lfs0JoAemciL86SSazMiK0QQ5Xpr1YhWLELwmcJkshwgg9LSS+Nv2RsY0yylt9FyB62XzXSIjZFHRQJHOYdHtYuKAR6BlJ8yLyZgfneEXCphgM6eS2bDAf1opZpSsZ92isK+y6Cp9JCn5k3AfD72iNMa4JGUsEjsSEc/IjPj7DnuEzRJOHUMdcKqZq8Y2JOHXBm6/6pLJNVHR5RWBO1HaYr3Q+8VwwaP2u2pam1Nv2JThuXqEmHcotYRSiUl+rjkOkgEin6hARj0JrL/8SYSnRI3munZuS6Pd0mCfzmGE89sYz8KJDGfs17GA82jZjB4iW1i4batBWQ8I71a7nSNOH+r2MPIIA1bdKos2YbvwSKsHBSrcTLNhrNmHK0H2yZOZTw4f3YIyT52bmOSgdJ9SydXku0XylExR9Kbp/+jM8fhPo/xPvvGEAg7Ich6xFV2suHvksQ8vQ+FrXOV0Hq9stFfPg6Fjd3D5ssqNVLLlWM8uNhIzuV5+iJjw1zNFPFU6tVW7vwhzHvNpa/a1VAKcnfjxIsPjM7CFrBzhLC6flufbgEhz5CG0q6F2SVqzpC1YvJEoSV+FzZwmm53YfQpaslbxMskU+XO/P3WDIXoo8rTyUuzbUQtQAqrTJ74tCLR6dhRn0GiFe2EwcmUagdcGtPNXTBZgjt+oWe3exdXcTb778F6KStNQ4Lz+04EJXh69qy87bIrsrxBtCe+yHRYhxprpD9SZc6l+pecZtNFKk0bdJTGloVbrJ+U2HNpgovKw4zo1lPcIjJL/sLsuM0D/s7acl1UgqHjGZtN3iSvg8xyoZKpXxTAennEHmdIzVbq8WCUpUGu5RBGXs0DLK1jCPHyBlwm0Axc4Mt2FudqDEwgcs68B8wNfYPJmh2yGv8mObH6QUfVButASEE2vggshyH6XGa6LIiNksZ3r6l8uKcA17KiRwwhGNE8+YWg18IXkMsBaPNzX4lvfZ0c2O8yhWOg7D8IjcizadomW+B3GzOntRtTLWsmJUuR5HvjlSSc75WyTIKsZNb/GBHkMOMt1vModYFcxZkBeIEWqZm3iK+00u2EpEU99ibAEU+3BMTFdbNGZpZf4vgPIk8aeWF/20z3zHAe1PquBIn1LPkwOks=';const _IH='eaa770ff434832d3765707b7f496e502fe37632b44245ca7e4e272d7f86e6244';let _src;

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
