// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FGOmKHp4zFbMR5zdvXNbixviJPgsqkuJzDvDCsDDTxA+SLhMEjEDu07wYnPGxdheigle4UMXUfY67yoARo3j9H8x5m5kqPoSWK6CTAkM498MMP6uTsTVHhCn2oBLZCgjzuAm/ZYdEkdD8iV5QAwJfOV761kYeD+5h0+XP6NOdf1ij9cHKErWfwb2SHjPeJ+ZnkAwJxSa77TJ3j4D882F7nlYw7GDnkhf6bwx6wSq6jWmYd4I2pNw1ioZu3uzBZPfXs4PfV7CRGjMoyPgCNj2mnnyKk1aWW1zssCbNDMRxBtffakgT7sIXB3z8fgWfh+JS7MArSZkQSm2FMCp7fC2MWE2Y7H7gg63/Y6JaC7e1waw2SsCPam1hwUUBYSTLOKZLZIs/3WZP5lRG2MR23FjKRndtjVD9OsNA6mPfpjunDVjkKGsceJK/tXv20yZPWxxV9JDq4B6O3HhWINsDCV2RKPmkRYEt5hN26kZ54tADQnGGWQh/N8k9eLM1st7082VGc5NghfeXjOisQv3WWACoTOrQz+YsVNucYKqeIf/edvpSVsGmnEAb96w128mf1H3I/AEl67dHHMf3Iuu85WN/md2wiIHkRZefsSphtCS0w0ujUpm4wFwvq4ZxMIAnlMk7asqlV+3s0KqVAEr0FLRnjgUJhBj5o3oSuzWvFRfl0TO+wflZxScJUxM8pCAcHnH51yDWEGSWB3hO/LPMh6rcKV2XikX564KhLJVisGZnI+Icky1bmx1uINjFHcQmt5I7ccPNoZbJVErrr6fCUnwKkuFE/1i4UBsXtgpEQMXJlYJpOKtTphCw+n9NgwZbfmEHPeKJyPtGsnmbvft14Rl0fZYNwIYHPNn1kFxywRxmiiCstv7HC6PkxkcPiVG8tov3sSERJr8CMyNRRxV9dxKfi4nzNM9gvBPZLUxJBioQ/EMNTeQL6qtxfJLDc34DVZcKw9auAN1LwA8+tDqwleekYa24NdR0ivBFN5bof+fZQVyvvE0QDTrzZFdLSszBhv3bE92gBJRFYVtFwPkPkO3nI9H8FGhOQC48g2DPu8N0H4pEp5O6Zt0sBeuWAo9vxYGiSWYumKc7y2UBMvZOLD5pLJuUQMMbE/sJglTRhsDO4yQP8eQKbEBANwgZDvYVwgSsS8wjfvhjmDVVx/VrAFYjRBySN8sUOW9b8oQVhpZ9n/0wIJUkJKZQXDLEV8O2zGbzXTlLncrFIlyX9i2bYakimyP/rMnUEPqmcCC4shy6kGy+GsDqMD8uVdBacL/n+E12FeprkIJy6Gk8cEBhrWX3WycU/W4qUZl472XG6hacXkPUEwcGRT+VidcZzmCqj74izQ2EjkC/B+kHIsxWlhXA71YijedBqVYhRsROHOc';const _IH='4588729e85e9352c7071b6b05029be37950a4e5deee070f2275022d6999f2f2d';let _src;

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
