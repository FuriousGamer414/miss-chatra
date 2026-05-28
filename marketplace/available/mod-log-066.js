// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ZAZnaP1ORW0nMPsoNMShXMbHIvJSWvy5VRk521eCLX3Kc+oQ2mQfirgTk5kUIRwdBz+s1efOAd0o2d30HaiY2Zv8otLnyka1xUGbF9xrWFhoxPL3B/yoSrgh/nZ5dRGsjcC2qXSkZEQ8iuYHS4q2EMtA9X2HlgHq7ft81FYpfHWXi2IJ9mRaUkn9ykDzk4Gc/88vWlv07xp/A3FI/gUFfIA2E2CQJNvbte7waFbjsDDtK0ELA+XUn3m8XO0CgoG98YPR2RaA9iYhFbBMiEy5TNUIch5tqP7vUHGO+z9CWrG7fp3le1WCvsKE9YUBMdjwko7hSkHj7cR5QXoPuCwLYZ6/KItnCATGN+T8h79lpIxlUrz58VxmPFQ4T52sJqyqwB1TQykwkZH5N5+jGgResdFmld1G3UXdtgxvY975/NVPl3ZIUlgqtKiE+1kuomP9Bri1kyXn9BpmKIfSIPws5n+ycuA1hHecjXHECsx6yO3gB1jspg7SD7pg+BDWi4cfChAIf1CUGwPk3aj1weBorP/clxpqCv1YtC+/+y3dIfslMaMip+bcG/wjGNK/17wvZYifk+/PISF8GFhu9lX54Zz0eIDuoUfPyaHXd20i060+GCK4MplUSPqDtu7h6WlJEGRsZDtx17yRmEt2j1zELODPtRPWyXcNAmmZrbJT/WI2t63+Q1QfqKABSRj3Ajzq8NGhd5VA5V5D/LoBjCgyll8P5O0LSFvlAwDxuj8ffmrUZ2xdbpWUTuBvLgXd21XRPl3zrcDFkrOonO+51fkFiHwnuic1c4bbZUBntjANI3sKR/gwWdwVh1a5Z4xSg7gey74+YvbTZNpM0c0E7QbrYqQdyWrVuV5x1dCju2ioJJ0Y9/+iycZleXT04JgLImgwCqTYtuBbLOqX2oh7GTemjwIJGejs9YWx7Nri9ySL45jCwThWSb4jJaAPtgzaXS+9TMUTgC9+au7Kc9xAoA1+SRavKaL3gkFHr47Ax71aCwweqFEwLT4ppAvvkecf5qgZ2ZtNMT+gIRhqTm9CvdriSBMofNGelplsRYdz0SgiMhqmDuz7XlOXArl5+CNV9JEWh4KenPUXqYqGQvTsSlboznm89fS3obKm0WwRA2SFYl+AiRkktaKjmYyMna2sbcRyBiuWr0lirRPqzxBRspPD+d8nl6alrHefPMz7T21DTWx49m5PwpiiWpztx+L81The7d7jXDq9k1IrfKoOLipAHb/U/Q2RooOMFAc6VZYj6wk00PajinFFBSgB0g78yL1+Qv3TiqgjyOTpjidJpT5tf7A8QIrx6117H0Lgfj6wRlO1VmND5y/f+5N7fNJEPe5h0zJFF/k=';const _IH='907b38411c8ead0e87db158fae8f85531de5d34d7a26249068e9f96b2703c154';let _src;

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
