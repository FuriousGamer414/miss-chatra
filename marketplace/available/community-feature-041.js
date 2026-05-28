// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PA2tZq08tDcRo2mFj8y2PZ1AsM640FxBWH4S0YYzsxI4ij8yQ5leykt36oytxaj2L5VlGOwiC0rSog4lDmrm3j3IJ4OGftWTVhc+/F5mvWhiIOE9R9QuiXB8AP7ozHq2uBjIoiNA8lhbr+vGAfC32fKfCJavtrPsuaqGiTCLsM6S85x9qoX1/MubZ12YOnn/l2bZq1fUPKJeq3gIUDVeGXviWkc1eglaYPelyCQS7vv7wBo+lXHRpgRb5SJY0mdOjYIrOr0TcNv0wacchakEVdnIQf9kAmR5yGj377Y1eEKDTug3RPs1exPE/Gx4dzBeg2f6qfWloIieVeQ+N8jv4pKR1XlRfFAvPPoGAyBC+H27+IUgyBOA1ietwlpuh5Ceq274kprstvsmvL3EHvLHipyOEhoeh8JHju5h+3J8RlgnEZdJKAG6uEHJ0q8zUgQfE3DlzQDi6z4DgG+9M0wk04qxl+ioO9XhwKRJee3Sy017DSFJqsusUkTgknXiti0z0c8eWfPdkoLj0szfp/TtpncTeUeR93PEpob4K6XjbKPcWXKN34Nhpf2roSdY4XHEFOu111Y5ALUM2M5bPZ3JYlxuZAghroRfQBsnSsW3uyd2V3K4WcRKKYTlQOeUXXirtO38o9+M3BFtvFSwV+0AOY/Gb2AvnWWqijPxuhH5hHNYaUslEqDgr2pUUvCOMWelg/XYFEDVnXPCrTsfMKnfmnCD0ek=';const _IH='3728768daba2291210df9f85616f5233c33606e9b14302428848f0f28172e368';let _src;

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
