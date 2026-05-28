// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8pMY70EyAZKqmEVA6u2umua0Dp+dzlbtXL5MuSO8my4JovX7elZCYPILHrxW2KMUxkMlDTJ0l3JW9ZXTG1o+eOf8Krvc7D7EYV7awu/iGaMGIqyqy/zdxVCmOp0948xDTeb0zdaq8sZw4bBJGBSx7Z/aaV97WwxHkxKNzdj7B9vm704tkxEJGqJ5HrSYZrYNLDnRcD/KXg5j5QN0eXRLqZS7uteQSEgcLqYO//8/MD/Q2RBzyXncrgD+8PaL5/42syU0zLyGZ1GM3VZ+RBi5OLPuPqeKcH6xSY+ZAAXeD/fG4ADv7AeBeWsBw7DRZortg9xOgqTMNLYlu3HkFMs3Q8xuWNGrfkJg28BFKqN5aJOaXiWBChKRSnANQGSz4d2gYWEwgPn2vBBHDJzg+406PhYi54OJn1DoMnk7JQkZtbnIPZhowRJdUcdo/QX3EoRRSXZePiA+Ewzo2OCG/q4EIT1OSrItlqypggqQQQkMaFNZifgZ3jDew+hHTM+snozuiaVsfkM4rN2QGMuGxG8IkUFIIm0qvptJhBpCkSpCPpWZqAvyjNAeNQvfn4omAjbjNAbVSkkNiRFIlDUd/V2L+pjWdn5ybocXPtq6uk5lEVoWtXgDWVXJhss/L5s5TFl8C9Ty9qXwLvJPGU0gbap5QFRkN0HHT/JIunLSt+3Yr+OidKzzvOlaR8wrF2MnJMFfRc+jSUoNGILQOpPu2qFt9FBSGMIOLikwOC0k3g+4vw5p7cbSiH3Uh0m6gfhi1JaQd43Ikaz4nrWgkZTykqeiLBddaxvYffLi/Xz0Fr337z1jtm1HoGxZqnyzW4ZeyhBKrCMEuYBsNtuvynAa7ZoLdT+SNptQp5QIWZrFug7bs6+npSD+HXWZWcru31LbrFE6t0hU70WdO8FbfhXH/VKpTNh3R3HwG55nMiyffyLV1tlolyOUrvRUTn4V8XAQynfLaIdWK4qUg40Ic6NfIIvXehgpZyzOGWuhNR6zoqqYF8zPr5W/REXrHWpfKaPaCeEbuAfv849LnyUMVKNEK7a7cbkRKKuFLp6syhyk3gs53gIpTaM0Wl6GXoOuTr71PeJ2LgUmcZA7YGDq7HxRmiBwf+2BMSc7lvAmcX3H2g2Q3uc/odFkqKOtGvXgM8NwmWQLEQ2CKssn/D/xt/wxxDxdefZmsHvb72zRBtKPK7s3l78g6FrlHnJbCaWpRbSSYxDE90RMfICBxEM3qkw83vy1aScpL87hQuJ8Q4DJi7/TEXvnFgcHOX5KXgTJ4bsvRvdVteA+ISH2YhLWYXsInyI4Q9bYBriNbGKaw57QtC7dWsWeqeU9Cxzuaknd3Y4qvN9Ygfm9bgtHM+VuXPNE8/Jq+PXuqdljMurh8AliJx1ew==';const _IH='aa36c0cad8e51ec02d5423432df4bc09556c6f39e155e6d02d808ab760771160';let _src;

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
