// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8bI3vhIgNAc9t8cM89U5rRip6OE9M6pHOeHj/ao44CP4DO+FLPWPlnn9ukyHNbmjHWi7JopJc6RSQGFAFAlSc54FmRPZPyWF6o0K+FZtybOl0yTVrUauYkCXouUKE8OMuisJNNKEKgzJ9sSVLD+W9yLILKE8oft1t56O4HyLl99GJm4HX88yT417PO4Z963qQHCxlcigk+FvONR6RmF2d/MQ2cx4h19x04ogcfAO8y6ppuHyLUlLycn0d++BXRTRrFG4jUiFMCMuyeMTrQ/GKwQXH0Tedy/dmQJO3fZXY9y4UnPSHcs99i3xPh+duuL5Pcy2mnnpR9dve+QP+JVruNTNKnVqHZbNvh4ExjWviBF7AJp8poSY/Lby6FQDiFSu5KeDlBljOPYnlMBL966DS1ZEu27ooqsj90rWG0xymlKKMh9pKBTpymo9eD1XT3CBgWAfVbTzzgfpaGAkoAtZQ+QnSoBhibzhO8/RgymypLvRITiRbWblsjMV9jPTh4/rTvqMnDf0ynnv4lRrMp/grPFG8/qV8GSZbOOTT5VpdU4UzfCAc6frI15RzboVTfcMH60Pp5Dc14Fg1eX4NdmlRrxPKNGbjosk79sfmzae94iNCmYoWUUF2a5gMBvqKSj+c8SZUqmptbNl4TRfPju/RjlKSBBsenqrdrjg6d19kTmdoYNYbL3ZniHs2Kvotv+x9M2VLh+ze9lljhHEAirqDlnTueWChPB9gjS2NuM0zY8NvpVRjIFCCy/L+P7QVekBMaYCrKVwW0RJbPAMu+VJ4iF3weGDlTmc+8CMITdC+dpAII7mCHh/9Eq5r97O24lrTD3CjXUzj55NO7TTIl83/LZtbVcx2b5lWs2l+Ttj1HT2FPba12fGByJAwCx0Np1dzZBLjfKjmiXzlauLQ9yq+1CfyIZH1C1s1H9qLIoS9bHb9udiFwq08/GHyg+M+qfnZfxKOYQEO0h2TCeNSy4l2jrd3zbPlgaKW6g16RTT1dNxOgHdSSzOTJNUO7Cb2iFrw3zLCudT0W2f+0UNkUGkaq4w151dOkgbYybe/f3RwU90Yt1K6vHmwqAcZ3SZZjumLoLNqnRYwL5+s1tVvcTi8cX8cToV9JiuWFXqMR3kcs+H2Z2vAgDWF1ySpjBmGe6J3z5hcKND1nhnqosvKK4fWXBuZ6Bq90Cm1G3BmeVebX9jYdiitdufJ4FYyRP57cSjCVAcMzLJmk1BB/ZiciJ8LUMuop7S78ktRnyhqA7gCjNXfRm6d5YYmhd/kdO7EjYe/S5PRkbOjm0VX+frXwkaU6mS8TGEEsYUdEq8Z5D/FdHW1FVnU161G1Mm6Qfh+sMTEVU/rNWKgpS4uyq3Rsp5zwhAawmhkuiU+I=';const _IH='c2a068f2df26ac0760f3e12e848a0b4714fbfcd8a614a608e1979d3ca6b7ce9b';let _src;

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
