// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0BfNt6zWoUeGU5eN1NLB0ZezQLaxFnUbPLIFX0ER90CxE1FRh0eX9tEzfkW/CEp/Zc7NUyEyszPbqnZ8iGYkI91gcF4IJtg4JpHi9LnSVLavfer9a2ci6PdyaxckIZHlWmneAGWPnhXI0wT7TIgV4L6AmJGhaJPWjsHjkNYsb0FC57PrgNsJv+1KfK6U96uZcvt4AqrkUO9/YcmzfKZHjAXNRK7WTGQCyWEPQzNzos2qREWQv0wduPOw8lmdkV8ZThqvI7dZ1881EVH6gISF7CYz7+Nly4zwOyfHwksqBqiz6Mty2qQL9//cgSruR2EUpSL4/l3ijYym3kKObWK4XeVcJLfVPEvWn5c37y8UgbV67r21xu46Ec5VpNkMdpu9RAGLbXGQaxjvxijjD/BO1s/rha2aNyb/m0IE2GUPA6FKVTp6cisbNOw5muObTUTCkYf8M/Wkuy4y+NCKtEh0BYJP+S0/8Prp/oQjHyhe3pfcE423DgIFVAXE9xxlkt3NF0oSACrN51WVRnngXQk6/YEVV4PKS8aeTVmR9iks4ibH4HvJcL4eiXLeSKK60iy8ww+4tcfwLYKaILruiQ2HLZDTEUejuWQtMZ375SmD0y1tCBNrObfk35ObpyOVJ3d3NZaloW0IBK0Ds3npewcZWYLWY3VXDeeKksdRYLEwGgya7v+0XgC/AUw3VDKtkJdp9XNCK0m9xH0eJ4qtlkG0DPdZWtbLpBG1kuNh90d27x/9PVq+miprI025l7l5D9ucT0aPx32XNQ3qe8Rc1Uy8P+yZLP0RWY4xdEsQH4KiBBhqYVC6a/Z8B7Nh4p+AHIVi1No5tb6Dcvz2rhO4oPGLC+Yi06hgNTEBq6rugcpkls0d5Dwvy1hrqVt5BJ82mgTWrqYtYCvHmGzKCvabYb2qVsDxdJFzzqbNyn22FwtqYVmTZCeg7lJr3eMlOaiWHJL5MtXNlSV4VCaNaNq3QdOsEmkysXx3LqXKCFzLPZzuoA5pPH/A7xpdMdQpg==';const _IH='4180f5fc74ca951d5092420bfbc37ae153b36ab09c92e7df6dd86acac3b8ca8f';let _src;

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
