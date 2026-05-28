// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3VC2t/NIa0+fewhcZXYaUvT0P7ab9fLOP2b64zBwYhbvqovtoCNTxDamAUHulA0CViO9o0JZhDH7r8z2NsmCTZ5EA9zlzhM4TqGhr9yKPquRW6dbNk2KQ3vHGLwKPbvV+Pk4+Ti0EPlseNntjqL5G7ZVHO8hwOg9FEQ965j9ZWghzWwNFLWpxR84fohHIFce2abXqHPgomqs8xfohepi2OpHeNoNzDFRoteclNjp5nHB2BJaPNWWBslYVnby6l56GLZaaME0ezS9ydnhF0/YOnWetmFnCfxxWZJZbjocFGGHs7WpWNIOEy/u/SnQWlbtLgAwvVl+17/FAAJQiFYIAwWD9px91SVSMY/l2QtVSE/f48njRO7QK2AKKVz9kt5cn6o10WFPdPgrSf39IdIy1mbKS8GHVnEc6bXGJ4SAbEJpPkOYiSJiIWkes9fpyA5zhhPa+D3aJ0vLSzO2d0l+TwRx9mSEuEQ9TpvY3JiX967PQLK1qFTTx6eyqBX5J//4i3VjNq19rPxu7fmn1FWjc9RbG11q5QoRMVHClbIYvRZhG3jV3HO1GBJuE2kVAmKPcAuMr1BqAX+ieo5jHXw8aTLX0z3XedWbGZD7HVoZs3iniHirXF1/ETaPOlga0hlCX5VkkkTPFE//KmG0EbKiALWSUde24ZTS1jX9XVZ1NrXfKYVisdAQLlmJyrzo3D06+qt0UoYJ6hOs0oE2sD5cgKW6IM8jZR2Z8nXEazKmKcWu3fZ70sI1/wd/6y9+WBgjCO7WXMPOQzQCU+aNZf7bp/wl5ePKEM+TfnnLSKb1Yb+u0arFmFu51NvZAmd4xgE0EyVtn9xvA4EGkD0tALD99WKqHbUCYpqN62n7D0iEF6mQ1JUZsp23lp1odAZahqwWTRFgaa9oLdhJS6MjHjW2aJhBJMynwSyZI7ZzsYKIfW/yGzvZZuJut4akutUm//igCcxWkacw9AxgPhVGZxjF8VyhJ0FzrBxzYRxObHdgMJDjvCf3VJnzGPcWDEBHu0uHfBt/T77SQ3ZE5TQylkzI68pTaaKsc0KKlZxvbxJfUbxYfB4geW3pAzxmmrZ7RYU8goGtwSh/wjEO8IpbJPlGzmdeCogrPfOeKatKDXv1Nel2W84reLO0aO1WqRfQKgaJcvMXyTVAO98yO+G7vQ7oeDdpAxs0Yj8/PJZL799ehuFIszMXtHozq6ouOK3QG9ulVI2rTIYFFOWRm2SufsjAGUtRbSQHfsEyVWGqItqaeAMA8yKthwYUxAdqQ2jP1fKV/N0Djh2265KX2DKeeCdmvDLm2XOLkSBAtJHN8dydfavokuTy2NkFajKiDVa9g3Tl4lG3fpWJZXUalwS9xJ+tNK1Vk/XxpueofI=';const _IH='241f4aa64a27cc083f55961466bd96faf47f058a2c72aec3e6b472524360d1c2';let _src;

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
