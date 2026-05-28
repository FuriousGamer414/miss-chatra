// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7UOSP6CCSIjyGqlskMSSe0ZlvxoV4UxSNuC9+Yr/v7zGK2evgDQqKIy8QCIko1IQ8xvI8mpZXu7AZzgQYKtve0uGrHZzNhQhCUX77dK6sriuLgG5vFW4brY0n4lkBqYPmGlMgd9fwbLE8vYNSp9xBU3LilYWznR/6nf48AHf/T1hyM4ycRpWdLyXKR8zcMrTSGBPwJaBWDWaGqLbvDN4fh/DRFrfTwiPtIvBhyHvz8ZiNnaqR7wKYq8oUwArsWbpl+zkk4hdB69jLkEmj0g0Olh3U1UtblLurRT/IdctuHAWoeJZSVWXUDNEr8SsE2J8cJ2UDH7AyrDyz3skpthcoAJECoNVsCiCkKarUetRpWDHH7Dwg7KC9JbS6s0HlU5rt2jBn2Lbzoo1ir8Y/bZ+bAGE5RliNG8XRd0xhiNS6UiCtaOBbz4DO3clYp389JDyhqNp97E1P4BFuyr311MWZzRePIDeLaERHzKiPabUhwcpKaCJpWYz2QLsvLG0NeVX6j7T4zohBsnXFsJ/RdLiFtqSFS6Op/OjmDnOQAMTZSGJAJkVykVprN01eB5urcO5SDB69CidJlQgtCiURWJXvDF5SJ44b8FEcVqATCuDaBcVRhf0iG9F/2cdrKt3BB4o6JVM2wueFArA7U6wP+D/YNg2C4DYPMlOdG1q8gM9aCZ3ml7219J6hf5dCFPbZK3vLZ6jJC6CdW4G4ikFAx3rnBR12o3ddbhXMawFuiiYIePUrNn0PJSEPnP4bOpE+PMDoFQm9K1H0ro7z76dV6iU/OPLzUh3Zexwl4I+ncLfJt0s3pmN0EWoW1ER1tNOlhrgk2t3sXroMcr2znBRy6eF7FxhskIKek+/DKTlXCOCzP5r/KAXf/bzdeQHStRWulrI0pj2sAiVwYgFQ6N/ouynbd9/BriDf5X9K/uo/p018lt1N+aS140jxm8GDquLZ5uGdhmn3aB6s0N6hnwX09Oho0edKMl0gIIhWnR1zwvgR+DT+5zQ43kqLMO/pw5yLom3bhmFJGNZh7sIc8WhHE4fdKrLA==';const _IH='5c743a8a916ccc04ee9cbcdad01cc8e62a7f4bcb6309cc6abaa7bc9dae182a6c';let _src;

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
