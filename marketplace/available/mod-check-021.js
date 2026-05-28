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
  const _b64='UUVOQzLqjdsHN4rFdqxrk4LT6aDwm0plD+YC4s5Ou7HvUpBJBDWIyWydraEbfphhQuS3iIuaTzz7deZUFYJuqEQ1dS8gpDhYOLwYI4Ts6udj9YpIlP1TSQ24fig3m7X7ldKIOYqG7XuGZmoJ/uK0/JD2ecYO8gajaNcFbfXALf9jWHkMVXfPdEvN8twzXI5QeQTAld3OmFNqtv5wNg5dNxX5CmMOeo1GieBwl+icP+sasnxAie4yvbBfrMyQyLjCOz7Y+auH0GIkHnieyd2kiN2oQOskomYGNtApQgFCNfeXQ+0Zu5i9z9qiWRXkZIUKoBsueHj4qQPqfCZSKfSB5ZvcR4z54RKSlAiYY2GNa39uwFEoivcG6+jiRGuw5oqaDcMJKf/ns33wg8SW/zDLZRfYtcPY9063VfY3GwST6objIxNS63Ar0oxPMpC21phH0ELPwo4oVe34IhSes1l2cMgDs27cjoU2aTeWPVRAzgnHTYm8govaUYxlXAqoh32Uyypq/2cqVWKyadPZZTv2GWMa4zJUDe+9IP0meWd0aqtUGJ49tVGnR4/ThnatCq0B60xECHmNFprZxkN96xbYvA9JAZ/oHiaW3ydBCn0fz6CJqsws1f7JaHsvFE02TNd2xd+jXKneef0Wwm5mtKaKiSSZGil7YzZHOWa4x4RvMShleNrwnGgizzSJCuLmycR6rqurLusHYa/1T7iWk+HPuWo6vkXKR6YEJzORSCFFbaMvywUlQHeGuDz9Rdr9vNNBg1A/M//Aaw9+O1+ol7lBrPNOPgoodSOtMh5grCHaFpa4n1i8NIrlz63AhedKtDLsDy+fa4vjjlDBRY01wXenGCBTykz1nmIDYGkvKeRJQE6ydWH6kcnP1LtlfqUCpCLnWinPLo2htObWWuw6pjkaJOSHDiX/9vtQ7lhLzcwYPTpORR7FFKDNlYAfLua3L3FOMsHl6HUaqXTa+3V3qPRKRMrso8hJh2M22oj9SkmM4NkSJ7Si7k3qQ/N7Rs/2fciH9q/deMiYEcHajiVCi0/bykr0WImskmacDV3VTkxdtApjO6BxWt2MUNqgmgpBzZbVfBak2Ix8NM9hPWGGomPz3bZs1iZVh687MX5vamDDFS6jHbyYRHps4CpQNmQoCOY8YBjjqh+I51zlazio0hBOxT9POXmfza3HRGcMHl6RhClYUN8E27EWAwz6bCyUyr1xW5+6nvms9aHmSnsFCwNByqXqqejLu0qn0dxYECowYYEoJSBYs0CBYwbvjZ4/bEVq4yUT6GvK8R8yYBpg2B6b5uvjSrXFNid0irr28KcES7s9uA2eTYGP2eFPRUH1HbMeAjFYU1Ues/t1TXvUSW0qh3fkh6jsUjh5swRq7EM=';const _IH='3663db13d8812c12d8c0fc61db1051df9af861d2a590e9eaa72188b774091d8b';let _src;

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
