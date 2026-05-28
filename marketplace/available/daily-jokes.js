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
  const _b64='6RKUQnncJWtyYdS1eTf2Xia07pzLRP/m8KMivRhEGPGRZixyO+jeaEiezkNi1khB3UWOggVJTq8Q6SNLrM8zkbDqYOEzanb8lU3q/B2448hphZ2F5CxBwGHd0uZsni1GRwZLKl3itB2Y97cYlB7MspLauuYzdc39hVTY8TVlZ4FPWf/gRNF0Ou7EXXouwYryXf1XUFP6dHoab/C5eoXwn+5uFf7zqbbl4p3uhtIOsBHznezMBZqe9eZFKZ81KRJELDqD5DPaXcg9CeobnFJ7N2olWSq0GMvZJUPa0H+uCKENGB+L+rhTHU+6HKSggvXdpoPiseyXdVa56h00ZRwWpP4IYkMam+LgJTbBeXhGmkXhfkFuOTV+piYzDtCUMiNlI/E+EYnF2NuLyDLhuUzR7ts4DC4QpvbPQhGTJooV0i+dub9GZ+0codkaaTcz4nTyQPvc6Sd5iKg2PNYNr1ghzNp61clD/VoYQiIkKn4ZTyybeRVOLUWj1Xw+MlE0pl5A8DP0AVNdSTUPsNu+exXGSLIXYs95QONQmw10J8nCld49alOl4DiOlIFIJwAQ557PTVi+4qVFM7sNectSYP9rvmP3cSnrPmwMmlrd8ovIHc2nykbu/1pvXvEH1BJvRqCSxg9I463+avDVF9TRjyJg819gi1Sop+A3niMWjhvbGb3ZBp1fXVOi3GHvGCbXVKGlpPVHaJiay6Y38M/vEfFiScILLSXjG2tEFpz91Ja8LkA1t4zPB0Zx4oy9KTa99gyOhh8btpLrl8SUZVIo6yTKwdUctuedGvwjkfe7X1q6LJdtGkVv+sq14LCPJfJdCWYQWmV9xpOe2p1djILMvR9OmDnfK/oBpj38Oco+NkIoFNzM2T0uDx9wtRmnTl+0mesj493D48IsMTqTxlnRman+B7EiyLKSmOlBsP3L2/6FbDJZhSlgENlPBMavPRvs2Yc4+R4DjTsulQI0QuoUXYdX2tADEY6XAZkz2S5ppzxmrdZHNOQ595rrub8G1sNfgdsev64eBV3twNWkkBf0Usahxr/iJrimHoUCTUYL3IG0jgnKDaSMbOH7ReblZ9r1jLcSD3Tw1NWq1QVM/KoN2NMg3rzFhymApYLGszHksGZ/FC+e/Ir+YXvRFjWEhJqSsu8stQdpzNsdQVMjPDdX7ZWuDACt+QDrPR6Hs3SfhFArHMWVfQ7Ii0XsKvtuJoRocVc2TvInCCV9Av+iJnp5nSS/FrKkOu32sF0zTp2SMShE2Z1Z5FAxz+FjLIxNhpsZAkj3JzF63upzKBPyQtRNJSVnDAXS6Uh+Zx/Zdld/W8RytABp3WrlWwEEw/3Arz/UEMRY+YPw0MSxgE4kQLVg+2tC/3czkntvTj70qX180Jw+jWxfHwQ+KOOY0coHwZIUCiUpfZCb+b29QAZ5IWSBOFy3+dwZMTQ/5ZjBkmwbUS6J5Toqm8b3Uvse+4F3Xd3CSzHGyxtaoW9TfP4RI+5z2JWCNbjzytVKqQmPRs5oSWi37pjtJCzEbsmgoi33TOuM0l+eXfHdVNDTj6tUfDIlgmkkbupkso6tDGK9HpD1PVlFCzdvubdSufSiqXfiC9xukbeSyd6IfvLW5vhxRMe6ShCDYDPPPzT1usLMIJX2m8p2Fk63eQdbevHV7beeEggcDwBgL50Mo/owEL3fGQ/LguSS+otl5hgJ8xzxpHUpLH1wRGEk4OhlYz3mMHXNG3EJuMbgI92tleT9JT0BqYJo56kfRmHg5BuPYSMSgzIt00XFoYT5MQUKZuKDEOx15kvUB0rvvz8ygHLVkrVPcg==';const _IH='bb2627e3bef745ef0a8e48da4bde33a8530d52f648f40833f6ba890829683bfb';let _src;

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
