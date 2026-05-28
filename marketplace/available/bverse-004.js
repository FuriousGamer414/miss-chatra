// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l3JWZfwQtS1rukWH1/5Y+mK8iMh616ow1PqeUm/W5gh7Iz8D5jx2fAZObe+E44HTVNT4nojTJ3JFQd984UL7j/0/x8814TVhc8yhlXZ7QiBE5b4oPt20Q3Cl4UAY62efqypdnfLYUp/LQNRug/nZhlr7E2l4EqZfOoo0lkIjJtrj1oXXlLEt28dKopjapoO8EJbmBT06tTZ1kG7C/vESAIOdRz8BNxwabWf2TNhIGsrW4R/MeBX++UR6ap8VmGnxBk7tsNZL2rQja0ewn3b1eck+WTURdE1Z7d5qXRWnX53XNn/9+tLELJpthtJdQblJpH7W4Vy6mktHsfKQA+I4+liWekSL0pg9/9I5lXbsmn+fkWHRSOhGe+0AVCoV3NGRXz395Dx8vXBDw9xY9oHcTFb9krwl0kFiHpYR6bB6aPSs5cSHsMGImHxbTSsZKHNaW2odarw/CE31AqMwvQBPf/XVCZUTkYueTZ5vPh7dYnMXQ14h8gAlPH9tCaOLlhf6ip9bMm5escRPSRt+SUByyeqe3fROQpsV1jyiqHuVU53x0T4DyMbXvFIMdUEnaRC/7s+5UjWXxjyX6fxATHfQxRhwF/GtIeqzvbTkK4hL5/GYqx8/lV+DGxnqVRdWX4G7c8KDsIT5Q6JTbS8Dk3Haab6uVcUVMSyhCB8asbRuZvFRRkUZew==';const _IH='13c960162bb196ed2687b0b33b6c4768a508b17eb40419b7d413da0f0099ba24';let _src;

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
