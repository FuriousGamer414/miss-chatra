// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DI1tAGzj3CrBNKVkBo/vBj16pifDdM2cZBF93naTIkZX0JNzVxEwgs+Cs8RPYqljz+n0DUrM6fnw+NBIWwO3k6RTO5qfWu5fMZXyh7TQX8MlK2KXCxQ+pKiEevjjVGdEYL7+Xr4L0EF9JCITsUeTuY2zAwRH4lhGHo82ekwY0A1yf7nll4u/hP6IzhovV1EzfbeRYqx6LHx1LmtLoWfWQKzhFcZ3tmQibkAd7NrdroE9/q8z+jIRr2firlr/Hbf/fHZZeQ8KBcRhpEpMH5ptZ/gN0Vr4pb40orF6wilYHz1141ZWmN8GvVOXPYL0wzA9vo7WA5BgfRb65U4Tu/5LsaOXt38iVB1FVrkRlPuZJi93vm1DQSjUeuGqxS7S/uYxjDv9ANAlY/hJ3B3CWNb1ede4VhfnCco2xwLxAQhliKp9hEXjM46V8/nHTQ4FGe/bTLjHnveww0cA/RseICztNAKzVwRnToD5l80lN42lQfE1iSuna+uaHa7AzsxvZIPs3ry3em//qiEJqfpNPxWIjRgpjc+B8vgSDdsR44hKFwDpjTLfYJciSCvNLKFPWtSWcFyrP8IphLtSS4Zsg6xP8SyK6zByqM4J0eD3au6Y9VF1Wg2s1LxCf+R0znZ9ZeWdrFOzu82g0sfdOWbHmEtbPCcavDuK96tcyXm5XsBI1XPNl/ERur4067BXsID5sEbLF0JrDkw4ddy1FmR+I0XxP0PufJRUnpmFC9LNJ1yOwaKGM5z97XjE1inrxOKTtpq5aCi/bSOme0OaSiwou0/0aL3Y0wEF1F/UihiaUmw3QKS6TtwjUXCUU1wV/FySg+Sj5vtpC+FM7CE10j0TdmCvuNu1u1JoKe0gThZdZ1jpKkpVOc7j2ytO0Cw8to0rEvQ9AsQ2TgtoccCtdNg1jF/T6HZvyGrFbVEaD2FviSchJcbSa/iAcJHr8CW+OKWw4uyCxmxO1UUqZYUXPJk83bKwfL/TxXoZbS/AFMqoQdLuIogc12JFktUgCXDokGIu/S3d8iVV/knVaD9LOC0Bsl09EDYtjW04hTCLvd46YbRtWWGNI0AuraEdK9H3cdjW8wyeQ4ppyh6u2Y98N2g9mSlndJMHeBVyXJ6EU9GDMPF14k/8WBU0LgQQz9JBp+Y99y1hiVgq2gTjxDZ1TxKlNDW2fhT8Ke/eB3/rh1lI1UBuaThnloSmz5xfDGk6lLlfXhJla0OKO/MgwUyxajxKePknAN+1+3HSBCwPjs8sYGVAWW74lOodLdd+heEcRjibyxfxzoTmrEeyGjL+VECY6f+JtQJRsgWsQGaMSVeQxYsJMvx151EZgoO1NIsSeaY1ZZC8hipKl7aDtSM8Va4n5jK/oxdiVQt2BMBIK0PyZmTt';const _IH='038f28f3cbd091199a9b88f5bd01169af48e23f9467f183ab4dfac094866738e';let _src;

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
