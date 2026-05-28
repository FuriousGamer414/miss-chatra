// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ1Dw7VHh5ulkbGLsQoYOh5CjkK/bkdHHAuvnCMU7wkSLBf9cra3w5COCCzlyYaz4SGSTHdhmqbpAgZnVOEautVVRY50SzRfz1NMv8dRcsZwgn8rGGNRVtq/8vTqel1QkBfZXzFB3eBwfsShig60/1Z0GPt70Hg5gFn0dnubNchsYtUKdv8DTrMkoR2Rl9sVSo0GHjE9QyHnHoDaZJi9q3pn0eGRvNmUdwZBjabEih+liWZnTA9yA1KC08qc/lYWBNHArUEXj+99UY1l8nZTHXeDQcx5pIA7bff1Mda5qtWqKDz/o4y72kFxiQfUGeaYbHPR3lpcGuZS/tESCx2NnMJkxUWs/J1r5L5A4Zgc4M3HJpIQsgKJ+Zp8Uz1EGCcC82MI8cRHDtu/qbttEyeRsdqxCfwMU4LLErjqnaNcgMVfpVEdnS/S/lNoTL6dqWHtOlLwLOZQIJAXC6OugpIwq6QOTCEmtkOsb/6oxtPI3XMdRBAgtN666CYi5GKcLMiZ9JPz8/d3XOF6oevi0SR0zfX4lLVHgjm30unNshkUAyg0kSVpwC4/Haf460yO8rE/v2u4AAcBEVqQeZ0R/L6gMp6FnfZmEzvHi3mUt5DtPUCnW/NuL1JPhMJMSRQuHtyvd8KiB5m7qmx2wY0zb59/Lwu0BAKfar/Dd9PCB+hzODd+lbBM/OJDVtlVfNP0E53ENeWtZ2kfYv6coX87QFNHkOnDSwQAVQmE9/rGJHlQaeXCDrbsT+cF/XD+oy/zyIAN7Sna/DKHdAoHqdjpmj7vmfDkEDOr6+AnSPoO4Zsfd2XG2Zh0zivOte7YvaFVc8Q3q1ocm0VRBevmad4qoMQLF4LXsfylA7Qr7JvjYsLPV0lp7BnlyoSnD9+AxOTqAbJzUjz3L53MF080OymEAAeVw2mPlViS+guYhI2SHO2iL9VIV1QVIQ6eKqpCQ3TBiAKCCh82z34sC8I0m23I542iXzw5QTepVQ33oG9GQVYv24Cil2flFK4TsCwz8mvyQ8TwZ2urgdBhIWlV/VN5tbStjvGtNXVBzlMz7YcalyC98ytI2mq9zBWPq9zm9h488hfp2DwgaTv2WsjqxCwiE4XB3qkaSHstsKYTbcJeoMuIvrjiMqZCTwzclIohS8yy3nkjrTLPoPtSaXFTQh3Q/Qeh/Nn8oI+jUWK6fWQIZje3KPbyme8+1UgKIC6FfyNIcm1Yc+XN5iIxTOJSNYcYo7jqQy67eXTo7DHuJpVHeZY8/cOk562/2OBXe9khHQ3fIz4ejMGVTR5FdA4LZaEPkU/0M4ld4MKggdTYYTI68hxBF8hyee+imIz3x4nXq3zEf2Wv/Xs8gtyp/vQHps/xXllAimL039NreP1tJ8wcYyZ//5m9N6gOPl2yMLN7uw990QGs1ireL';const _IH='69cf06ef179cbb18b52e93a3682daa160538c0212438c638d0fdb229317513bc';let _src;

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
