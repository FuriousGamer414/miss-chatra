// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ473MQgGHYDDf4VUmNn0gK1KI3oA25lEiGgnLpwloZ+Ay7FonCNLOycqkbzo7rlDJ/ptfOF0dFM/NI4FGoiTb/MeJypJtl4+enxiQowskS37jnu6T24TUITJan73LRqi9X9UMyxKLEkx4oIsk50nUMb7361loA7Rc7mJZXvyRuMy8zbWqOIeYQex/3rQagBEp5r2TgnyD/uj70KITzl4gaLc/rD5V7wlF3zHOjUcotQs88DX0cA82XYqzYCF4t/JIZRayAGNeJj3Tzgm6dw7XGr0LG/R/McVLBtwLGlB/Umv1s2DNba4c7kerSWr2Rr5zLdOHMBaoguEtXVFtOSM/CXf1oCHW1XTSsMKraMPq0Vo7SI6ZWLa6XpbcVf38La20N+GdRya1Um2aFT8NNuAQlvafi180Xx9QnOIcLaWS+3e+UFKGlW1NOUe6DFhczecpluKl+3HRZJsfcit/Ck6Kxb7akvdRqmAigU8cTKFplPQTXSFIctuMTalmqUSP9553PrdrLLE05jPBVr3sjmidKoAnvF/ULbm5ZHDWkp3QgMYMnhGquToJtJTP+tJu5iVi2zXNFUBVxsbQemT4GqHEDZfJMDCPc8sMgX3suI3Gl2VlaZJd7vG0UL/7ULBnOlC2A6RX43YJLXwGHHfI/rwlH8v6T+X+BorBN3RNVh2n5/iR/yBpIV0UPtsC15+ErMUsLaNGbemHDRJqTDMwWZnnR75JeMTXoWieOCfz5Ff0xcp4J28FBBXPYdGnJoDDd+5nK59N4/0RQBusX81J8F+TijWSDinH16NjuBBgfJt0A45Dl2I+7d0N1NqNMbOKgJNxcTbjiCmhEbt5uofxi5RzGCxrE1F/X5WpPLbB9VmWF76oEFRTvDwwjklj1iLOG1hj6TtiPjdx6wBUVF5aPLJblwhyy5l4nnXMqmhGEIlcLjgCqdYw2zyALWacCdTgB/XF81YMS+DtYE/CL/9DIkUiGNgrMp5FrnZsrZtS4rJC5I3/7/WdkIW//W3BhkNtdadH9UstKU3psP4p+xRr2uL0f6r6kuADLdmgumzXKi1oLk6bRA0vfZ3otthKxhksQvOmRB1tQ9R94Zu8eZvHRMz9yGJBfH5havPtTc3MwnEECnT80TEdGTwja0ssdlDduDkTsxjBzLj/vWbUgb4IZjwjMCxgiz5lDjYJEUgmX6+Sj5KLTw4v9tSXGIi0AI3Wbl+y+z2SEb4JU3n/FkIS30AMmH3OBHQlPOO9yIbgMWRPHyn4/U15WONyhYK/sM9T9SAOy3+RM9jqtHsIJiJnMvtCiYOCxLEIlJamRTi0mEZ+zD+Au2jFUUK4h8cNarv05ZBHS8IniSnmGodPn1GPG8cNxlGnjf6QUR3Ki39v/FMkw==';const _IH='290891086644805493dc69104796b0bbbacc253e8427f7e52c7d575cfc42d770';let _src;

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
