// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1LLMij1B3bbwU06k2uvkYj/5pvUHN4JsvnEQa333F29oeLTbXZpbOGlVmo0oOEoIqhy+I0jGeZwVI7ExjYQMmn+LEJyCCovRm8JJjy33ixxzMxKj2JH9Qy2y0WbIksDfa8WQ2GAuH6Xaz3+OUY8M4NjZligA8DJRvnT5BqJjTOi9L36HpKLozaNe2oHFXuMtJnybMvtIkn+PedpIQKf8YxAE2GFjhYhbu3S6FrhsRcy4OTelsz2z/n933VZ+vV1A4r5Fo3HkURMvkZUXHvvyZpGD6P0bW/4PTPzoJ19E6lPmcuLG2XtigwqpApbkCBoJlLfupople7KIdXn+g6jZowiZjgSVSFKro1hh4ETqa6WXsUALUVBdx7fAU4AVgfFtcGhaUude1VSb3s/In7xMarJNcBezoQ1TVmLPyHS6ss3n9H9PJ9yHqnPFlInrvtSpiYT/T57ZKGqcpmW3glPoLq4wK4nzmT1N2HoZYFdssz537oJ3x9KPyUPCez9n+d3n0TmDNOd85EIHsDEjlIS86MTlXJxRGqEebSfEz4uGDnJt5ubWujRlZKJLEmXL3cpPZMX6Sk2bRGSFa9lAhqgef0N6m/yjyJ5+m8AqoRZY1HH7HyuWm90R5oyY+TM+Yv59nuPua2zY1aYIyzC/980yLIxxVLIp32gkw9mrJEjSRUafnr/6Ng5whF7X70xPJgu54++ssi5S7hAU7PylkBqn8Gq0YSmkMYJzIq/uLaEQj4YD+v6+tNtUcTbMeaHOgrbTm9KuArwZJCXa0cSOYJzZvmSwSMacO1ym2et5R7w6sGYimU6bouK12gxSjY8zhBGryV/7pSdaiQ4kJ5D6EcUqaJd4zs9UYylkYtkKQjIPiepwv9HUBlO+gkcAPc+okCjT699VZ2aaiuGk5UuCdTdaQwKujvTByYt5slnk4yW26TOx9/AplxK26jrh79HTWEkEHn0WQ/LO8WoxJDMpBHnC/HcTtq1/DfOx/9qtrPAFBO8EJ2syn+5ohNB7XIJtH6ICrbNzAf3W604Cb9rd4MgO377N5pHniB1lPjCIcqsaJSoAgv3w5/3q7/OKb1izi5WNh+JM8JoBIvbeLnBFUkdKv9mP8k16Rkay55EDx7mgAoAE+EMx0o0SE/aIP5d0VlivNHi95ua41nJ15YKBisuxcnLx2pTMj2OCubsUWNpUwKITrAiWnVUOlad5dQgl3mAEoyMYBor0uwGXN8NIbzJSflyapG9WOzZtaAS87jZLApVbkbJ9jI6Q6GRsIhrHwN9L2QcxudMWFOAfVz8yQLOs48f5wXEuK9hmjfE6JV8r/NKBukimJL44QkTIjjbpnHy40S9UG3qupY2Eeo=';const _IH='dd7f14267f7f4454f90360cceb19de62f029d4e314122403394e484508a310b3';let _src;

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
