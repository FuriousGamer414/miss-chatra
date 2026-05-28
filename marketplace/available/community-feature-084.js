// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8d3y6LjWfhHgYntiWdSLLeq5aK5QvRlSeJl6Nk3nn1SYXyJ8t6HdLu3YHnTx/amHxU5RkUzsH/FTUwAnoNHofVR8s2QZtQVN2zdTfySAKVSc9t9qKF00f6BI24dgQYDkQPy1K4U5RA4YU5l/8XLAvV4JLKG/+5hQY8v+/uhWS7SWPgg/YDWVpuHuMgeDXYlJ8PKFYVG3HZhvwtRzHZTFjunP8r+kM2mj9kZk2D5vrrcZKDhjANykDRFYaKZDG6rXiACEwNbhnXFHw8zUtTmb84EYZxurjUjrIaOnE4PVdgm0MfG21xthpQ3LhaUyZh0/JqWPAR0j/W7rky2OqXVvsEy9vDD8qRiIcVX3ZXgL1HCjx/5VE33S6nann8WXo37qL9akS4pbOURqh1EeQ/KmY2mGQi9f4dsda4K7nS6P+h8MeQTDWb8Z6fUdYf9ZtDM0LuqHJFiYI+3kZD9hV2UQCE+GIC5OZjZteKLgdOIcosM8j5dP34LB3P3+a88d1z7YAuQsDwnqlzlXxLCjKF/rnGTiMJP7NCdFe/dQT3SYjeJ0v3oLaInfMnpeA/xd4gOQQqQwusnTCU3xh1nBfwp8BNV2Ql96Xt3a73T+aTJ5J6StXIcOzzYm2tnjrWAUhrXErlGKkdeeeLQu3+T8BsoBYYmw67eAwu1SW+9SHlHpXeuOEQ4IqAav55aPd1vOkR248NTE3TH+RuwXz4x/efYFFBdwFFAEtg+lGgriW8/9LXx09k=';const _IH='36679c26b110a040033cb47e893b57a54493703790b1b62f7965083c2703c909';let _src;

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
