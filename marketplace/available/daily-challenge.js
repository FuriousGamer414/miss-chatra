// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:09 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+eoaf9924RTKhdep3hIrI50xIWVyp1qDevEO2YLclpBfSZu12tYoOTKP+++j46IxHtdeIRZV6VnNUEh2fX1OU37O7WsBg0PcUoyE7iCEgcGE0eSu/VZaTk1Ui+hNg6+naAUANeZwbgeDIIOC0A/d8Gx40E9MZajBbB4Nqu61P5zGuM4Y2YvpX8GoEuC/KKdLhK5iUTuavwa2lZFRZx4Ei4dKQwIiDd5pUK60cFVecyLz/ktVwyZndV2avAyT4QkSzoaVl86vfObzLHHqV+MqZAx7tYEJ+fs11zZa0p3mVAJndIZLiuGorb6rfIgwZ9Nf9kFyHh+DnqI7aBNhoOpGwlmhy5kPsTzl+iTcmOfPycfb8j3o3Vy0rgw4riAzeOPlRaLaZ/z5Xob1BajXrZ45zoqjRVtWI3deLMakM/f8OnugVWWDJWDkJ6oNhnyBKdaDahm0vIApfDwxGapxze5dtvkd7yKnh5A0vIq96GaJiUeRN0lykzqMQPjK6tng+1wX5UC1pI9V04t1FUT8sMNHP59an9b7CywTPh3T5+OBTBzA7qh8+d0f4NT0KGfKArRRFeTVaWlk2y808Gzf6d7/G/eCcLh2qqAp5KVHJhHuuekVP8=';const _IH='0f36eaf62c9001e63e38ce298c84a6c33073249f971d83ce7336a5ab66e68c8d';let _src;

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
