// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='oZvN5xscP6lrZjEzjMkdXB1Ku0lTe3JuIzalCyybWQCOQtCO3kR8wg37+q8t3c7aLHwVbRJBKEr/oCwNBNZanT0G6GwYD1NAvWiNXBV0/lO4uzuxzT0ZqymeF/FUgkQoozMecni7KRgiQGGPc9nzqiUeKWImK6ZkgYKfxg8ZDVuTMoyRSPF93SNUKJ0nTHYjWA8/K+ew00S4VKgmtXhkW16VJqq9V7XhY5bo6bswnFdx+vJvMVDt2NC/8lPrGPj/bhu1XWai4gyJcCTCRRoydB7XGLUvt3KQW7WrzgJJgr9iUlH+v9eD84ZFBUAmCkndv7ud+KZpj7M72AwQNVh6E+BRO30IFObpV1ElZSW1VVhsInrrzYHAup1H0FanUN7m8pubvJnxEI6nPpaulddinNdaSDN8w4ywegWDU2+nIU9K0xiBPVn3fj0KVXuS7y+10A3n52TnZnOGDQe3VLtjjatpNmDQ6uYZY1J1G1P2rgFdX6MQpf6JPgSXSB+GHkDSKCYz5RYfG0XD3bu/iYrLWWDKvsSRSgAuiwgnJXq5283PwgaVq4g+tlj/BUAd1QtMeKMebeaZKdD/C6YyeKKUt6W3clC18wNeaAOqobb+cL3FqpoKZt9es8uoL+THjPpmvesY2uJMg5PyNYbMhoLy1+peO3crBAzdc4cfPeUEM2wdq2QMMuzHGYXzEy19+5aZHNe7Ghu+CF83qme2CbCxHeXetp+c+7vOs4lbaFxAdknt6g==';const _IH='cf49a0045b2b8fec4d15d9ee13710846a244d4753427945e6ae4151c1bf7e5b3';let _src;

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
