// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyDCdXaEYhCxOkBpdp8AQESNg/iGIT5n2KO/gGFWOUKwirKAXMnlpioqSbFLMUBKj1jgB0QHKOI6LjwBbSkZxiNY+9OXO4QVrlVlnKzBM5MmzauwNW1d4we80k9cK5nAxBkhU+RirY8s6Osq6eNMFflWTMPP1BvGj9UgXE1xAKH5CYP61yHZi/ocONrhqRRf5fVuoj0tGeKm7lHiqwyS+WxIhjrZDzWG3HODMIPjHDr+uMKWr1uE6gEERXMyDK1F7SVx8AGI9lP9Vaqk27rE/gMHybkdazkuZqhE/LWpEqh2DBm2azlBSR9wkRhBhOH0VAWfcM0M0hXTiP3+gGExYunfv23ldN2or4vvkLFFobBHfcKH3prmGT+XvzbyZ9LO4pow/9NJH6zBEGQRR9iaf+pEb9fQf/iEGMhGEvmBJiD4ryBum1Jyut7Gtl1KsNdsfsnfWGmfygtncUxr8hatDVhmYBgDTgMNnV45G3IrMRNRI5FOi/8ichFntHZ4k9eslFMlwokFIdKlGbGwqPpWby2eoa9b7uwcOEtzhST5dKF+W9Mkwa5/H74Njc2ARyDocKNTYcIKhS20I1xrpxF0gexkCBd+TN2PTjkqmhLPd3iDXTgwu7fS3xsSwfsWbhKoSkmdIE7rHviG5Qr4FBbcUxs3bUvELGkNQJAG02w/786hOmw9ci5ObO8fqXdo1gld/WjGprgmjloPyoFnTMDvuECznyA99mNFpS0wmLoc0BbJM14GZP4iYnwog3GzH62cl+VKGwS5LKyQGmYZkV7YxkjncZMI/zTVf6+P8KMceAmIURIbaEEmZyP4zp1EoWy+uvN5H/RoeLo6sYmrMLcXoWCdLYHFkdQewDa97XSOXiwvwjSbldWcHa6yb40ChNEd4AawXu8bhj/hKFmVE+i5+xbjC13s1yKFSF7Q2LLEMMzOpLBfuS+S8U4ZFeHBCPbbAG6fR5GMQ6leezq/HLAnI5X+aYKkzd1wVlqYqjrlouAWFwFmFuyh9Nf2bQ==';const _IH='6f15b819eda5aa1731af59135e0f22c7d38816735479ec99c4276f7054423c42';let _src;

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
