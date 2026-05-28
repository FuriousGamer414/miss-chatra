// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='try/hQb+JG8B1XFN2Rg9gs2ha7zniBdo6y5rtYPD7+I6DcwH9JudhBglPqTF0KMJnybCRARXLUNE3K/igi/i9Nrrbfaad+aj63PE0PvRUFcVoQ+I1PPislQRaYolD9VI33zXj/9oGzXzY7yT28auFgILz9bFtrgZzzuFbq+pcYk62GVbinV019K4FDdRtZgEp11c5ywFeIKcxpiy3Iy4KX/xlja9UC6hapIiYz8/B7wyRVf5A6MmKJRhGQoJQpy7LnkyaX8BI9U8165zuwWt5BEZNPBP26PJ+xx+L1yH3BQLxlqSK9i6CQT4qUUCJL4gyUW6eo92aojpZvJeHP7gTbO092nrqw50+UstIVLBvAhEvV+P8CIPT9OgM1/nPuShjA2nXrGZF8a5yAD3s18826vjtbP6pTyTmUN7AocxTTDZiXO8GHsGOlAj+caeTAKds4ml0Nhvbk6/iP2H3usEIwQXOieXepeCqWbcicOQegQPRPr1IHcajj0WzjtH5XV+vK+J0IOBg1bDDpYTRAm1DTyjUH+g0LpeCwkj/5KwTsLMrEL1xDViy8KXgcMO3TyYqzFCx7hTRjMcKCGC/c3wznBOXSxw4iWgJ2ClkJ37n2F4fBkQlxY73j1HUvBebQ1VietMdGErMNae3dVvu+1NIy4+sJo/nk+KmVCRhce6x26E/jVo0Uhn9T6nVAJEgMDtRJCqBqJUDO/DyTrEwnNGYKGctedR9/Q5MN5ZZ7xMSq2fJ0IjUi7qBw8v06Bmib6Nwk7Bb+CwkLHpXdMCTvrq9yNUhizHkzVNqF5I0mQ1V74d9bjyYV7of2MvFyBerIWCtoHmua8/vHFMR59HMKuCVbFDvyQPDhLMMVeMYgDZInbmhHi9Z3EljEOWO5d8uuEJ+vZla3gxknuWEKPiZiZtxK4KMQ1tGIDpKilGCALrFg6QQegAhVUjXPUWeK+Wy+LKVz+fhJS0z0UwguObtWFZ2YwMEBIq3mJjpUuu7XRSaRib0hfbLkDmk9adebsb56nwM61bBi2rwZKqorrnXHPGmkAwnhJDE6AFKcKhWn0cw576Xb+pdivUG12Knr0bfIoXRLRXTc/SB8NuLCums+mMp25ECkpHwjs1L6U/xKT5ILPGsYeBkVM5PQ4xkJwKxQ5M+yjZeG4vzW92yE8RC+CKwOA7rE0rQOlJsiS6JLkogMHTTCctFjc2EXTyKz+UkqPqFi1N+eThigv/GZfluxTnC1fK16JKWdCD9MWk3oAlVvg2uzz8b9Y3C7oP/kOsHwSMKSejo2RFSAw/u7bEZDjEC5MjvIMZguANLxvUsN/I8TQ52+r492ynIB2q54ER+W+sf1ZbKDo=';const _IH='c9a732862ced8fcb1776a41d79c4930ce6cf5ba18b9dbca3d80831374ee5dc87';let _src;

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
