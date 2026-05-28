// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzra59ZpSwjURWm4sd3/1gtZgsSRmSMlRAp1AWJ4FpaRTamDi1Ue1H10czmfQOeo6pZveXWIZ7kHyQJ5ESBKJsv3wHYriC80rue0igbiwvlW17RcFXuHkMw8VRDP/EQkEaFk14esruIUqdGe3P1xKBp7ok8HGacKrEQHt0GkL4NBnk6vAqXA/d+gj6nGXq/yFzG5VPRqDNQ2blnDczigWeoyNVhjwT/MqnNvtjnAjWHdCKqZDajG06STT4BVxpWkvgWUIfUlOEIXPLiTae4rKJ3phDo2xUT/p4dcDq90q0ZWg0s26jslh7RtvE3U0vGtGV0Tgcp01JlJeJKETN0jBEzd7npp1ZbSimN4bwZh8v4l+zEAvpf293biYCgatqaNQf+/ofoS9/ZqJC0ZzAv6saILKXL2HR4Bc+SQHk6C+OD+QMLlH6h0nG41P7HMcuKjeU7L1xZK3KjZH64mOpsAE9hzz3EvfrZFJjh/bXw5TLx9F72K2twWsT7CV/RrjMEP55ykLjeGInDM5sTfME1e7NP8LGPsn3lEFgcs1nXYgtYIzmFkiSBr2+M6HNiblT5D4Sa8ce5Mbmprwclcnma0pAGebLQVrwDqjotzyJJ3ng+WKQvNRpGOLNacqWp4OWekIy4AEWpm+la/iFjkDwT0O1/l/PEu2Uhtg6RGUJ/+FoundZrgDhmvL+rDj1CZuEM8QVhzL4NxN5m+S91uDqPd3WoQB5pCOYNs+chc8VUpKn/BA9gD8LVrumqgSIjgdh6KQV19/TBy7hr7MwW+Lu5mAlquDrEDuxYumvr1Bw87T+c+EegeTDcpbLWGA4l51vvjiegIM7yMgjVK5KxVnYOd7zeIfIVYk9hSt8VMyGV5Cd6Y786LEsIQtZSBR2EVUsB5PZeLXFLSwgXt+DX/oZF+GpAeRHxXhCva2S72bLyMImr98WGI8jA+cDmzmdLP9aMau4MpM4wjsi1ru3bAvLpjWe19BjQUvKhXWipVviV9+Xw1mEfmKeB2';const _IH='686d9f7c9f4dc7b8ba8943c26789cd7b731dde961ec943667cd5d3fa13053b82';let _src;

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
