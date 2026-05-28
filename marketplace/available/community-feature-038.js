// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='N9QCpCXHSSG93sV3Knto8gHh/TVJEtrAzn0jTdlQ5gNA/V7kPx9H5UAZW16585JN/H9N9ZfZJ7KNquy6rEEv7dQec/z6avwNRsXNVG8UfRTQwB0pLo46K3eExrhoC0UrMP/Xgac5Ibtratcz94pkdkSZjLZrWqroC2g71R46jCmYok/ogTB42JCN4jclcdltSTz9kGHB1vjwGIO53KcQYSsTtHgGHPsqJv0oTTZjy1Nvwa2Sf7vHZSaENgWTDvtkiLHTCue8/JmgS8jujdLdznqXi6OgMYF8GsOgZfdnH+kKb8KFdqDTgLjqTjgHOTyjGcR4IzLlVycVZFLYVmdrw9g2s3QaFxdiC2PtPyp87Va7vDtGFvzwP9oS2F6RA3Kh/6J+X4kk/LsmXOoOa0xDxv/boqdLVceyBHq+97l1YM52XK68H2NSE9pAgvGy7yWcUYfFwjskH/gsxnnJiieqXuqsJ6NaAZw+c8jT8N9uQJwyHaS/lQyIAF4stOqWFOAWIs+bAyDEt0KF7m8XAqbq0+jBUADLWB5wwUoCfGrI/egwF7ox8uM85gmTWeOh/PdYbjObOXuy1J1FN9lobIHi9Xv8qup+zB4wRnKv/axN4IJiSxia+nyoVXzvSXexrdesB1O9lehKQ85/3812Ceay5D3COPAZwfVufN+3UPSnka2BYjintzmXP0ZGFNtDDe9CHBTUG+GXPiqtcWgFGHxjQGVNZU/kbcPvfQ==';const _IH='53324951168660ff31b25fc70353dba4913481ef8df576bd514cb9d0ef454c4b';let _src;

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
