// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:45 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ52MtC2mVTd1LtaaP9ghVx+ouO0HKiGJYmLonE0HOjanZ5OvEmqBBjEcF40seDwoZVgXD7AVLLgmXAnfRwdkKMJt8fRoBJ7sqSs2RSvuimiQJ6suEhV98NOUzzTzoC16EeAIXlxIoDnsaK3RCgQ1LkdfxOX3wKkvf7OTg7FAyVgof7aYg9yEXY3tsV5L9zfqgq0eY+76jkA8S7JbDae0irf0KVMT0WuIh6k3AxQ7ymrervHOF1JfDFy5rDbV5/ISxbT5ztDH35WMuOsQEz/z3/1Orl+HnP4xZsk/GEt/fpZmsVnQnI4ywCROkhghOJHu8mLlNnUdOkJAONrXUp5DsBFlJbpDx8yHaw8AdP0byEpT+kwJJ/RzOcDlhp3G9tWCgtYm2kMla19j1hMpOtgESILY0tpwshe40+44CZ4do20ZijPHYL2obTvGUwrCL92cIA8IuuyIM7GP3lqAxd2l1bHs17jtqOEZPRNhWlyhhGk11cc5jbUwvYJYdtUs309QtE57N7CU4/1CNJ5smdVWC6icXxOT/y9/yxlijxdVmi4WOY/Lf70p/NtZj30N6Ab6Jn7Wb7I/eOuKah4M1UCO+D0iGLVkYvoT01uorHXhpvxAqZBl+3LIAnWguyg/0EiwD0eypMnKJQkhR3s+uE2x3XKA1k/zZV1wkxNyv6RZBGQKlHsCan5YCqvCxs7PXd2Kv9AsxGC9SCNahsbty1aAhcF2XShHOprrQlZ8PeoVDvqQf+KsWL5SKSUmuCuHjEcKGC5P5Ji1alE7n3I+YZRaxAZhK1dpxaUbpSykRRsUroyGhrtqBf8PWWxVdCEXs2+IhBopd6fVcFhljBIOZiv2MEhij9/omGX/Vk4Fi+KevcDzSttMSk6hqiyqI9KGljNFfMO3q9veck6yAZqKi+eolhnLAYaFBLPTC8w33dItJu+kxy+9TiXJ3LNfxBqcVidKtiRLSwh3s9qR48ueMkDbyTCtGIJ6H7eiHSC67WGKIouKHit+Nh249/7xvzOdsVsDcabKUUdTgOSC71hf65BuIOAEOaO58LstJrZn2na0LO89pqC2bjpjQ81RvtVu1ZZXm/07FNoHJNt7wDLcoLcLxw5sfWqU/fFT7Aw4Xuq1GdxW2QNeFSc8BpnesSSIdI78pTiRqhfRv6YbT+Y34w44CVudwV1Dl7kyPSFwcBqwmkbbtPAXOcJ1zL3VHDmpTojUxf3PtTi3eNGW8gtDYrodWcL7ysgvGShmRd41RX5LZKv7F6y8vnXyZ+WfPBg7Heilt7HWnQmrZcmuM8Khxcv2YkmvdJHol0fhjpSU8upTRWg+wVy4DAeehJFKuS3Fm7hQShP2sRifAMTFyhMpfZkgTScu3Q98483AbZxadOMasjefnYZC';const _IH='c8c427f5f1a2249672eb10cb51313a133963bf7ccc432681dc9de21dd6817608';let _src;

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
