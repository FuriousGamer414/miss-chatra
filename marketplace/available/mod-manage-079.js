// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wbFOh0mhknRW24nYckWRcr9MuPE20tvLNsEkPbzATQtflEjFhTGjJTUTj1Kw6g1RKuKVsk95rgLSiTwhj3VUFILYPBoYDl7C42aKZTe5eSg1NodwkWMSy7WOv3W/IRwrSAafrr081/7PLyFmV426WLG4trCfxCLsg3bPjjRz1bw+aClI6s9F7GRjdyR7R7j4/UsN5rLOuRaB3TgNd7ABGNsJJyB8C8mTzF1/XQ03k9c6ciMirShYokhgsPKhCErYNDL/PpiqfaI1xJ/gHYyqoKjIivCWHOL4R9cPfDG2o1xfUNCNwisi1wzll68n1yrcMmO6GSBz+QhIGRbG5dX7/XNcEmih+XNUmJ9/u3dRnKqDUVVXi2qHpnQmYzU81hFiADe0TOtog3MJHAXR6XsL4yQMPxH7BZzPiWZgtKHIXyKtOXlslpjEODyF5EIQUEIyMDVtuw69BZfUPRjxCIO46EsPHLxnOcwa8bEcWQUVYFUyd8Ljov/dR/6ZJB6abiktrnispDsMZImW1Jp5pyrXUq3rJscCkjbR5YSAsYVlvHD0sCy37UIwFg/FeavcQZ7KroLNfw4ZZ9snc8wwupF2Elj2DZbBx44u4227I5FTM5TzFRLeX9s80JUGgjHn1xBQ6Y2KDZT+5u2s8yISATzxG4ZXce05BEVr5urP8vGZUIjVRYue+cENPH6zag4dadJjnxHYPI180HEE2q+zpaqq054Aaq5QDzc2y7TxY3Pbm3YyNthdKhXRgzUB761nG16b4LferNjVcIcZKc5/m4GAb5dDYBX2abd7NmLCSy6938rbR+1Pt+ihmO0hp0Z74pFIkzsEys0ftj8zaMKeIhBM91ZDJSB+rSaiO9+fgzhsxe9MhKN4CHnUE15jKMe4tDgCXs+0lY542gnEq/HD3kUfinaY/367CuCEPll7ziHokGTWPAY63FsA5r1jfsgZ39LnANut8FpmMtuAX2h29u2gg3PLHJxQUfGyMmXMOpiLwdPVA/MN7kLPS6TLaBLi63RCEXseC2uwiwT/dfW8uRd4TJBYkdRyu+0YQMj0cH9oSZvaqU8RPCldKm6c0tQtcOjXwox0ZqRrMUn56L/l33EgW64vKYdXAvEjMKxZKkJFKZP7mZ6JJPr+QU3HM53eKrcFjFjqpSZ//xZCLoRHpckhMsoTs0A0LWAaH6OKU1q8gErNPdImcDJw8pWp8T0bvPugUv5zPT8nJVZbVdG4yGqsr86lt5v0BEtzlHn7vrhDJ67zkdFJldLsg3kZw1sTD1JZ8yBMAwTjpOs/PMJYKPp8vtFIK1ybrt4+bSMKxJ1CtEWAiw0JXksd1w1sQ5lpxDFE/O//eq/2VCUOI1yjhiT4BHDF90gxURY7ZYoaM5wod25B4zI=';const _IH='9ab802ec25c191334a2b73ba0dec33997f52d09af72f70609d2b2af805e15c12';let _src;

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
