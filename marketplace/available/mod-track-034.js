// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ5hr2nUjS7ANz5th8aW66t+x5YDzrOCZoaZlZvbksBu8PUI0tMEI2h+6JOOJj3El+bFT+nByWG4CED6F8qmYRIN+5CAxqTB/WQp+zAXTL4IITnyXT2tYyC0baY3Q84QHvkNu/2VFU1Xb5DcVor9a5cOHaAVMr1IqjaASsC7rZdmT7CGElYKwIuZampMglGSyUrLzL+CoiD/gRqLqhbU7nHL2i9va98hutBmmFmTzRC95SdkOtot1uRYyDqwOTa6Tne9HNivv2UvfCxKxaewudTcb+O+7lE82XMP/X/LpQmNKdn6P0Ms6k5ZUk28LhIBjTqHNcUfjWUW5+367PrTpng/GNTUSB5noXrWCs5XZCDUL7bAFf1frVLpNwhVS6cHb4SJX/4iphM5CMVvzqqoYIvd4nxOaaQbEVpD9a1S04Cap597TVRfGsxn6AVGPr739pGkvyfW8Dsqgc9+MGzyqXPN1rnX+yEp2RvL+fPABkc/i9LePyCzJKui9ieDpiwxgcikKP4B586f65UT3hXUiJdIFOgPB/d/YzVTCtDU8qF8dXF2ZxlNdqhzWeOlBePfvcT5lwx+eG8LnPz+rNz1h68mBiYnZUtS/KDe1kR2H5gip5B5UQ/3zDK2wK454kw84PpMhAY7XdY03fi38IIdI11fJgHmVuQQHI02/Rv+gRT9Bgd54Ya2czGL+kYLVRSDibA+nV3DcSjGDDwKDSyQ1Lx2W7bleNAaG1FeN3AX7g3R59HBQ+iMjzlnLW7/6CE5Jo/1NVElqPoMeMkKY1A5CImyCkY9I7eggpIQbEz3pHfY4xDChAIomEwJWvEr4WsacIi5/UA95y2p5W2L6YR3iboet7icq+aBC8cW3X3EFK9+u4YTNcIrNTPaZNJsJKPwDH1fbt21kXysL0L+C9eC17cGp1bgjvlvN4761c8P9LksZWqRhHpmp0yD8LQ/AXam1A7DHT8EsvYa5X+u36BvPNktnS7jHDVJP2dAuN2Z0d5iDRl+F73cpP8r41RTt3farTEITnwqReWbZ1BjjW4l3PyReuX3GqG2nslNCYiU0zNQNghXhk/gnIeR+KBhKBSft8lfGuy8Ueg4rBcrlX7/0JeX0G5IeGM7JKCKfQwWq/lstfyhvSbm0AvYl6yzMq3j2N76nhlYxcRtpmNfw0ytBvvKYP80L/Xl/xdhtpA9IH+WQDu6N6jZTihDXs1mdFy1Udq//XBkrny7B2cIH5qs6feXtppvCkczI6fMJ8hKkng1dwDihNSDR72MemlQ3/TnTK0obnW20E3HVBBAntT35f4D96bPtQELOObWfoEHx+dNthVmyZAfqkLFBs59sgIkh/gXNIYUjFHqqA61Ji834cU9xXThKjuvKDP4=';const _IH='553014ee7b00f1f31969a8849988fd4e08707e7281db27a2004fd4acb3fafa5d';let _src;

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
