// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BQqjjjZJwAvskKpKlbsNwdIWfcq5hVR6Nvvlt45GBycZS2o/lE2JCovVP0nM2qpMFLiI9crtpw1Sz/lmjG9q5vdPOxwoAAkPJSjEYYJdxidpb+GJh3I+gqS8T02OZ/i3ZDgXiEto+BxIAHpUa4EoTwldQW1hhee4MKcQL2Vg0WXAheevWQiHLgZEfcc92nxKXv+p0EaDNqtS338oSSbfWy1VXHNST5FlKSUcxsGmbbkNzjE9Neqcb+U6qtsyg6L9SiqjuwNLPwkmO8+3Bs8w0sUFwNJ8Waaj8TIrfEryHymygtmSbNe23v8lgOaXZMQZTFsEImz+32ft21hj9pl5Qji4Rl/9Y6zqXr9hp+Knd88WeJ56wHx4S3W9TvAQovP1Fm1S+egauULBVA5VHi9PxuQshrqFgLwTtHkoq3fM6quRjbocgNhwkyVMuEOLXU00E9qZQ6gF9LYLgsvfuuU1lE0cmsX4gvH5gExV8UIE9TLd5lfuT6avnpkc3ndvdkmU3X3l86oWd0PcneCwvvFsFEaZK9R12RQoLQrKz8uz6d07Y2pWR0t4pCik+4JegBTTqkD/5dTxAZJbQyPzUsKdlX0TMvfJ51CB9/8nPIAwHrD1XlWby5eGxjH5yeZJKx6Vx3qsDeJs9rcm6po2qQSVQSPITd+97glmSkVXzPgeMCZflc4bypgppOYGkyJojTsBrJI3rFRcVbMZopz9nohZYZLWWxUtnFw5p9xmrSZ5MZ3NXpFVGv4viO5abSVO92HJZ+jIoJeUSyr9MGFM22E5imbJ0UzJdoL2XrIVWIdRibgsk1kYSnitu0oAeKaG5oJDh2Gq56CKvEhsG+w6O9/bYP42rJKWnyVlDrJeox47akIxFC6SWm39+m40jIJv5BZa2eX3+6GMbXBLf494kKU6UPPCHuFVJMyVG7GLNfnMaJw9PM1NKuVbNkXUk+6j/Cwurk1BDmzbF0r1GFCCcp/A7b0OKfhWMXRQAkJAdVAOqOT0PLcyuLHfG6daEU3UyeOi+Q==';const _IH='0e051a985600851f664dcffa06e1a95ad24b48936e1882fd65afd2cb876ad85e';let _src;

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
