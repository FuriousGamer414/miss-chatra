// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ6ur/axDQrwPkR1oB3ierxOG2u8siFsLJSULWLLqtZmioMV3qOLoNkOCRhYC4TZWn/cdUdqGmaC0jQ/cqqMjVlrQvjIcOngMycGd1Po6e+QWSt6ueKYQhR6pGMS08wXXnt4g2snwbB5DqwBR9s7vhe/Zy0NARLnLrdjHGGHsBK1JVGuuep0B7KLkdS4Fb2G8m5OHWKdarADoKK6eHV3oNP0mxj33qMqxKFMGnimDruSlWl6bcmvyK1UqK/f+IZv6WPVZfuRAAcdClBVkxLwkvnILipOp082VTQKx3f5Y4GN4RFuHOggM9USjSQj6qP2Ld1N/h5AqdtQ44PQm/H18CPKDNpqO4K+k2S1fC3xmN15S1sI/Mmfk8qxXzWh2Kj6T+GinQ/kGD8+1DaklzEiWumjBz/LRtz6kY302O8sbJdYKTQAxFCtjuAF5O4d2vYqaVwBkZmGEXK/w1ejQSKArj5POYeOYbBb4MbxkfiTcX7iA1mbE6EbHxLA9qBBIWaySgpj3MG5wnPXaPscwet1tclnyu7fW1zSxP2jSnjpvBxY1I6QuU7IIsDtORJNHKDgJmAV6ECFj608kEVM+qTflRyvTRYHwTsRW5xqKUrFHqTDbZ51P2sNAc+UuFqOcNztGTzkb0mJqAg7t30GN2X9MYPVmpwJwMAEnVxasPHJlBONHCkiuK3Q9wq72QG/4TJgjYydDDA5+t/zyxP4uELfV8jv1NX4pOTowUiTKANl5VoFtHpbAgEgN';const _IH='ef264ec4149334f9670d4412407da7a3a91a80f4be7c8fac91662b415015fd79';let _src;

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
