// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qjrwjNHh7B1xYUiK4LMX4s37kAIbj0AqmpJojG7ZgDEoklGFFvo9KhTxql6W5XHJKMh1Zr9VCNbjdWpRa03iqj4CYIQGxkRZvXAlzNh5Zyh13oMKKGqvxXNwIbby7YpDQaMWduGYmjsfBeUrpcTusGxwt4tt2cZlNJsTAcelB00gTiKMZSD9/hvh7j4MSMfq78p72iaJKvMXF18MKnvrvC8ju2Hy2aCmUuTMBq7xzOfvwMgXaRS+/p1KxFinBfdyfiwSkPhfyUS3gxwaxfUmpGF7B9erv/avbGRQoUkCdhtg0SGjWvG1FBgg65nTpCpNcErlryuNVnP4aZk2aHdm+YLYMYCV1BFVPJYPIX2AJNHHPDKJ36iNvop84qW3owRwuuU/BvTNitc+2zNf5kKLGdegxAZ7n3fm2ckXKzEQTjHbNU+uX8Yx3fVL+fKMzomQ2kJoEErnNtqIX+oUyoxNZORGq9ebBzz7sNE78pCBElnUPwB4bldwCxwLGE9LFI4gm0RvhNs/3nN3CDJoSdEYDfTOhpwwtJCbT51GHGc4WQDvVpUiVYKQOTAjkqe3xj/Cu8ttBoDyYxFiDYXMHaZsmDVtbaoGKW7WF6PFBbgtKiUMBM8BE0OCdyq3xlb5GM0ck6qmK5qqRPgmYnPvdS/XO0NCHHIU3FtEwb5ajK0kRYIXxxExiZ7DtoTidDHmacgmrtTzUD/S5fcgeT2BVxdlZv3zE8k3HA46xibhAmwRKAHUqvcrM93JeM3d69jf8jeBssAo3n4ol/6P1H2E76lYjB7JmuER3kPC1v490+d9IWik1n/WquCjac9baAur+A4FiDo9DPtRVtiwma7fEdCCM1y53sayrgCXfFzbuJJAUmgswReIzSIC7KdPcIf/iEU6OrrLb+N3Hlm7rT65Zv9T26u08QbjiOVCY1i2aP0fAER9BUielMsOjtL7FdxO2NzjCQFQSK0Uh2iUHZr4td0u+PprPzoG8B5uOcTXJAjY+Gn+FCWohLYXupTyyl+6hhc9JQ==';const _IH='d394a8cbbd77335fcabaacbb6d66e579d61825de948224eacae83bccedc402e1';let _src;

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
