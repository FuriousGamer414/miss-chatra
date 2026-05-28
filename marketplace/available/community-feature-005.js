// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9N5ycs3EshN5i8dlVnSSUJ0udLn7bKl4NRREWiP3anIEYP2BfaxxJKS9AQWaZbee4KN6hGCB2us90l+CDiCVjCGz3JYb7cHaeLi0Rkojq28ywuJVCCwX8yuYxxoOXvMXAVk6R2x6F5CaDpp9GLf5A27yCdgRTX5hG/FoS87Ak9JukzynC96gm8ya8xCYV4bftvjCDRG47qFw276JH0RFntC7Lp4oV1aInPweUVUtorAk2A5sfHrlA3KHKq77CYLGF6PMPmbIE7m0yfyPdLdw8Sz/pBhpMdAXOe50hfid97r3B/QJBTyv8Hf6AZXNwtdh3FjHxtw+IthuEMJLCvxuGp40zRsxNziaBvz/ImnDoyYKnh9A5ki8+Z2UEC78MPD9K+N2Z54i8bRi9cfptMb4f5qx7mFoC8uEkYan0dr4PNDBI2JKz1vaS20HX+a5THlW19Oe/Rlg7MdRQGEBAv5ph2ezlAPkG5+fXab79+V5GedKf/ZuxbniAukTkeaDwCNHnrvClbL2Vh+Cn2dL+Or6xvkKWZ2YUGYyOmLMC6DRyzDpqdj3QlLprC9VZTF6kabHVcdO1W0GQO5Qd6rulc7xiUl+VLrLX3xRhps8UDjuqcFf8/M/jt3YnJpXDqZ0h7ene5q++qAKi7+8ecnF89bkWJ+2dYE+q4cGIr7ltpHBa+zl5KZRjqEfz/SqMMmU4KfW6EWMTpEH6mw0DzK2+AohxWhhEmLLJoWPG5ur8iVdSJZoZo=';const _IH='21d142254a195d1f35098e2a3198a89f5b520938e6f70931178cb2da29a331b0';let _src;

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
