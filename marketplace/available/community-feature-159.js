// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:04 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7WDWrg737aAPgWhps+E7T5Xp3RzWojZ+Rl7sGp0fbWVxHD17XofA3NLhVgqVKDxDEYUdxVVBrJOSlEpSLoYWOjG8F6U1KNEe0996lOYjVHpZYi9YcomDVwh+4odLndK8TIb9kyVvm4dBYlswO/bip80iA8uBSgleijZcZy7AQ0x3nKRFxqkMTcPuG5EhvpM2p2J4g1bQ18QeGtcmApeUcg/M+myqWib0hxpEotcAxxg8kj5Uvot5LhDbKhF1dDLLjXsGnAwXgnYIvfRXXkVnNQXb+/L5wAlrMw6RG2aKQroqpJTHlbMjh7I/IySLskiMX0EF22ZarR1b8YDLBbLOjePK6IA88lTpU67AU72TO3qNgTfqdWnxx5VQGxTm/+fWoizkj742+QTfYRCq6ShQ6Zv2MV7hXAKwm+D/+HttSuAGGjqdCiQtnsUzVLTjzV0nGUILzAuug1CL4JvXhnnO5vjCKKDr1w5Kptw/IeoKOyAuQ+Q3iCDI1KXBn+WAjyXIT6ReG9yys13J02lgmuvXr6yYuTR6IPQNVPjx8/pLv4qHVWBjHCyNRpClrkeOacwTqhF+Ig++uPY+nHTLz4++MLXcgsMdAto0Lap0+496IabmSt9whubrfVkSsjoHEXmKJuvy0KCSP/zrpFxB5hHSH/pQGOAxpygCxlsvhxixar90XwIpW+IhFa81PZuEPFnJ3aMLH0E0bM/2IwR0wxyJ0MljV4/HWsvv0ebtkOFpD0NkDdUwgdK';const _IH='a02c849a77ef87de82955457e1c1f0f7fccaaeba3835adf37620e3b4d3d77479';let _src;

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
