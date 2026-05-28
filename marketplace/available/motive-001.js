// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IP+mZ/dOqYcFNWMIUaEnpJuEm/Yg8pkHxQZPLXoIVnAV0RSnVMulbPMrHxY+ze3PJ4ZuzYhniveUNIGw1xZuC73KXXXWQF2jFwoLqnGU3B3s2RJH8zkF1JwbIvC44qdvSq6cGVnZctdiY0cn5z3AEygTzRSGl2qbMDics/p2Ra8k1ldTyt2TJ9aVwTPXP9S5kq4/AbM90VCJAjuglYRsEjvv/Vrtcq94EXoc8oOomNy77BMIjWuJsanmNEpw0oI729b+zSGJkqQiGWM3uvYmYUc6TJqk2Zp2+Og6NqWmwKQZlWkGhRzZR/Ca0qSIH+OfhmJ7F0i3j6s7/FA0mhoOBlQl95ipGHQoTAjfSLwOAx8OpvUm5fVAMaC7vTpbbZdB0IkzFOzbv77/OpQVFKOQIEchhme49wNVr8BEGDEPfND1i6KhgoGfPX1p4oGkYByKjpPE1z7lCO6Qydc75jnLMZNubBTKNBpL3mOFWvdLDkPZGtqnJlocjnrTTyp5iVqShRLcisWFZ/RrY8CKo1BZgqkKc0Esgwci+z0B86yeoKuR5jE3ZmgSuIDl3kGURR2OhpAs7kZAphh0HdpFpWXwLpPLqPx10iuT4UkPqz9hAjcI/nZYhpJinXa33DJuXkDo/DVzd7t+dP5HSKhd2Fru6dqDxjnbYDswGnXFqsETkNm1P8oWKuI+aeHSmvolO9QiL5RlIPDxgyN+XriKqDBKUYchIJW7kG0P7tuX6MoEZ4excNmUb4om6oue+Ks9UEROSmd21D1AIf8JjKlFPVsmC3IDS2mnM0SrnUzf/Ueogod92H6hcqruYveZCNRfYvsC9KD7zQHGJZJ5/xiYN52tgNOLP7Z+3281T4K8Jud2zS8r604V6VJ4wWCwiU0/OueR5IsSA+SBHf05ESPBihzz/4ZSlKh74HPIB3H80GvqQrjJi8zi1SJCU3xBfvXnLRPdrrHapqNXTH0vK/+yb1kW5LQ1DTQSwj8YH92ku/4ESFlyOf8DADEoIy9BosjaJ9nsvXZdea1WJxJwUSasnWg=';const _IH='d1155f551fbf1df731473b0ab39ec9f0aa5843946bc821ca5f9f16c50c249b15';let _src;

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
