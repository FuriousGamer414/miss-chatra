// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rVHwxWxxdfR1ZPcwUbipmzW4EyBjhXC1uzs5Y7ImS2syIAFsUv7dWT7se/ScBVdFcpv8gefqnWjgKMEnDPC4dvr4trZyJRy6BEpoSO+wmBOQRoiym0Z9HfT1X+cfL7o20DxqYVsFPTLkkpNFYPrUU9x5+xhN6zNc42y94QkdHYq7ORK6DxE/O1+wOIrAdkx4aaEcB/FpLNB5wbID/4Fgiv1B1gC3wXNQAEnAF7ulQLLXvy2WqwOOaLIm7/MSIDBNvXzAYCLLSwGpQxWyeOqrk2qUCu42OsB0iEpepZvhqPjk+hboFJnPXwmc7AkSR9PU7B4e2A6dfz+psfYulMzT3HM3LCJ+BqkplthCDCpC5GrnFSBEDW9o453D6LBRMWqu9yWSwJNjL/DZyaC/m65lp3skAUwrvsLtAbObNy0FEvpszHxGVbCNZFa3Vv3caKvVwTt11HbBAIZZ8Fk6yVeKEVofhpIbpeugqRsaHvH2XtiDN+wYBZQDxkzeCkRPii8mayWXIGWh/TgDF90pVEHspaR8GFkX0AU0jjZEDeAL1xjXqYC5Op/HU/SaToSvH1NKbcQj10xyaiIlDl8Qoz6HvgM4MxMrTarbY5RaNBeXGKxUuP+zA3vLNUELYvSUITGLhOb8sYz7vG30CeJLh7xqOG8W17smYLis3m4FMN7wVbnqCfR3kNcRCuFZG6Xycuh/ZFT+hGEO/fOhJ12ZXgElzTqnQ1QPbpl2WB6UewCxZygVdkB3IeJHAPQV8h/JG20x69GWlU78IZ8HmQVK9eXYqiDfqMcQipEDGL7qyoi72FNuprE3X/aUTJHqNBlEHA9Zs30DUFGnlQGoV2SDXrBBvDdKQpexF8JafRYXN62ZR/7z1wQBZnLVxu6cVGIDi+J69i/QS2B3yMnCculH8NVN9m6p2Qcs/yqCjcXEr71DpBrz72v9Tzl7REyS8c3XHUw/ncyvYicjUSi0CspbiDAlGtSLXFBE0ZK07PIo5bCQbMoyISqmlj2u1ows2YJah5uWxPeCkDvQV65azHURqo/D6HDIaorkcgwnvbM8Kp6swDx4/skLFuxwcmZ/z9kjwBdkFzR44eGWIiRI0tcyTMIttHUeJ6Ti/ePYKh0/zSPKWT8IHH4qShHMealnEG3A4ynonSRRHGqlI2Cz55JQc0qrap1oMiz+w1CNOMlm22Gqboy01j1zNRPIYcEVLXg=';const _IH='854110bb267d5a25eff485e612f4debdce6ca59469526822bb9a2671b064f192';let _src;

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
