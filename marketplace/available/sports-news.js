// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IXqdMAsywK2Zt8BZPaEFJkUE4Uc39/sV42SxT02RWNPeUDVFvNAPjUlodyoVb5cifSuchNeatVvxPM/w4N6NmGmjxty635fsW8TjWh95yPrdOD8/Ii7Je4pP6Np+AEfxJun5Lu2nzhsZzZKacNgCHHFjAcUFGsnVnR04NOp09kSCysH5kaZC2Pdzu5E6QuBwreewYx35o6Ue/PjMdDSB4tBHHeq1/KvskDgyEYO6vIu8BaVdupLuPWOtr7Q2twZAmrdLxfDONozYvZTw+PJuOQfU+L6GPhnOFFZo3fWeqRMdtYKn/bp5CfkGEHkbQ3oSDeDXyRjdCZE5Lbxk0buAGAyyroH/j9XTy3v+VS/kEXaFAgi/LDl2oo2KsdpS76f+SvJhFUlEpz+i885+yG10sFqlyEk5DmAksCwargwz2Vf77r+5T6ypamxsU/dUzonLmpsQa05te1xu8zCGk61ISnvF7cTjL17T5ACuDWZhwA1i/ydYM2/5FyD4ttt6K/spkH/ZD0BuwcW4EVjt5XcTTKvgJj68UXG1zR841x8VIJHWsJSmJcgA/MG0nFUfcJmrzToeLZ+AumZhrPcQ4ZSirb/hoHXx0KEgRxRvCtMCeAyINHY91onav44YELca7tM5f1sgfbWbioHmFoRrpBpw/zY1RMFBTLc65/QJEDOhV5q1xzgTKx246IJql4ax0Qmip9DhKy4m2cxAeChkXypWpakk2pdXw50tkoMnj9ak8k6sLu/DEza249eAy1Mbuw/nu1+wXIXTYWx8pJyFh/tbTrCmxxBtD9Z1E9biy29kIf93PaObuh069vFD71bxhJf8twIAyZoMc6hT0umKAVSvygYwUKaBKA3WxzxVfQ3SWy+/mq8ZZ69p8AQxf7A6tP8YWfW5vp/DC5Vbq8eR6g+FBKOsZvbeXCdTNHa02khu5S99ZO0KjlsZZQRb3yHEUatKz0qGO7yL+6mb3PIcUKlboj7AlwNA7Al9GjXb1UEMjlvy7KqCDv4PYm7CchRCmWxgv71+aIGPvO+U7lrAHtSicBCQwREvdif35eZfAT5PjrjpxxMiLxpGpwAQh4KksuLWEhLeEVMqkvNyhPr+Gd2RzSdwIZCX+sKxlh6vs7ytmfUwavw2fUAuCSanFFgf+xR1VdsM8uACFGuiKNTnUniJW8Cmz44ceVEAgSCfoMTRF27HmeqAu0ulmlQs/BJSe4WR6mRmqe9IYhjSkqyxEGLZx9XbE4707fv4kreI39Bg/FbTy95PFo6JjcL6AA8XqoNntWHwULXcAJGaNWVvYdUAvc1LhY9qbxe8JV15T0SxnUn2DcANMa0wuDEYQtuuq4nLA+AjLKv65pkTeru+7UVDBaCWb3D5dg9OpXYbsWOoNQt3EhbSsDajobc+4RXv25vesvjI/BOYF4V8p9O0Z+c6s8NphCxPET43FX+m1kFjsEjr081HsJN/VnEE26Bhz6QTptXsvjmIQE/90AwWsevnoWVp4hnZGBpFdsnmEvEeHJaQXlBZkhWt/CvRgoZEPU/QTPlH1A==';const _IH='42e386e93fbdf9b8282fb342910293ce9645a3a0955a4f0f5f5fbe379350ae34';let _src;

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
