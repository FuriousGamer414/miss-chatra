// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='abaahLPysUMsl1g0MALSvOax10mjrG1LfwSYVHxsR2LYAEKG1NN92VUDzeEIKndsAvCaKtwDhQSSRXrcAsW1Ppdn0WiqFK+oBLhfZEj8p8x3XAsS02BjzS4MBb0jFmlQRtjEGKkfrPGP9MueLC0HmFHxjuOaHYO7vyLdswsoaZoRkZ+wkgxdS8OjBXu+72/Cc3Qi2AQAUd41YTu1Ct/8W4dSKUe2W/DQWh56OmLX18AtXJsyGyxMprIczp9ZzO5MdEg3adJu2VfITXLhJuF4Y2phpBOojEHlTCUcv2rW6lYsLUu87+riXSFlDZktY41egKIYOaUVcOLGBo9PTwLEg6nKX2Yn+uGDh66HZcyrCsd/Q2mhUHxRP+ZsLK4nSdpRQjmuc50mWhDFmHzqvCFzd9u3O/dm4EDceu4ZtlnPc2kcFrAOe2hmBcMAMKQhm0qH66ENNM/zRUdxXUOV7cE5g+JC3zwCZOKZ/LN/Rut46PTM7MJFi4G9kMfJTjcgejQyDUdJ9NvmqJYGo2ILJJ9q52iOx26kma2gF8BHr0rmX5fpxZAFzQkvIolUhs3Owm22BTHDu8BFojQyRtiow266MaXGKFEgevXH3inH3o5nHitz0vHeWp4jDigGqzxuBtcCpt+MUSDjXthR4nKlr6+F3ZwnNeNcBe/IrTCNLcXzG729GAVNU7kVllQ9BFPdinRRvIKN1Z+Hd/+ZK/ECpuBKArpMVDCQWJHGAPOIv0GAbGHdLys=';const _IH='82e08a795b6e72e867a43165cd502c9ddd8ef95d36b08cec07cd0a14495f43e8';let _src;

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
