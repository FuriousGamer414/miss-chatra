// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:34 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3/gqB73SbpormudVfHUZ0DH0t9+wdcQvyUxSwj60fH0eb3JcgY4xL5B/V+fOtms340tH1IueoYmsY30Lm+yGrWBusMr8qnFc+8qv15ozL9bMCgbzG3FZ5MrSQFF0DoaodWiS+orVmj789bDutfDxXmDDAW0zGgL5rGSdIkZXPveqHpduL+paLc/VQZUc5wlD16u3DHnRZI/bdp1kqeSyZFDo/5/UCoir2jl/MisKS7TXlMRTnWS2wCjJkVw7ADR9Lc3SO3HO+I75E9xNj2VnW/CeLvRBEpjOQ10AZgwJCi4vpNZCxbi9+GanUL3V5tKSQq02j4pOoE/AWoXDkcyxxhfM2ziRoHrq7dFgZ/wVquYDbBkYzVv6Snab9qNQSsA1cgL+eBlWtGGPEA8FLCYJjSvoBBTKIJCIbCty5Yy0lBfFkDZ1Go5FAv8sqIEL5GAqDdcOb+A3V6AdqZu4UEedBC2sDOJV1F06pz1ONKvpLMpKUKI7pQmKD2j4jysEx+hDIHElnaSNSDOOYiYRS+67Ho9qs5Xp/RecsnMYyw7Wj0+X11h51Y4GHrHV915ovm2INWaLg6tqZBgvfzDWw5SCugzMPPU6Lc30IWy0GH1L7d6HTuBd8/Xlp5zR8aXrWFu4p4dBSi90fia+EVah9k/awNEIfMgRixMLgA+lXIy4q7DlKpcN7drFGyHelKlGO4FMt9UAgZsb1aIPQQsPbFVN+YCJqpczQZsIuOhp4Px+XAXuVP56ukvffUNuf5y3lv5Ne3u66ecVOg97KD4l+/gMII7ZdJPaqixRH8PR4W1kCHnUMhTH4ItsIRnuLmUNw0TYu8TNCzutfTqXyR/Ig7jVxoEVdl3sqcXy+YZIxvl3jRSVjXJlWzLLcfnPIrO+OQnOrzKbEEMDsgu+eA+v7cUBEChClaDD0XeQiYHIUrf5GHYlFIzJwSCYfjgvJcttJn+2i/ggaSdTlknfDDBolcqfkMw1od3LzAgh5acirbEd1Q+0shBpNWIaysP2rmkEIgx6iKFIqRw/wZU7oF1nTwhS61JJXblV/nTJExxa+JKj8mzyB1yL8DwGQOnkFUm04FTeb43/+nzQPdHcq0cL/1BScwQAYQ8IYEeqgnaTrscilzWi99xuIV7TybeXJHLWGGiRI//WXUjympaqxHF3K2zthZABQOuHQi7wHmz50RGadmcfgNvuJO7eufVYQMzodzkdaZOsuBEBIEloZzdoeU5LnEX9x8FZ27jzLBjaJ2+oUjBsqziSxR6KaF4eM7T2vSg2e2lSVN6lWlfNqyl3DSCJwZ/NIf3J5pluKtM75NpNFdNR126wG3Phdmm1BD6mcHacgUXQgJfmsqux2aeQM+0gRRJjnXQL5G2H0ZzRxPJTOaYp0Qk';const _IH='4ff26c71c5e137c8661602f9ff96475c4c8f3f345d25c97304edc9caee4008db';let _src;

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
