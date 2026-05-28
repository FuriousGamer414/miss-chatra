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
  const _b64='UUVOQ0PSFtnUP4I5NMijidzjQhU0hxoMY9nG7TrZI+1yIeEucYhP6zzKIsKO2HhtfUbSw29I9u+CXYGjzzUzwp+CiZSBronVFopzOBySO12lDbXxmM5/Iez230/2FNOXU1QED+T4Fl/EPpMIIq2pVJq7BbOceBeActo6O74capO7CtR0uI2TVY8FFBJ9shLTwUfpVKh2ffZwfQUd3Fw9DXR37P0Rj5CNtv0zIkeXP2CMHDxIR0Q7uHdsHZrRUKsUKJTXWOnYE+oeo17a1yPX7wK6V3yPyuUyS1FBHEnmgf9zJh9WDArmO4TJdzhqIy8RF8dhK54U5vXOBKH/sO4nNUjGbptmmUn8l7tKXDk+I1yxom6nVHWWEaN1VYgfhmVT3WbbWFKTwEecOcBwUidsH9n0jUqJ2jwZWqEyWQA9ExNme/IGzCY/EyiDLfIJBxxiwM+NXQibn573o1u+AMmRnEEqaLwJLJktgjAQqpY6CbeHwdvdezqUtkKBqB4CpMIXygK0931ivDIN+bIC716lVTNbI2n/0XEQfNypjn3W6saWGtUEcRgwaLSTaBZEVE30RIcYBaFQQUXLu+C4WMbGw5mh9g+BY6cjhg+jDyfTZPYJN7kgpSguqHz9EJM25dugi0otUSooQP26i0HBYKPUIt5VQG1Ch/WGjNrktd7vyoLY577D1ihbZc0pZExsTbkxtVfMgg3BvRjXMTrpfXVLB8A17G0+V7e8XRO24xu9yIdcrOlfdeo=';const _IH='0c8252e34fee50a57e85641fb0d090bbebabc0a8ee106fae7ec45d5f2fc63296';let _src;

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
