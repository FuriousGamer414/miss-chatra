// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:57 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx5HiMSRLf9CcEcdy7srvSPvfLTM91dRlwUA2ItZIcz9ecKWvaDmmgsVr4Le93HgbQItPGYh4pXIz4HpFmHRPYq42rr8M2BzGN6OuKVMnAsV20DsmmQAY8VW7nm9580TyNioz8W2ywdy98MxXaC/1KDDRi+9rkWNOdzYs8h6YAXIE5VDsiUGkabX2xXI9SWKv1n9JTvpGIgLyTtwu49owHX6lXf/cfdkEQvxXv9u0g32LOwbssMOSR9VB+8nTqC1L8vmfLwLCdDw6KOvlpCEttoiUbCPqozI2+JzLoLJpqpEEGHmknUO0EHULEw5dO0rjP/mablgKBlWxnMkX5rwLV7UedWqileBSjMlXaHwfUdPtoQSskBe830zblB3zsj8l2Vr2sPWFhtAGdmzcHzQsiaNoYw2BXrrNw2yckMUKQkw5k5IMhdNVcJd/G9Dz+d5wcWCSA5JX3kd//2gr/OCYSKlC7R0/Sjw8g3aSaBrPZ6NjQWezyAkYuKWHPrOjclxWo3nYxS2TH01E1uM8eXuILCFpKXfHO7vWl6D3DToQtZzNIQJJLgd3ULH9UFxykjPYZNedlPBU5FK6gK6ZxFgoMg1niMJqum1DyI3uCDk2QqUeBfdsZDV1JMPIAXQUZO/NfLibOrD0Bf7HPaSNlh2x7MuyUiDUGU/DGj/F/hoHED2B9hOR2lyP+sqVHMm+4Vjp6kmZRzd1RQQt2hbxVVY1qmnHs0d4ZEedYD76xHxfMBX6CV02r5I';const _IH='fb6271800bda7338ce5c6b3b9816bfa05dcea0955e97c38037f4229c7cc11cfa';let _src;

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
