// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:55 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ927ZLrIqdk38qKHNqVj6h0xRs0zrjrX2kDj5RGqe3NhGGtOiWmckTFnJ1Rwn9eVySadtsUNZiI+Wx40/XEHFe64q4PtZmWptv9GdLe7SQJCSHiJdInI9MgM0l86a6GgbxCadHKz0ZT+q2dSTS0GZIXXvYif48ZvtKsUnQvMLoToFwFpn8uo272RVRLjE9LpUTj2bB5xZYLJWsZed484zv52oL45pSSe1naCkqMiU3OiBzb7K/GDxq/Q5XrFapQAu58FUEwmdggOuQoIVWGzwUcswLONTzj3ZBa862zd2HhC7FkHIh+YURpt3atpauL1zNNmzOGqGZHx0/ywGiEg5MVJdTyzSBdR/yyctvCG9vcuTui2geuWmRO0o3MoncuMdg+wzmrqL3bjPsiaPpY+KWYL8+AMCetj0GARFTN+Efdj8xLphvF5hYN0m5hYBREmBzdPconoNgdWWVABjG7JjIEYud9mAxZJAuEEImMv+e3YYoEiZpTpa2doQOToGtFJBJMkkLYQk9LbWAjrIMWgWeNLl9tCSVqxj2EzLfWq1Qk87ruj4aCayBirSo+jExbZNUL/SngZlRg7kGva3fe9siR+hDdyiJteuzTRnnLiBTgf7+iwnbaqFFOjclasmgi3DH0iC/4jfGdT7HjAy/TSefdKNIA3Yz3blFT7hot9j2JNzCKz0cYdvc+OEFFT5vlLBIavWqYVUcrwPR7kawWpg7N4bfpczMyNTIcz3oiWSXa1aHF4DpSBAPGW/NF7G+5+M/Ena1OGj1FdkhbP82LIH3ohtrPYIFhSfkH8JSPWEr8NGEe8mw4kTEnG57kLJKIlXBJ2XbdJcU39dABbvEptBl6DT3VGTePo5qOVVRLmpjNf7HolIKcZ361VT44mTiNZuoRrgtFtqu2266gMb57kL1ntlOixQi6rQA7O2FhD0+KQBaGp/apeDKnGMj2Rw2q0V3wX0dXeVBlKlRurjXDws8CjFB/6cGHnfXdaSJCYo+MlhfIZ4YlhO92NqWG4WQlwvUG+ZUu98v1GkUJUeMdMzAKsjqZ93OshRkpf1PN+dg4xhvWpssxVtdemq4IvpX+VxBSjPjJEH5hbI91Mjl+1DzcYknM6wZTmLumpAuf/Bh14htUWHgnMfhnS7UdIXA6TGH0UIlihFUcmpcq96q8wGi+bi+ZLgaMErWBCTk68Y0CuTXe3klxICExMVawTbXh8E2vRpJhEv3Cj';const _IH='bd5e9e7d65716f4b3c779c34c93d9895f52eabd0da5290ffa9bba2548f430a8f';let _src;

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
