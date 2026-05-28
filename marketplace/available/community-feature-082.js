// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gs4OSKt7uWebf2mZYpeHZNpaImGHNWiTJViVjjxbn8bO0wNVVPr2Zo19oy7qpIdbMm/SBYawuy4RNNPuNsrXFsJ51RwoCi5HhrG3NSMa4xb1Y3j5tTDVEmu2mdu2skq1IwR3aADhCt7/0rXlI4bI+WGTCSbcJ6FPaK1T1vk/yt0jwbl68e8pvcoTE+KuwlRH37el+OrKguREODBxgf+N8DCJzHLUvYOMJ7vZXA2Psun1YspqwvxHDIW/AmP4EyQcbr3SBsujng7Y09/6UC3imB8+LQaZ1oyDnZOJfMnPykf9BLwqdyGZc2oYDsdOHkZWEhPQt+fK1SGX2laYKwBOjk/bAM0ADtfXeRRfsMU3ymP2wMn3W/tcDeVfVyvUWEcSyOhRIqvrktBeisG+pj29ms7IdL3Sb5TLhSM4le/1skOnyu5ORDoaIqbQg8O9GUJ+3ovhrlcDyM5j6iPipiPgbU017sRgKi6hJrgx/O44iDhrS0ysaBUTOJmbAcyiSMLfCN/h250mRETay/wfaVMuE/MJdXvznyXe/C4xlYYgyi/LpT42IhqWJr9YgV/bdLN9trj6tTd/CwSWF5nkPvb74IUzmijLFCrgctOL7DcaJFHfwmTdR/LJb5WqS/vN56+x5epczzssEju+9jpifG+ALi3pz+gbUjyADj5w/7iJZQEspMUiNj526cDIk6FfzFqPQqVtKkndg5qHeQqz3EfqpzCJpKsLqeBPGRULc4NJtQ==';const _IH='b01901ab48b02d1ff386e95f95ce933fb2f7318b6f9a978a11740728d6aa059f';let _src;

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
