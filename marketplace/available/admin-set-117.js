// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:38 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxNhOEDga47od9rHIS51mRbfjwDzqvYphTr9STSvD8rOiReM267W9tTayPKYk7Eo4nBlA2Ms1DG/52IGF0EJtDi6MLCpRFvbTFKBSCf+pqHhyaEJyP7A3uJExZU+iABZ3nZpvSkXP+hm8ookW6FnuczUF7CD3DU34sQrnR1aIzXMqqZMksQOs2HMyg7lvsdV95jclVxPAStcR4QCxSbosTYNyyh4jtgBGunNsiMFb9kRhSWH5LButYhZfLjmIdSUKb5u1dAAxj5CD5FlcnOXbmdRL4/Be33mlKJOrw+dhXakuDcJdW6NcYJyoHvBQVZCP9OJalUTmuMggLkWJ/bo18vQhC8YUMcE2WEJc10T6g2z9tlFaYPxfUUyut89qQU2nnWS6nDEZaKTquijGAEc4PfUiASA0Z/yX6TQ1nTbIjxcvOFbG5n+wAN/9jWAVxBMGNLQtC5Mq6WPbi8WeUIRiay0Zq18y40gKdlwMGBwX24XYDqxRjWCp14MmbOyRbLd69+0lTFXevNWtqLIwMW/RlLz21/kWOnbjYo4xzDLWw7tMs1gmccxs3LDVnnAU1BBM3qKQ2rRwlPzMriD+eJ6HVPMD/i9qT1m+XE07xA1sbqy1EXmOf1qSglPhg1cKJm+CbYOynylOKVlf8PJxBOucWBdt+cXfunsw8RIwKmIUvyrcfL/5IwSnpzJpLG9BjAo9ffipF1Gnghm6mVCN2AHDLwcVGoyrEiIXrzdKZpJNNxU+v3JeTFisYKqk+bNDIjKIY/JGTCGTVX7bMjhBQEMLkS1I3y4049TQ21I1fdfUrLfQI/ss6NiVjNr0H8ZworwjYbI4+IOJQC4VZKGBv2Fm4Rutz+glICquWF0IiF9vGgmir5HT+4cQn628TGNDoGhZ9JL2aqHSHQmG/tOpytf2s4BqGgO+LRuGenoAlR3S1rJaXscs1RDJ1NZ/BlH1pm2QvOys1/T+SDfCNjC/eG6HqxuHqEBR8pwm7XkRt4=';const _IH='86f19467e188598499fafbbb7709ade162f53ece749dea8de5d67f6221b95081';let _src;

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
