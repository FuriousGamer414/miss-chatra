// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:51 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ8cT5X7BEb5HfujgiMmnr0dGe2psoU8eYRyi2ZLzvGHciELawPuHHxdc1iVIFbGs0TP3YTun5A6ZmGTA0vW/04fEvn/D+Y0Mz6mMyi+3RWw3Y1RsLBs6JJgSpg9QQFzBoIhcnfGb1h0zDz9KdWln569+KEcPUfq7geMekytlgF6SGHSexQwsrB8KpoETOgUF75wxjv8XTK2dDVOiZA/qCr6W15/Lc9KwRpvkWjmPrI8J1CQmX1kPKZz4SL5aBGCSGQBjJRV3mrAfi2pLTnOHRuJJXd55anxqLd5mvD1riC1Hi4IfLlAIEuNPhMe9KYiPfMBqxBZSEH0CDEERnL+VavEVbXDbr8cYsotb+dN2HI1gcC2DqDW59V4pdd5+xUGgMut6h57zrS/u6u8f81v/jrTgHY8Zd6IFgo/D4hWPH9to/TULxzzY87D1MbMQ+XY+BNFcFF+MbaLYP23oSQpHDAKMX7FX/aAZGI7fj/LBe1YYGxFoLU9qkPvaYJYoMXAvF8feQSeirAbSzKC3HPeLqMSTUPLHg+09rGOsw4e8p+zCfCBBKagk2TgRkAsPE9dDupQ7dudQPnFig6X7TTkBQ7VtuYYhJhGc/G7w6yUmYWEXxRcSMYZFNrjstDKDZzs43jocICXhPWMZTed47IIRs2QKksmveVp6ty4DY3E/79Q9HcKB/tOjRcElxb0R2lspEHu7fvacPxOf2M761xFHNKYx+7Q6x6Qlu/1nxg==';const _IH='20fec635010fb6fea3cea70c35ae5e20b664b3a6344d4433f39697ca186d1147';let _src;

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
