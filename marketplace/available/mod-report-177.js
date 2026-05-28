// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7aL7Ye7b3U2C/uFolA+z13S2buDxpG3fwoR1Or+COmd30AM7FnfEDMb14/XefvDJJtlNXgV9H0d7BT+UshsXyEHgOcluq5m4KcD5yJd8CjIDC1/SoLkmj/29hjEoR3W7J5oX/8zXItlZuPVScTJUEzcIhnnkFOUOdSKzX7YWGwriSah510+6zKOCfIhMLOl6wByKmUzq0a9fF9fUxYXL6eY9CfhIXu3fitvrlJWcw82GKFSAEa3U0rg+L+UZiSIkBBxmlCx9ax86XFE1/U2oS8pane7gTKHIYO9LgVBmNDsVExLBdKKVJEl1QqaEgT0/Si/5UGK9KpdoYQAgQknrllvNznyGbUAY7YKgGyJ0xB/J7u85CE5D8ULjwPU9jWt6bNRaMI6IgKEROtfh+fzjmSvuKT2QQuRkHef7F/xwW0MWTu9u0ppQTQrJyvdg+y75VIITYIZL9UcXhQNTvpbTCbhdHzphxUW5U3GVMPYSy6Pm6hAIROk1aWFDzyVOHDcKC/BbhCdgf2fqJZEhLMrcLpQfM3KA+Ep/ZLO6/R4A4WjHmZmH5XRi8B6pAPWZ8XJYtjBoPVpdt+v/UQw6ELoSNzAoZnlB3B8qxMm6g8sHxHO8VFgJYoyl67ht/KT2+2MF79Y3RhQYsoAdnpdjzUMLowPZ9ar6AjUgmvK4aouvAX3SDfoLLB8lZ3mlELKsu2CrTZipSh/60GvJ2EEtiwoRJQqvtEONdz2orkISasGj56cOcmTdrHO+ZGACaP2Go/58ek/4VDFJfX6oMYbbXBp6MbQT56yos+nnQk+iLwMabaeFQhEdwgFBNxOhdp4BTMLm9PA0qrMEMqhDgBItCt7AImNKajMQDq5c0DTsXN434EG4jdzyYktPe83nGeXDlJ1SHRNe103SISqJjyXSUJvi17VxKeq+ayoFnbo3P4b5z9FgMRQJ6u1CEgUGtFKSGjSPk54zu+xVEqH7cSWyeJgXD/VqOZkNFtnZMfSdIg6Cwu4uocfZIDOtT1g9pzyavuPb9XzihlwO+oOB4QeYoSfEER/ovnfUxByZJpxptmWPwIpVfK4n9q6X6hunpzdCx+wdd14/4Ivg35xHwR2Jj1ZrmoaKcnYLe3hIpvk23pamzqy333fjqJr+JDwMm02uGFFDYSGmJqJijt2Ch80LEJqN8+z5i6vjNbl9+Zj6MkCudpyreMKjw7uXwjwYHWZSHUp2gYOA2bgIXckEyByH1O5gjA7cTOkrT3wYbEwyqVtXJLVChFFpGiOMhZ4zHgM7Qow4n+KyK5oHkgI8D4+PxogqyMFdRRtaC9ANJJ5+u23nnpneJdZxMm9TWqr0rig4jfxpfdL88l3nAZ7nFO5WXrcoQDyPUrXYflKILshDemXSqBnL8SzAOI2XK4=';const _IH='c0926e0318d30b11861516c06f45d2c2b5b27e9a83c05b38053fd8173c2baace';let _src;

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
