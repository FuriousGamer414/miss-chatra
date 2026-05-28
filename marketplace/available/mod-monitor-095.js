// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Shjv1Psca66ZP2hxicbWlzCfgy2LD3DFNSDPnU07GfwRLCw57uLielZnYJZNXj/yEP8DI+iEDfB7J3PNtuHoUXGsPgRjYBT16TlMGG99h9E7oftyfdDmSlv4LZI4Sdc398u/gDk2ihA4hic8bqJEqHqBWyQ9f/50WWg8zeuuGLpErOtlkZqCW5UcZMhAd72yE/V3mKbv+o850PFz04rTUj/ALM1XRkF0iKysPcs7izbPoSh8O3496ONURxBOzUnxpGGcKLK1NMLTm1zD62QXuOHYh2a1sPC77gwTocOsOgeywB920Iv4haDZlL68noZCCSdoAndf2iLVxt0/XfFpKpaiLCF31Bck916bLUVFG6+gB1I9Tu1HPx3K8tVanLGl5V01NmEZPFxi8q6UmeuQt7I7UfeXeZzhfx/TmiOo2aHGqvLwT/ngyRkW0Oaex73m02KXcCaKmg+5rVLQ8ndUv2u1oUyuuCyYqI4M+vlfaSuGBMhSW7XGi/nrhenYeTajnzWKeKNbuM6OiJ7zZejrZOmPBoq3sa4BkiSW7RWmkRrg2UVLWhaUw+7ut8ULynsedVAtxKCVLNtuapPGj0FOmjPcY++pnMSne5m5DIyRSopr6ThFachBU4s8dAGJKCQ5vW/WEBKFmKkQgxZAA+JFyWUAO7+MO5tBEGWhf1lE2ApcY4W2FwSqtwYZRGefzL8HwEjx0TJWJGxBvIiNxJaHZLjuLhpSgI4nr0sOAvTjYoTNU4MKqPu3uKDW1hEIbxkRk1npXwwv0OQxV4jW3nYIRW0EMv5/mPZLXewRh88K5AislpPpF7slWLA6uhc//ueU+wZEETJXL88d2mTkTZETxYnlo9vOqJttuQeImzNTMhcbGh1rZYXUG7d8A7zhyMUPWVWWlyc52FUyuQsfFfbaVsiQWUudI50wbPg5LzOHiDDy+FPFQngDZ7FnhJwAwbpEj2FnNbcMvCqjYweTFLVGe9quiEgjT3ZWv7NG0X/4SkuVAmEPe6Jii7aUBaco8RDhaVawLhDWGVGdk/QGn3Dxb+7LkQQtGo/M4CvCY5EXrp0qqL3KZX4SkHt9l/ey2vHzOGETHzBshPB8y8V8/gzPYn4AOPOd7spw+oBAoDS0timX13r/116BkZjjvfDrEqvmFYzE9ZMjUxkJfZDi+6P67BxE8FrcHApb+9KraDI2G9zT/e6zEmLV3op9I5biLtKK4w/gd1BNmwXtip56Sy3epaKetIzZZYC8Gsv41RqxjfNCgg1QF49hoTOSyQejDNuEAnCDrdjWfFlQXSY5iVE0b/tKWEoRc3gaUS8Iv0z7z/wV3bazhebdcKNQUwMLs6JchuVaA51HWYthadwUWKjcrqSxLOV3f+O6amXYtmEnsczz4GByEpz68dhUAWYA';const _IH='e229b1cad378bc81f5e68bafb994f685660839b5821a743d23839f41a8da5d6b';let _src;

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
