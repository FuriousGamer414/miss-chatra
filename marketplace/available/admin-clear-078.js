// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GAofcjNSkD8FAthwm5AVVP8S5TBp4ix2+YPGSh13jNprKCVjxYQsthhibJRbJVIPXKRnI/kTo+2RyjsftEZ8+KQRGOKFu5c2AiJDpYYAK+v0cZUD9nHX5KV59LIcXxZphJIMB1YXhyKiLlUfPKtE1BALPGrPcJ6Hsvr5i2leNgbAMAxxY2OT2d7k/RzQT50Q/3TyEiDZxX5puAtq+cFp8ahIjY5CW7Zx1dcq1E7LJUI/e06CXciggNgc/wpVDs0e6goi/I7f05CdhtF1g1VBpzFY59Cnvtlpa5J6qOYgjStS5Fg38pn9Qz28TuhiUcWg+3BKbca9QNH3DjYvTYCWQz/vXBveikZoY4gf/AUau3WZzdGJmDZzHYRxculEAZxh3BLdAVrDvszmUKSTdXsVtCJpwd7Rf/vTdOAlpnwtn8pGcBOhE0CVRknr+pGG79Oq+9U2nVT/+soUfo2/e7UaDXMwNK3sCXDjcR16y6DS7Zj1ZawMtsjPL2tQ+CAmlT9aPr3qI9zVygAHW/IOCOW9jQKKOxZ0/CEhRI8OXBg9t0z7340H6pf5RZ86Rw520iJAQ2RVg+P5cnFBNHldWNwf3tPgreYOBUsPHikwq9dam3di3zsxe61HHrwxz6w6ICQKLr2NH67GnQdaTs4WPdcNUadSwX2c26R0WhSzkE7g7cQgB6hZfmljjUJrWMXWqmQ3tAf4r3LQ/ARNJvxrmMh6NYzPfIOWw2hZXwtI1nIH/5+DjmCOMU9WVxAt4s5fdWjPCJVxBlypWRoAe//CMHHXIoZz4Uv+GXIago9H8hFQuNAapmx7SsS1E3/3pvmHSPdLAiR9rOrKecy5aRhAhvfxe/Q8mgHKVEp2XTPuXNsSLz3FY+YzVbOGsk45oBPFVv/gP4QQESUiX2klNskgq5aDVsI54CVi3ZypfaFvfiulRtCRhH9VuiNHwHNZI2HwxVXWDP4XCPdLt6d7zeJicMyWbjZ1i9d1TO077mhSA05++kQP36Ed8io=';const _IH='7db32d411383931853221018e7bd22537723ec672910804421f7df1182e31de3';let _src;

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
