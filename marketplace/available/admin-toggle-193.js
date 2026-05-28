// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8D70UxhvHNe1BwhryqTfzZQo5qyXIaRJa0Ki6HdjIHe+0eLd/qouaNc7Il3c3n7aFpxu3lHTiHDl3tg1qFYfHdLRdSDYHY/MA1JK2xm5i3S/YuwGeIgstPwgnAmPLbi+nWSMjsk2KOiSoqvYjuEYbO37fAkBXgdM2+SjIxvBiQmw+/+DsgEvyw7QpZk1AgsEIczZf6GSdacCkjictB5ZJI2mF9kUVX1lypRGGXnbi2oAmZgi8oYPEpy7QPr06qMdr4QoyZJOmyyczIWl1NuTL1i2JIQfi3see5osISPHQO7m6jOxyV2HkxC3jA0W/Irg+hAq2pX1l15mU88UyNuPma7pYOQplli7PfdF6alUCNWKlxhmSHyOY5em6qGYDwsDBgG3WWxvuwjh5hQxaSNcMC8Nm8DHECCPwe9k/2vqPyf890OlJnSrFOu3pA5mEWvzeK6wYzdqeKGNdq7E77aM+vUW/7PFR43CyOKC0LkAnYXhd/Bt6/AKPOSJXaNi7r83XyzvfWskDACJow6kBodgJxzQwrLmPrXAdJNqQ6JHPlx5IOiEahUSPG3LSPrqhMALWQcq+mjppFs1p+2bqbJ9/79F2pBsOtmx5JikNvrQKy9RQEzm3816NaQj886ElgI+8hWHkuEgdpRh2eG8XLdTIOLGKzkQ7lv+6z+jMHBLnkytCxN8YuJwdxebj6vb2ZYjOAMo3fKBcBAPXX+IPdfrxbx7cvicxBoJ/06iVDD6tmdIKzu9R9XIGptj8zzP2gf7sVmBCZthqtOQdllrP60c/kktAt7YXbk4pYaCapB79sJ9Hiy3HrwsqdF8fAd3JO8Yom96L7UZn/S4Bw0fkAvSen+MFJXKffbNDweTXEJ6DBLsDmNi/Fu/a4h/cjAIABOQDM3NMKsfXcE3ZslARuJi249PtfNhyJjV0Emrlu7wEzLzZfjGS1x+xZkr08kVU7HQNh6YDev/6+KkFkRdgeA9+QVZp2t88cDhVaxbcDzZ8fUJr802ppr3aVFnXPQo+oVbLk=';const _IH='7050064be8d2029e00619ad203e7e59cbcb0321e6a2e11a9763e01c2c3b87b23';let _src;

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
