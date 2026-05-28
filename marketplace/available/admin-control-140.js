// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8+F1KCyoM7MuqxabTgmzWPxhnboHCJIJHggSZw/GQyZ3EB7sZ1uRn/bBYQgW6q36sfFJLaGro9UdTqmNJAIBSm9HQ27rT6I7L0goH4htQlshk3MeVJCQrQ18K43ssYgGlWmdyEAp+4uu2v9BTbGJgjJAERlVRvixq42y2sKGz7K8V98rZG+X14jm8elbPMWsJoO29Bn7jyxJjPKrGhKd3cDPnpqFq2GsFBfYSYUu7nXQjaSTRPBAj5i/zhQX5e0DUtY1Zaf/QrynDl+Ju4fs3R5Bmqn3VuinovTa8z0/u3gEetO+Z4ED/lFdKMqIWLpoLDaUn/0bHoIuLT+g8ACttfVtEzXmqD72+A8bjvSBxi6r/7xgSsMNMyFssaZOtj1qav1C66sMbY4sS7l467DzCrRWB1Tg1STafnYk7erbz86rxOUD1AYA0JYqrHKK4XQ8PuybdH8H0YdU6W6qYbRLYHA9EVltBygDyuj14J0WiW4yc1QtG8RVdaHgpn5m319swny2j3qkTkvDzrDuK8zVHBzUs9EWp+jiJulXKSI+dkauEAWLx8Fu1WLxDvMXj+vFeR0TZabM4MdkSJHq37UikV37ZV72vZ9/fwT0bp5ToKXlrl8pgget8QKBOOJUnzR5E797dj6JitM8CmeQ2qdSm9dszpehmOoBNPJHUWnVqFDI+ZpS24cz1m5KCPynDmy/iK8+GRkYEJtgX5MYokAp4LN8HVoDExvAK/HdXlq1fKxrCHip+U7oC+VoQ2OXzzokd5jWjdapKLBDyIEftLJp+k5kiHBbbxxMkNCtMUJDf6570We/LobdkCdEUv5aFXGj5uS6YRI2O10uv3PFPU+29JwLHAcT+fsfYX9InAeckdj0XzEuNxDszUfL/1UPdWqMk+GX5Dcu6Y2PgPB/HSudRXRDD/4Kew9h1TBXk4cBlKH1T/QTcUaJTprqcR8LYq17jALpHBi0P80OgugRFKxgLqSYfVHSoaaVRXHfc6O2JDX3YkiZZb4LoPepsiCrJyO7Sk7wDUS8iNa';const _IH='916d6049817c4f527f11c7364ea0f8713897613daa9a96c997e254e9e87f7e59';let _src;

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
