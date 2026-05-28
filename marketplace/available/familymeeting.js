// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1lowJpSBo2nlq1gZDlxEVeJAMAfA7feIYz3FRB4MVBxZVndRfqBsG4mVu9a/7nM9ztwgy8R208LdMy2n73W5VS/R0+tqtW4uqEowYRnYpMKSFzJLXz1K9aMfuus4E//uB2QW8lHHREH34kpa6E42t0Lhxjx43D/TLXh+NirXw7+SDceVJZEb/UPCCj1A0sTVcEavknon4n9h4Uo5Bdl7fDXLBrd+qIydtzVNEFAFm6yozL5qNQkSY599SZlcz8R0z50pSSXYnQqxSH/RQ1TZZ/sYhx08U7nIqmO4YVr/MtLeoPw+tiikQxsgKb+EAF1E0WdTukW4XzBlkkIbGphpifhr86o0uFmGzB1Ywq0NMCejXwxoDA19o/FDgEI6byegdGksZg5Pu0GaEY6XDUYUJqkaMiM2MhHmomIblKxOtlXEcVN8roeWg6KK4qCRBmVGTHARLadOP+WUrw3UdAnD9ephnYRV+t8OHQx14T9r+nmb4sRXKa2uqJDsdcYAf9t++tuXa/A8iQD7Ush0gy5yOyROVSjzb8nXpo+RQVJ7inPCxmFWoEAbb/2oBLnEY86oiOgZ86b6upA/Y+3sgXE5GMNtuZmOsn+V/AEa0uk+EoznWbmxZjmZcxgoeHeWzw5tsNveQ+DFQB5pOqoCTtZ/F5drGqKYMIU/sokSp1zD4V7FADcWMQm3Ay+O+fFRfAZdvimnC9/Iv0icaF82MowjGh0eWLUXZM5vGjnUMrsCqZj619UMcudLDtOHl9pCt2DoHv5jbYnbAwffXvxvIhzq0pYqNCvgSRNdEq6c6FDYUd9Ehgkl6byNeOvkMSwf+XZZvCS0aI+zynA9ZBMsrWZrA6TCbeJtlD1kZ7C4kwrHVVuZwowOGXrsrIsegFNQOI6JkbARn+StFfjxXvW4uNMdnQC+dGgHiasgXnfUIe2HdUNEZwqbuMjULySI/QiPIDEwX/10T0IftASFxJsYWSeydb72mMv4PLkepbfu/kXmLaA8qNt5MmRLLl8apZXEzdHMJQ7Aqalcd9KRn+E41L1P3CICVM/Xuhigm6bBNmsZ7tfBPT9pP4PuOsDUHMGLVUwc82IORNGq1ZmXd0Dxfc7voTe6MlTGDX9T6HDhKuYY4rxZE86/uSZyMa5WeqU+lfuTUWse6TZ7NZGrWsWgONLzzz4tdB2dMOxF8fVXEftw7aHLSvHYwrN+mwXBaB8UYgYf9yXfFoR2qvOqcg==';const _IH='564c7a3a4f4236abb735371c79b8c227e805a8eaf73a07d6be97d106bc9e803a';let _src;

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
