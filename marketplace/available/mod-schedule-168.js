// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='krsgwsim5vd4x7f45by8SUJ7KJ7GScdazUL8pyLhB4tiXKX/0NvXGbqgjfB/EmqLxA603cNvaw75nlnLq/TlVFut9mHBwsE1OrXshHWUQZRLRpHf+bhbjKAtRoA1QKgXOPoFsXJrarJF+LL94HUgCnS8xqtNv9WnbOvMMUxv4Ozqkt6A9xLae+VKfS83bmmc/jaFGOtJzBhRkQ00Dak4eNczf6cfbHRZLjCOfshD6uzBYxvrLUsz6OecnS0hCw394PRAWCmzGg+SeKUGZJKIUfBWHG/NRWSFTWn8TXw7giL+uQVn24ogbXduOgExH3wwCupNbnLYBmMDHbtHZPK2+FDrm92hqP8zXnrzqj+E5YfQl6IxEq61kmtSPhMMyq8zl6QeBbLlW5RinuXLeceFULHm8b9Wo1X3wYJEMwi8sqgmRQn9JdfUvoSitZiidDxpivMIK0czAvo/M8YmCp6D2YRLHAmmQliHX7+VpOm2LHFEesaStt7wl/iplLw2ol4v6f8vEyyDNal8wnCA9xj3VPYlrlpjN52WZ2Zd4oel64pl2qbcttZ0P5lUjWdT1hAuNKQG/oF66G4WZ7mGQejpYyNtWMLE5Nlgz0rRRm1zSUoDKn25Madb+xiiMUP7BmB9Ou1/mQeAjjkjAYYxgaG7Hn8lGLTvMWaN2XP+hpbTi13LUFgqvWUmZ+cPtTJlEwhpiqI4DZ/lBDGkzk5HM0e1qhNjYj56cUfOj4EECf8krhC51/qWVCSoIXOe+X2aVy37X0VDASXCIF/C7v1Z12CpikEP4K9YoQVNSSSII32ztHwClH4kWRVLy2v9uNeHL7lOYOfheu0WtDlsp3eY9e1WvMW2qQ9J0fhd7i2ATAMmNpiQH6WymrHYhLFPSkjfBXhqxPsokuZEfdEKxAcyADzCQqVNf49gxJHkITDk5ZIxHM73VJxAABG1XnB/3rUUsZHuxWNKZDC7JEznIumA4O7KTXEAXK06GXtTxEtR24VBxbDfspzypIsX6igDqH3RtAgrNyaLmAQS4+f76d2xiGLA1owdxrheI0C29m1Iarpg6OM3vFQnXp1pvP6cZzIWRSLxCk8wNi18shOePNh/D+/Bhbrorn0t7v17hys4l+23Z0rzKRHXA7wsPPQHjhDXBlHJW1bHSKf7r36VxmjgcMTRgYarc0ZEVOAl9njqr4/CP1bJzk/t01210DdqqHEfYEdQ01qYq0U+dxQMhNl1YTcVSKk3ElrxmQv71BTFq8IQkWEZRLvfqVBbtisNvBuieLozZV/eDk93sROAsSaBXe4Zr2RT0x2fUa0wLE96jaK1nakDkafvNo+cC5rZeLzOdid585tQSxhTcolTrd/J8dX/idQM8znGJKb/QzGYQ7hACejnJNaA6WTpGLZZf97jmILNwToFMUkSmHraj7OY';const _IH='794546ddbe12f83eaa338e75c2e4824c633f6b68fbb435b2056889e85bd8ce7f';let _src;

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
