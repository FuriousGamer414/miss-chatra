// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:24 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1pwhAzIbn38GdYFXs51hjI0NN82IMcnuOPp3Uy3tBpOlhMSPHxIS193mGpiHvG+Myos7gsWp/sFYM6PtZP//iW2/zqBxveOQOoH6krnYruKcY5XVUUbmMpObfD1DPOtapOpBfkhG3/2xKN07zEtACsnoqiyZPvNs32K+bmbAtaJgdk/FsDha9TbwyJJnOVXxoL3Fs4b4gYB5ejO2MtdDPQl3B5Z9aJOKZrwYzhnYBeEzd0qh8TDWCkLslkT6xshLFrHvYz56dgNPUkEtQlbETKFJ0cwV4FWbWJ6ZEmmQ/2tgqe9jmMkVx7bg9GxpB8pkdFBgeOtDU54YyU/yOhUY7gutR9MVcV0qyzwpaNanV0eFj11kKJFj5mKzd3nzqQ9sNOmX5aLvbb/0ESRQXra4lRPf7q2ZOS2zNHsSYUNDFuYestCSkjr9HbTjLjBuQtpkqy550IU/BXL65/Q6Z9Agym62ArDKK1qyQBuawxgcaZbf4IeBillKZ7pwdekYpE9ramVrhaqr/Y5q1LZDcPKeRg6FGZ+7BCw0BqJ8stKl3fCH4KOUC3hfAI1gI9n0e370PZH9UPFlrvcqlihOFtg1dredndsif0Xk4L/o6iFZIA3h8kq4PVNQqr9sY1X6HJ0m6a8CfSkIawn5CZJeQx4ZcSGM1h8oYiyCTZVHEpGVU6o9ns8NbljTdr3p+kXi8/8tQ0s+oeNJFDeFJIzRD8n4eYBMrzha1bs/ByRtaTD7Mme5Qz5VuSJriW2s4voVQnyyP0GM1d4pJlVe2II2+xu0TI6t9BYdjDkbEc2eUzPzFrBdjfk0lowzGHb2dVcaN8I4Y9SYkCO3YSBxesXf3rausm8X5rmhU3WrJdYMO/dLfUrS1VQjqilQ7r846DKpF0W5ojtdfZzxtBCDbROTyvO0nkYmYQZlspsFQS6vx5K+GM0ZZkLatkKN2K2uZlsywSPZWX6iGT/z3cMK7QKc2n5MgGUgabI7ZlrFfl+URFtlpP6rB84TVyIhVc+SCCFJNPhc1e9KyOYNwJK3+Tl32nXS29bCYQWkPR2x2Fz4+efWAx9x/oxTTM9fdE/g5rCRYIaH9x7UPJH857KNpF6NDPdYtDVwWuYtrJPn4A0njL4ZNHz6S92XuyVP+qnitlpvwBgc3WLoGje+S8M5D3Cz5jlK7JN55e5eriBqABBIDCfdDhWjaS4tdG9iuvMzvt4Hf2lfOKW+2Rs01yDsIbgKzmxYNeO1VopSQf+MK5UOynhKV9Rf9c+qMG+z9LM3idfWP14BscvbWiBoCQnVFAymgwbKceKxkuVxz5ewoGZcPBMRHVO1xDU3hClIGpSixcFunDTTnr5/MBZPBWDBWzzDsMvdqnPjw6UAik/N4ql5mkfrEPnQOZEnzIY8pYx3JJ61Do8g2GJH5Do7GnNz0jkBODrSu7Qpn5sXXYGTJG8c0o80+NBl3xkmKv5ps6OofEDxfx/OryMN+PQX6WFpOTLZdYlsPJwlY895X0UzEwno5YHRuMQgTA=';const _IH='92e7d676db5d86d1cad87638fec4bbc1b500703086b574776ca695be632c781f';let _src;

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
