// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7Cil7r5nbt7J94lglf0t14SdMu5lgi9AJQa9ISKYqCZyPKdwgUmQKncjeGS6DddibdKfyjkmpfE8vcGdaiwRLrS4sSRn1enPFzMSQM14lsCDC9vrVhHysgdosILKcMll+SvjxzALAUbKtw4MMvxH5HpqC1jWKtyxRRh5q5neVLGm5uY5wRm3uylc+VtfEWjirvYdQAwUQpHVdQJtmpnPwV4KLkWb4hhYjgm4k4fFEZfIdrmvHm38u8TdI/fv5pOCOUkU3VDJIpN8yTI5FiPfZGd7oYOdmIIc3rAHh4vdlhMe6TleSdwKi/GMnkTMml1IIuBeIcEg016WS6Te3zqcIm3+Nlx7Ym2v0qVTkK5vyoJ/HvcN/AN3+uXyz0xVnE3JE8CQcKvakyNymNBxtNI756gE/0lZ0RgrTSPvgUAJcrXQrve0Ij9fjR85sCRfw0x6YOiVJ/3FNTUggqrRC5Ah20SpC56gaun9AqUS+SDgZAv1dD1nLHGDcIsamTFJnv8zgbQ5nSKxnadboDNcRYOSel50qQYuK6hX2fZzlb4lTOQr0Jdtg4LR5eSH+E22AwtsS4Gz7uUhSjJVtYZNaexj8aeZVOKX05TSb1gJWv6TyFyRs12W3tcgmyHjXndidaqGXwNCqGu7Q0qKOV/fVoxyx84q1xyQSnufBxcE7ZxnVarnsKMIwoWBoeKA9mfkWvVK7UXmmgR4nuu/yCi3cjFBKn2G2AuRRWMdi45Gucuu93CLXFPuxDWjD+qMJXVGNg6hbSYA29dEdqA/Ey9vvXHd7vbYkwygZWVBAZDujscPuymv9Wawj8609sIg+KcKI+l6hEOXJ9QdOSUznFpuwmJqbwSu3spdlNRE8hEY0uE5oiF2jkMT2EcdGHjQNlU2c2mKtu8wcvKBMZY6kU87w0cUzMYX3JfX9SMdQZbL38wp4F+D1fK/zrwD8VKT60w9YDBqVsR8tUcjISmnwDsMSQsXzfOXcS3lW4iadEEUDdeYcFDQYI7FoV3D6NmXd+eEkybfIMfsc8rkmYQ=';const _IH='1cfab89dc563cf5f048b3b2cf52b5bcd1c6dad4f1615c6dc9fb30efde4b987bd';let _src;

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
