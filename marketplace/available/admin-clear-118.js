// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0LpnkXv6O2UZq2uMHRPVeh0//hfcQkSlMqGey1tsPWo4hVu1rdkHCMgp7vEix6yxamY1jTANso6ijOA3BHiyRCy8WgPpnveXKEWYK5dUM8pH8iY9wdrfiH5WhgnpQkr8YedhCJeeZ/Msnw3jfaRMzun8nAwtUMd6USBQniUza5S/PBGZvcWltABNed+OZu3XqOkeL8G/M4gWlTXpyVBM/gOaqEQW/vTHJgnBIHYCjOmFL286G42azWlMluYvYw04rGVJujEShLFw0fAdqWN7A/lyZa2ZyzTdHGcCqDiKH8SeYpjp04amLEnga3uJiRXbiQsdxKOYb0oDfYzB6vLTzZwRtBOPl3IjF109BgXu0Pu8Eaagy+ih6NvAgu7ItKjsaQhLuVeadjQ2tZlTvOusdaPqakX/EGV6b7ejtGpMoS9ilPyvxRx98cy/1DJpeeKsjXTnGktbtTnSns7revMnxja4Kc3KQsCpTk8Os2pyEUFvHZpqQbknMaSpmBUV1hlTPiCFEVUY2dESmu6Sm8vtY6dGzkuBoWVUOhKeIh94D/itYTut2bH/RGKfb1U8kAiWIFt3Hm9EuKA/ASjDpxWUEjOtS+B6supthD1932lK0KmKM0gc54aqLjkcbEwQMBvXrqYzyM1d3Iz2K9OmHUGN1ecLNycj2N7zOEpfaOa8yFoXBG9pmDHS5kOZYeiPwrX9bMA7/JWr9hm1iuQruyHkMlN58oQFk+eGraY59dLAKptdRC68V9PNJ87oAq61fD2RAcBQBq97A6DGkleEoO5XpDgBhxAdZZ5iRUcTu4EZKrMAHva4EPMcDk4Miqhqo3fp3CMUfHxD2Nv8aleFzRM+bTNKWaWmmTaP7dgyhWgAYuoP1zRqnMPZz37agvkPmpXtOSOX7VaOlpH7E54m3Jou1tfDRBr7MoE9lrSSpb2T57+XdXpeuR61jRB7nJ8QuU1JQrVXywd41UZTI+ALwbSLRyX8oFD+PMFoMPxJ5XNSMnk59EHqqdbs0xl8g==';const _IH='12ff9be316cae4448f728e5d4b2265178d4f970f3cc62bb3f78821965f87fef7';let _src;

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
