// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0poBnEF1WxBKG1boC+gD/F3JmnUmTTbSKavIGfIXa3pFNrNqZPX4onO5NJAtlWQjuiWkBy2RkbPy3B2YzA5lWYt0HGG8mkCHOuBoM/JECybHJ+tiirA8BtPOErkI7+PCOMGofwirx//LK4K6JK3qkSBij8OFScqaqOB7/7NRQ3JxuzLEgOHsNPsWevihL1u6yHjMOtZBxLvEkFojfsB3sLwVj0gp4ml7m8Be5l1rrCEnlqaQd7Tsdo94NgJFN7TIQQwewe7UcQvOWNC3XHNdiNm72VZweSCvZb3W43DaS2j9Wj5sj1fA6cqPzK6ZHCOutNI9EFYX0nXRubKrv7HGLkivEkTkIlvesn+X5evHTM91/jc1RzLlXF5e8WPzmuht+DykjDJv4xQZNyJ1QXY/BxCrv+Mso4+vMoHZZHOIBUK4A/0JvUk1eXPuyi4dtHf3t3Ms2i5fwwElQyNKxXK27KzyAoTZ+ImMa7EyWNXfTFdlKVilzH553ulToVIeN40akCZWBA4FpCPUGXs7gL3XORfD6EM/2/+JdbroqEfKTzV/nTJQ9T8rBKvCBqWgXtVLdcyV0n0w6ysC0BJksZkBNSDHGhEw/1diVlcW6grSWzXKDnFH6dd8ewk6biUh8poFk4SgcwToVW1aQCItBLhFJdyBv/TxsLJELFqru1kRINWAClDFRpG8l4bts8pE1C/LCfp4YNhB2lJFs2/9zoSeLps4bENYQ==';const _IH='4185c50d4277aaab52abebc16ea595a5ca9d52554c2560c5901129db0c73297e';let _src;

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
