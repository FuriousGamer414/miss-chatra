// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ip+a2oiK817lKjlGgCds908e8WxATWqjoT4J3M8axth9CDZL+mwmQFvcXggAMzVWRdjVZ6IJZX+z58yEX5Lc3QRBYvFfZsBbQBlxBOmEXRo3lIiKFw5NtVjPOU2/M7/yghh4hRhG65eTK9XORC0BU94jjCXRs8wRrMZfI6ApLTN9MVwm1qWlZa8Ks3fo0X8m+lAFYtaI2VxCPQpR6f9mkD4AkS6L+3yJdgDOeIfsNz7BwP1GpQrmEruuZ2FeTFZfMCX9VCC1bBsTwt+DH92vHtagVGQNLSefgHi3xv2WB4JlwS0RoPT4qDw6g2GUS1i9QPgmA+BbfU0UEVK561zKrjpCvZXoppm/IyTHw/UeCwvJR01n0U42geBf+rEiFyHXlkejbHaZG6NRsWnnwMzjttdUCr1Eda7aLmYUsiO8hqHYA5SvaWPOJZPY8cKQOSYTNTHx+TzhN9qQTYMU6Ro0aqr4aRYv5ctmzUe+b5UgLqk7yXQxZdJYSYOUC4tr+gHhaWX3qD5ywpkiUaF+akGLX3t2z5k63dRSLef/uV/w2IRdMFfoseeyRqasbS8//IxahrYu85ylLOarPP7YFFtkKd8/qydECISe52W4hsYUhekzZF0ekrS+lukQOPBmes8WW2wEoMDZXX//qWUNTB1P/OKy/AwVF9LdvH3iT4M1mo5ekcNvyPvr/P3wS/oVZxC0JwPekUHekraCZy1hEPa/eOO85c68o590fkfxUGYArnpzlnxwSs4E3SfTNfXdc28J2FkhU9mAPuNqecXkJZrMHnzWp7F7mLMbIPzOCriJV67LTay4Ff4qXjv8jRvevIlFV0zAJp8wHrn7tsmhtp84r9a3njflJjEWz0DQeFjD6DalNoPLycUiFQvDh7PFY+qSLDU3ynnCawV/LuIkzguMyX/B/tJjKStHbYHENmZ4jNd2DR/sAzOdwdl7+zFfNchunPpZ/Go9P2Rr08YlWEVBNXdOeNQn17Y3YbJKMJxOKDIwWsyck+eLKGISghwhJBYldLixxEnHC/0=';const _IH='6a11872ff516c8078845365d81b2d4580e5a412c4c0cb01bc30e8a9844e6ffca';let _src;

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
