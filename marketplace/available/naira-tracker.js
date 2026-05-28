// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VXGblNekWtRokY+ZQ0CyVrwsH80TIUxUn3ktBnBtnuYdOoJUzXg5UNcjoYqLxFvhBHd/sQbv9toTl/oAwprQmBdNT7LlU+Td6AluVzRTb2s6Je7KVAxyWg7S0mq8mfRl/u58uG2/sietb8oe9K2vQu4fYRidoCogPk1PohpCJ9lUiGIRkMrUE1o1WRFIkzwuFI0iv2RTU8XgdxlwKb6mzlsizMy6Ghl3crHcl5z/efVLaC+Yg8kW2vk32AdI/+hibeAjMoYKpI7QQqBCVxLAbdaoBjHMrG8iFbl50Dr3iM7M0LY7HWJ8s0jWjDI8TONBTFtdvlP8os4v/4DDzQK13KmjMOrN2pZGBJGUqOIW+vCPqg4wItT4s5bemczsPNT7n1IdBMsYLkbOKKDcs82YqIankAfLiEwDG+8S8BOKOkpZtZlmkutY9eD4FI5mSR7cjXoM1v9IlZI/QUCNY6njmvN9Qge29buvIVVCq5nY+2jn/TuoUOXLcCJymEqnEk58Izh+o1DQbOXiGKSluSKBsNSQ7xZiCuJZFk5ZPoUggejLuR/gpFmzyS/epuo+vF78tkeCk2W1hOLj8g==';const _IH='394b94bc1fa574cd97b132a78f1735f3fb36f3b4e3230ade4f4fbb2ec94fde4f';let _src;

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
