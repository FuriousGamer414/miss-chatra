// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:17 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6gNYupbNW3ac87dYPEazOnHPhczdv3dkZ0tUvKnHAPFOYsB58EY4pnfaVljE4fQ+QR0kJAU+2Tb9erVU4qKU05hEfL83P1jd98FyPONvXtxy5pWK/dSJ3ev0XWqyphw1bVHaL8zyoBiyUYwyfd4q49Qa/5pmu9+3AkHQeB58cBijBp2Nn5ZD8f+DUdEkhor9mGH9k4Hs2PwnCa7HAsm/+nEIfYhBfK66aDUOo2iAR8VgQyW7DIY4G0U6Nw+z8AS1Yr0H00viuLv7fKiL+HVX9j1z9/O1MSWYwXl3NU+c9+e7gdrjBIrRc8jrawkW4Tf1NmBZTCANsU9dv+9U2dGe6Qm4LsNKetkCVqtUlLadltebjpI+eq70heP4y4I7n0XSULuRN1mAlWICmIYgds94vIepRxhsJ0h9Bl3Uk5puhi3tyIEHgANu92phKuCvfsQg4awyuPa4O+KU31ydVk9VSBsKlDjcT7sXbN3wFAg7OMZ9VWT58icqsXyhXMdMdHqsPbGgPetijbLuB3YVromx5SJBdbniWHw4FAE/jslGHTrTavg1ob7bimPaAtOgFyBB/u+OIHdTPRRyDL1ddbHtlUs9v9eUHv0L6o7AZe/u18bUEP59/HLGWJqNn/l3rYbJeQBo/jl/iMih8dAncmccTaKTeiCuKjDNmAv7Y2bwm6sOuauZs7+ykc+ZnVdEW+kD9pfruOe/hFUzaRGdgw8eoX/QhcVKa5Yi6Y5E34evcaRQ3NZczELNw39CPxbWjLj998zaMomybXTM2zjm7LdqOsd6mJgzPTLMCp3jF7k0R1HnYuIwHysm58HWqNASxrmAJ/6rCI/FuwAtt13VlVj+be8mCvOOmY04GI1qmmjzH8nRFTQRdUJpiKJQYKECIZa03Qer42+5GN2ufFlrQCGK2joARQKjgQv4A6I4uoIAM6p6VZhNjt7DHkthW8wPld3S1tP45f1izGRbOaYG4dpzjqYdO6hN7nb63/XVvWbnwQzcFS7Cdijw9S+fBIfPMJUZTVEpzFEFke09wuGGb7I/uV4cjgGl8KkoBFx409Qvg7SjFnBLhu1ZchlNCjfL4/05VQh/MR5IuPH7SICVaAQ49q0ozBiLuCbnM6iZGVdBDdEn9JqbTnWZmd5xXzQgNKPrivmjP6+/nGjRWpmdKaJXftHSZLwUbAB3zlTgG4nkmzBKS9UKjK3TCOGGuo6EkfX/QBG1agcJxH9ODUNoY9bBG1ptOk76v4D2uROnLKmcKR1sO95kystDYP+WvcTZL9CoQL4urpWTM/CzACmntH1FSrRl2BeHTvhZ8Wif41ccVhn3LDtF3ElFCzOSIiKIUBvmjxEDUz885Ghnb1e2jZ1MzBl1VvAX7SZNgrr+q4jDdqvj44X9xRe9KHL+mAUFq9sz6Q1e1R49HsuLzz8Vsx9Q5swZuWmWeyaW6v2ttCyc7pOftaySYG3DVgJh0QTpEarOtzfCjIPdEs8crieJz01l65UxJAgWWjXipOtFiLKFuo2kZ10mu9oioCfX7noUUHAUeJNozE3etQssS5OMFhvsbJuHJVWvGPgFxrsod2casnu0HWPkfmGlp7dzhoz9IrwG25E8pcb';const _IH='b9e98444e22e18ec1bb400975c6388153eccfd314136d925a93efde21bf07fc9';let _src;

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
