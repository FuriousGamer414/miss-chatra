// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ64jtxuOnX5LB6UrXBD8J767c6H+zSkuGlq8FdNDswcu9jdcqgm+9ttirO7EDZC6wV5OXUTsUDYwMS3LKr6TGKsetu0Sgjcm9faHhMpdARVZR2F+BT+qVARap/X2lS96Qc7H6P48tUv7LqhuTIdVPlGmfudvltOzgxO+nAd0uJBNZsNKMbNyXgiwGb3BK7USbCQE+7Uz8S9/Kty3MyiMLI77o9sgO5yr7+b8rNTY1tK6hG5e+fZRze8nTJj/5/4khI/T69L/0zq6Z7R60qrvJ5rp2Tk/CN0HCaQQd0ZZLfQlhwdlBmh1Pr6BLLiIv3C4MhNZF1OGeAEWa9SQPt9F1CL5+WsdaU3pRYVOglHltD96TPVfaL3SZmTB4QBda86RJBXN0/jwowQKfDFouZKasd2k+HgtoujzB8wDsGCIMp186yUaK7Ow23gaaeLKZxlNvdaPbbML4o6SekoymV8uwjzjeAABqarZrGYc/3COSWVAmCZO70k6s+WPylihW8ZSBbN8Tlqa4VBBw8qyk0uMRfMrzymyO43OZ/YTZ6muMjdbxzPdjPCXo1jEm3pcNUKYcmlZ8YvZTwbF1NncBUr+50k5TNgZopT7VpNN6iYVPh84TPMarSB46VPXEMmZZhOwxzYzlmKFfYqp1joP0fzK+kwGyVo6f93PumgvOeKrzreaclaeBpvUHZ1PGUmVTOxtMwW5gfrZMTqhIKa5oj7DRk3AkNdZcUsq6Jo=';const _IH='746131ea31559d1abf9b34fee06789f687b09e09efa1a5efa6858c2a2920e384';let _src;

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
