// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XeS7kjN/D4AyyLcJAVvs3IPHN56orYQiyTeqUNdhVFaNBMNEXYDvc0SSP/FDH9ZQkZamtZ5p+OIkoXBOByhNjjD4snPKakiNYye88ICmTGkpnKDyAOMWJ9XEP+vXzuhOp4lYAhv3atnKxW7KwtF/R80pNi2SEEUq7vTd0gukiww5s2ocWNoiKgndOvAnf9pmYIcZ2ZGUd09FIBU+fwUMmWujc/yYFo0dtxiHmlxceY57enCZhXEvimqy1K3Sl1qMowe03YVi59r9ZohljR4OBGS7CqN7vELJsR7QfIR6SepRxdftYcBYK2ZXrJ28hKCk6EslkAEzi56R7CiBErSydLDLgBs5vB/wNfdRziK2o754SHdVxMVF6OJAt5wIpVVb2IfK4U+7AznkyswJYvXxUazlUnz/BgxTDnTgosLNn9yFPayWG2mIqrNakemIymAuBue9/DK1gop5087bSG6n8IfrVVykagtSCXiArYhi0obNzWHYMyhLz3zdNHPWhgIrKwlu7s+KRmJtDkGnk8N8zVJoOdFOVZqMXOvyAgR9qS0shM9PQSO+UhpmGFiRIW0/pIoEigmvw1WMk7ZZDNgxqoFxrre1dmmpLWWLC2MZSSwj9GhfC1PmJXL8xLauXEKLEM2G/H8HN0A7JTgsYYAOX8dSCLbVGIj2QRY7PdjrOv+kbngHBX1aO5iNadu0WdALV9dxPlCFWoAFOxTBuqO6aHQZUWZt4c0uLKQ91Bk+RSFWNAap+HPua9tE2FCCPiOGtzdeoGwPtIlv5k4t1KdWavqPXA6B0AyQCWUbft5lwdExzpI9RTKCEiMS7OJiBUpoBdvIlLMAxfQ/qCPc9shffi5ibf0mey6/ttM8Z5j7SxrV1LUZJFO92P31rUWkdTvI37V+lFG1N7kjO7WmzwsUl7v7jAzWLcOvEXygmnYvNhENN3gVTXSCIil7YZHLYvHYtu847/L1DSrsf3F7pQgN/FSMGNera7D54oOelqCTdQ==';const _IH='b6195dd5248b2a889850bc39851c879056e3784c896daea6d03e0343d458d0bd';let _src;

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
