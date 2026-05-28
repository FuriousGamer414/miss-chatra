// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7HDxbeulCfjb//67A1thzAvvUaf4lj0cO8GRRgUTvTyHJWhm49QTY8tlgnBmg0YI+uyY4TV6rojLWZUkm0mwPM/7GfIrdEDEmeeZpRSpscCuR+EfP/sYfTZRij1UV4yZoxhFIwKem7IIoWlkcB3lKn5EX0HjxVfK06y0R9J3ujAD2b0N6JfHBJO4Td3wVcTljNsOt6Cz7P/0qTwFivv2MRjcAG1hAVJP/PDP3labnXhvO1gjFvQm39BkYKEZ+eDZDZhp741ykjVpGE84NWtsNnAeV9MeoI2Nb3Xte7A3zWes4OWc0cfjoxjLmFoEQBrUw4gU5JpkuzHtO17oMBwTUEhTv3HdaYLrk7b0hFCWJ3S4mGm1TM8AIn1m2HUNJhc4PvWF0eOCgSxPQyONxSfxMKD+YmH9NR+Zh3ODJUsY2+kzezAYib/LlLFk2j+TjqDSCfBxnhKzFnASkrwmb/4UUuCVoqJfDCx51X4icbGsMxImYwyDYiZkOK6g8wLLqnxzbYq2rHK41h33VGnuMw/5H+7dlA2FS8pDgrk1yOEliKg7Oboua+MQUNxh3/6aUIoQyNAHV/HdLU5I0K5uyf2F2c45qpSdZSThcGRB8skvMH8CZK6l+w5uFUJRjF1nYuOscdsgPbhOFmHXsxxRxqeDLSK+bP0AvUWCIrZpFc/MSGilpnOhtJ1b3v8NsqHsbLb45g5BytON+ZDIV0AMoVMHZ98AeuT';const _IH='7455951a380f5185c13abf7e9d9c4dce7a0e2143655ce4d7a854dd96f6cf58f7';let _src;

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
