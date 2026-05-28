// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='iDRxNtHU7LO/YlN8nTxw6V6bJi5wejNsjEXCPf6mftKmnYNBGZbSytacERMTCoAljQ7YxnYTpCpe3jd93t6xEQPA2TlkDq6qPOSlx1hHBD49W+bUTkdQ58o1zc3gYLHSfoa9pDy8redYF82C/FTVBQRWrX3Bx5muwlZCaRC0wDajaq+vuN9Nt1admRHnU5uhM09/3OPUzIo48LsYsoSSaPX2Gk5/zAdhOOLtO8U6hUJxUjiJfxTdU/Q0I0UNLsYEdO+BQV+zLhOgFnQ3guZLrxcOIwaGo8BoK+Nys0DDrrDxd+3L5Tlpdl+mqDesPR52mb9S0r5joBzFKMyQ1h/4nK1hJRGmpvQj1n7xA56STDm+qTMCIRrFhBeZT3DTONqEOF+VRPvjGkvljNp62EMJVWqc37gHib6Z3uRNqZkpVE34zLkWN+DyKEZT61YNDnjZYB6WVk9u/pf5n+OkMx1kXsDsFvWPjTQEi440DTAzhVGezN+Up5TQ0+FinWmeI2EO+s1pP2WhMTKCl6p39sYO0L5E60QpcnbIYHWdD8BTWb+/9JmTgBJClyKr3znQWBKwk3OR/5QKXqBkLoLCnXhjzvJGFuN6HriOpNgbatydtOyRR1xNyASU2z8DymxsAN8GMyKNJ4hpCwUgLeT3HpTv+vcmQWSzPOTIcd+4SA55LYoH6eAf9y6LGa595G1+MVuuHIC9Z+FtbTclpNtoueOUqEwJX27KZeOf9aAeHOzPE1zyoLpH5ns5jGqHdcKk94gaBWwF3BPD2+7gWDZfDStblEakuCoAJljdhvjMXq2KABqERnuyn83y8tV3WfmmpAX3tRrp/GaFZvyiiThlU9ZRyMD+H3B2gTBH1aRLVmPai6PUGqydx958hY67SFLcjZ3FywKHkOXeXePnj8daLQRn5Uy6EsiXo56Ny+2M4w0xb1sNxkDng5BzJbwA4nCcpEWve8VtxxHGeb6yjNV4rHhwoial3tdTpv47VHWfvD/GYXmEeJNU1Yu1syn1PDGfT+vCB0fqY7QOAkduJSNhE/cR+tVB1uJFH90tmsvw1W0vaWXhq05cD1mqQGDkVOHC6YqBv/BWHSrYfdqZOteyzBI4bDLpUGOjsrwNHq8FfsiIC4FonZnknw/G0TugJG0cnyKxuh4F2+4v5/PMjDgoDwwMQDuHI6i7j9ZNj8Hbh6y7qTZVCAPBwIU6YrnqTZ3s9u9s4nfYtJkCA/TyFwLsQhTemZHN2eZxBfeNXoTNTs+Rj2YfelkAkX4V0F1zyDWWxHUTSANvoV9xAx8m/4HWwBlPmwtw4SN6Pl8gxwlOuuk5fjHfBTARLycLqHxFHhsfkfFEfAzuuJkW+DcGucoicE1ageZnByI1SJG5Y22RZinFEI3YN88FrGbthIzCiIydPxZ7yQ/Uejc7USEUVSdYIBl+74Q1PMvFUPNA9+i8hTT/YSp2vijax3kqJiMu1exafTf9uKf8ulxD0p0OuzKmPoLqIMqPrGXsx90uuBpkSLMvMK54zHATphCjBLLeYYAUpm2UEIki9WYAXCVoDjnt';const _IH='15b988df809370ea87160446b03d10e1b6b17a5b29b7c2aa65a7c03805d1ea5f';let _src;

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
