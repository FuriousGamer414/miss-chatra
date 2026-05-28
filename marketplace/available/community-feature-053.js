// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9+3aAVFu50f5qI0D01aC97t4SVLYIWGSqBV4EQ9Ywkxabc78CGHNSsTe1MaigTEa/pueGViluef9pH4ABB+0CBOPuubfSjIP1+YkcurbYFO2j6DrmUXwV4x1C20tqkR0jccgwg37pO5ladi27vmjpLmuK63uv/d5QO6DM5kFzLEamQdRRX/LVrnI/db2vQ2qgynT7EsvMlThzmW1ykvcoHgidHQjaxlr0o96/ANnRfMWi8rHueXXWmDHdrtAbfsnusIiB/RFUPJV2L+QDR9Q8lvpbeuEtwtHjRkHDGQoxnk2NFnaa5EGBjUjDO6T2jk5eneW8w63ttqZ5Qnry10XVECodjpPTg5mWvr0R6L801Usu0Xbg7w8XeYfvshMOOAK9Bjy7ViSraKja49CYx6CpxouXcd3HlsycjdNJFTzN/LzGm35XWkhbtj7gKlKoHp8Crl6KpUMJlL6ZsczsmMzbVRiqs/x73iQ/oE2AhbVpZFy0L36d8byJzBsHgJ0Tl7D1BALrG22JZvKzb0xibkO7xU9I7lB9YrQ3dVF345APAnQWGDdFRhh0i2YQvcSmO65eQOxEQWVyRmNBupILjXy8xR1eM5fxb1YbzCbPfMaEhqK85rq8snqxBnU4hbaONJCx9ug5+MfkSpZIK0lHJFu6AeGYbBiJPi009b8LohBaPQejPNeyi7UAQ90YrUAldXEHdVyHpc19XdBUFwj+P79mwfGEuYYucBRJo=';const _IH='95be0452e2efeba283e56402e16099dbb6cb9a12ed18d0b082fda7639141d2de';let _src;

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
