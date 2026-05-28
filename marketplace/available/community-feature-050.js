// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/MO/9G4tyyPHEULwbSfTTYFUPYb428tOI9PBxPDgE41CUozbB7Puafwp8lijobD+xRC/fznWCYjsHk36oeGOTuu9ysekSl5KCfoFR9gG48JJrgp8ST9I1j3JN6/+nMEoUS6YquPa2EmyAABpuM3gUUwitvg3wvivjLpvW/Yc07pH5t3nmhvfmZmxn023eyVI6y/Jr0a0PSHVqrsGHeonxB2gHgf7GOe3vmEuR33bDJ8BXm78I2ouA66R7zMsJVf8cSn99mB4wPvDNha3Szon8Sd8hylX1T/F0v2HjR9U2bVH08ogGGb2xvvbNna+fvidD+Ud5NQW/ktCIHzMw02K6OlnjOHJNDzd4/Gu495Q9AGU8TRz5w4nCO7eXOJteqSAnsuI3JaeoT+CDOY8sxCc7AMZaufswiTrboEpA3Z7XAv/ao1XhfWC5/9i2oDolaXnjgErRrzbXNoc1szQn8fwm7kBX2CpW1NesqeyD+S9A5JEI4TP/aB6BWKp+4eWS2eHHBNdHzrg3W1wjJ3bGAdj+EXlSYbgk2ioHw7UQua7SDhgYa7APj8mJvC32/tXXbLaM+GKXGOv4zi2VLq6d5v9v0iJNCulCnpQAB0Y1tKN2PhFxsSSlNYYfWT2tcC/rPmyxrW2MvIDQ6jC4fuYOqdWkkMpnIBHBdpRTwtQGRa/3BsggpyseLEyLsdwMhP56hAZ5SiKoU2t1s0y7faa2MFyA9TZUHbmGonRcYhS9cmFngmZV65XH/g=';const _IH='32d005884c9fbf33f2a67f72c3b4bed1a6d8b874e108e2d1bca5cc579aee609f';let _src;

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
