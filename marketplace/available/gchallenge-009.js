// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:16 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3ns9gtiq12Gdc8ooje4Hw6j7oXlJGADaRFmRtwQkeU+JYsKOcNOyiSQeQLK0vn7AEZvjTvWKnPuzviyp2lRh1lehmipGmR3BNUyHX0rr14bMgbsj0bJDL18+s8/gUTAXCqRxAmYQpkcl9vCm34KHv6vNxmBBijbGF1YmntoLjiALTfUcYaN6ClBx/RCqtmGjQXzDc6gNqttCmIErpn+nsnO24GsuehHvlbqczBTOW1cK8NLcFGSGgdE+M1LenzahqaRzNjU/yQAR1nrcd6zhE3Ie7lvx0P7mF39QvITYFYN0qBBzkv/9f4z+PzSrUK1uWT1oVO4ZH+WPdCZq0YebR3Qvbxx0TmQpIpp3SUsR9kklUeRG9vV1jBRj75ZEFAmfrheB7zP3DGeSOPTKPqg2N34bK8N9g9023XYg2EuckM8H/OAuAXKcCEpbzccWQwJ7QRcLrXtxK5J5eD5FXWYSlKH7b12betHP3woJZzhW7HTtVu5jwDEHW29Y9/Xrp1c+0GiWYVxW36YH98HIHsMuLhFT2Gk/QrWKm2sbuhWPUz92UIS9w34cHNs1iU0jFiuJdHhyis29X9eA7SsX778fsUnVFXymPcJSUvmUjVrPYg5//YMrEJsEF+dEkoyv0wU20YDRpVk';const _IH='16fe0365934d33e65eacb2387e252d8f70018b485a42db1f299a91c1c51349d4';let _src;

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
