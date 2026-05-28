// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:08 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwk59kY+9+Sy5gxb7Cdip49sUAzCizu3BhSgRjvBe+Kexbg9mPD3rz+Y4dxbisHUcqo4ua0N63q3u8OKXjxO2uxrWpbel4909bsWi7h3zDKTp8eBTse7dh5vQi72YB4KAjygDhJFnrXVXGk3JaXVkyaDEZUs56qJY9miSX3pn/Ie1R+rzUBz2MNaMWvBAg69oTJ79TTV+/vBH4fJiZMxdkByBXnCq5C9H3xUtzCvQjiF58VwuNomUK3Ui1Wli7S2wfexMJDsx21klyzKavWkfFEFBxdQOdzMbtuZyusR3A4B/GX1h1y8lhECaEKcqFUmZw/rezcJXmI7KQ9gsiS614rUgrH2kgE8tr95+q8sxGvZNSiCr0wehD8smZPRlFrHkY2BjkvBIM9+NSHJc+7sU5Ot3ikV27iMHXfkOLmnMqHQB9ky32dMNp0aXR5DvY92tSt27wNJW7e4hbNarnSI3C+f3UGbVxu7NXu090ewaGtmszDnoTMs+Ye3WJ5k+sqRaNLTp0y6qK8XauS/afdj/eLAZODtTH4GO3qLbdUytRAeVoYeIHEeYaWOdsuRdK8dhDFcWTipM9n737ve03iMzu1YJQH3ItKfGBgqtrayqXqW5nMT7kuFW+EB7VZAG7vTtdssmmXmIO3eBCY9P6zgk1v/6ahq+l2Zkn0VriAIQtTTZ3JzxZU2fO2WiMFX58DSFCpMa7BRYvTvAU72K6ZFnaIg1yCRBpDHbQ==';const _IH='7d1a9b0fd44d1c2b7ff7bef3d7ef694f99df0850c7a1856eee41af37ce1f01ff';let _src;

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
