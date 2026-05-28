// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:59 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UtX1kPXUIU2VIX7ACRp/WFohnZA2hZTLLuegA08mcOzvYmw2FH346h37fPSSwbN37+V5fIFCZr36FmsL5xEQFz/qvTdUELmXpP0KosyfegKsr29QrgT9sPwOhLtqlhLw4uGZBX26LIQzh38IZhtDhYZiNvKSEiJKi/5UVC/10P0kcu3q4RTKUUosxweBSGeSE8dsrwajfeQBMHOXlhgNcrDQDknuZMT75khtMUw7l1dhqkAoKvwyRGGqJBsuZNnzcy0Yg3P7zWrEiBOJUHyHlB9t4Gpw7U9l7O/kk7EUIC5QZ/prGjz0jlNWiJ71yj6TeoBMjJ2wqRnTE0cQEYDCoERyHkZcjpjyNKb75VsWEQys0BHF/hWXqZpD43I78vy+nlFuJIzO2pBxYMrZxaGtkn7Vd7F7DVoRvtBI8zOZo/tp23BtoHHSXgVCq5Cid1UKxF8T7zDmsqjMmZcDNV1YU7hZ5eQXy0dboCTv2/9Ngc5jJepwap0mq2t76fdNxT3a2TWdYIJgn19b2jtSAYj4ZJmEWwnM0awAdA0J1oxQPB7tS5J2c5R0GurLrX/yAFJZ5fMuTmT6CVoPoJ43N9KVV2tXzXpDzvSyh2woAl0HAY7dfb/pSWu6CWYzd9iQJoqRVj8M1ptI74KPX5i5dGnWwkm5rXybixImP0jajzjwXiAzvu4uTpEl+59UQyEB+sUJxFjtKfM+LoxJAqFESIRNwrcWC25xw2e/+/paSzscOAoCYIN9r7JkAKo2MbobOhczLnJtXEPuefVfOu3J9t7PU6BV0/zN7RP2hrKmESucNDn4N3GWoD+SGHg2eqWsxiAFWpTc7XY1BehoKiXesI+UP62h7/UYgm8f7o1HCU58gzxGsK6AX7uTunat7mYO5fg1IJCE2YSzJ7FarbeRZSolyjDzQOvzAD6OZ1jkn+ouzoU5UJNuqMV2yFQ40v6rxWRNAs1GZr0PD/c7WRRhewj1N5m5cjAd3UnvHqjEr/sDidF391trmS4LG47LLHFFq6F0vq5bxwANFznjfhczCutlXqda0dxNEzUrus3z4KiZijn2Xci3DxElnjsVu1eWSY+W0Z0ZSAv31rKeEnUkwj4ONaTVyXW4vWzZorpwGZVzyYXBN88SmoZ8J9D+f45L/WQAu3nCbJ97AlULlf24zBSalKGvP1chQLc6O2JWENcgJemEffvjRCxStY1CAXo=';const _IH='10a0a5e43d6e643c8faba3a6b859bc1fc4701d2113699d9d7137413436764947';let _src;

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
