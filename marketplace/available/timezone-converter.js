// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:23 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwiDo8u4Cht7ez0BqNzUsNIx538lIpsspSqlJF2KGoqSsywE62BVKVgNUZn3ZKVv7s1tk32EUyyUZ/UPy8c+/g00xHKZFQHZxk4SA0nsnoF0k/roPWDT5b1f88g/OvJapbt0Qey9Zg+cRpI4UlbGq53l9iDR3hG6kuxO4urRzPx2s6vOG9AEeC7kBOQ1V3tW/eTCq6AsujRXPoEpIH4m8/dlJj5Xrp3I7+GWf5600cUmJTztbGuvCDAb6tZ/KBLsFOZ/z5VY9SMKqlzHKCG277Gmylli3GUk06V043sAJ/rtz05gs+0mBaupwb0SpWFNqMooKAXfvcCTshItz/Y2/tSsTtx8TYfW5RnFJ+rtDfw3kar88djKqiODYun4ZBuIpuEkJqe/FJYXEmlG3pJZc3HNtO+bh/dsQ46/zBdQOZWOYqyytfkwa9/A5iVa0ftc0l2yaKakeGQaFSjNSwj03/c+mBIadqt9xIDUkCvlTrvWzHoHvHo3E/GJznaOprjNYMrw1Jo569Rx4emSomD54imF5wBP2V1JdA+bwswifpHaJiIthv7wXDygvmvOZJhEwbwDJF9yXYzItji2oL+PKKwgcPvAXgwQeMTcCQ==';const _IH='d6cdede47f6241a1313653c556c1154b338659e711d47c26d9997a870484dd64';let _src;

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
