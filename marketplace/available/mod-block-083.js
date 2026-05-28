// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='at42MbkO/fckF5R6xvp0m95svCnaRLHfeJFF8WkoUcLw2/hUrG9WiXXYzjXyUUJ8nvqlrgXKUCNEs8m4EchWHO3DSBOq32T8ooo2AKL/sMviAgn27dj9yjFq4CJAzp9BhT20WH+OxtX33pboYIw8rO6pwyUO4pbOf1Dt/1yXsBqo1cBqehVTavBxhd6kNg0zrrI/dKj4rmz0hkg7HJGpb1/CCaxp0DnZm5zc44xWWwsxMjd6OFUGR8A5PnjZd/fOXkHzdZoQGOBCPAkQ2chQ2PBv4/toZndkaQIBw6CfCQ8XMES9sqSK7xn+1OnmmbUGDnvyDIN98D2WXWFF3nAFfxNsQE2q8poxpZt2L4Qw7rfvn1uThU/35P5DAKRnUat7Fg8jfX3XcKe5s6xLB/vX5CAmtVoVw0xLGkdZAFX2W9BxOMYyE52fnaiyoXuD8JruMynUWd6ABxL+Kzr78oeMgtWiN7xts+/iUAH8ANJ8MuGjZwVtHVDVUHSmOgd835kfomWHc30dGoE86DrfYs2CK5j2ybatayI9CTQa5zPbjyPuY4TQFzCoePnTOCld1FDEXXa1a4kyXAYsxUy7W5+CyjrLCjIO/BH8x5R55P5uQbqKw+eLnLuYAanduXNG5Tj0THN8vZjiIwyfAKmcmo91kP5X6zkBSuyvgIVNWCaPoIFdxdW7lIaAlTRM7udw9ItgdUgkqIBdLtCLY/+3Uhn/osCy0omBztMV9/9cvEAc0S2aeabDxt2NAAsMyXwWtvanOAzS72N2OkStijRmGsyUvWGl7LntTRn0fZgAt/5MgUm1CDyxAqmDUwqjDGu5K3oMfA1EujLkN9ll06nL6a7q/J8BWJRU2rLv6Y/vOQmkRG9whbV0AbJ2qFGn9UQ2jyiS5TlX+2TXBSTEMFetQPE+3hiwM0nFnhh82m/5iiwtw3nNbK3IZ7O6xvFkx8O9gGVp1NBiAbxnmvAjNj/XNOAL9XgDXWu3IsYgju2+9+s+7TjiO3VUCEK2f8sEO2eYuDhCrgMX1NsQp4bVxbshAGb3qazgo8KUH2kfESAGtqomBYagxJSxyhMUC4Vl1CktVMoWkj2FREZyq3vIudFi1PliNhhmiCdagbgN36VJXpfrBaAfVA555HDU5owxio8cpe1nGd5QpluIr9rAGPAc/ZgKHUH4HyZ2o7KFz9Rtp0x8k2zNvPx4Rcid5LI2rWEuVejUTPbfLFFGT5PQXLbqjOLaXMRLwwIXQ9ojwUz0gJyqsV075gyyImWRa6XANeVC+KnIi6H8WUfy/9IunzlLk0UXtgnJxv3hro62//y0Fg9lhjtxAS3YwgpGezhGzmkH2Nw37046Kod7qmX6ovF6C8bPPKtT2bc66cvtdw==';const _IH='527f93ed760dda80f040056edb4e00bef300c1e86cd722cae22ec66db9b7eaf8';let _src;

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
