// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:48 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQxPPCL3x67YiPOnd5o520fb4rAEONkwSD1zC9oVx1v6F7yzBR3SZ4O/i0Yal8n41WwqPz5J0CnCypM386GXWXGBe9bVwkAD5Nnyom7cwAxFeWuECoJxww+tTcdOnDeBsgDrw0hYCfdmF7skMdMx77ADNUCbbxkC2ow7104dQZIIVIrO/eK62Hj3IHjfbJJTbTQQ98CturuZ2QO9IFzXR1yAdZMbEJw78xu86lwyIUP8cIl38NORAmyukOs9Vv/kvtuLgOHwc/oLeD2igIAs6b60uxwJr2ZKHEPMfxuR32kZtESuiEbCqnYtigU1PPPXIG0crNd8JSoCKn3YGfm1iZze82HshU0kbI+c77O3gQVizjDIC9iHGSMiUqxCYtCnxiZXnJznZ5fe7tt92jTwJBrsjr1nwIci1yFBscYkgtiFS5d/2bDKLzdhcgsO34IWOFaPDkV7+g+5mcoHtzI4x1Gc2DdSJoTmj';const _IH='148ab86382597f1240c9457714ab84691a9bab1bd05cae58febba70e358ca7d1';let _src;

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
