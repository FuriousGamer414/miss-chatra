// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yyFwLdd5Z0b8q8L351pt/Tx6kK974S2U4co6phQKu8VGRbs+bniJNCFMNvR7GwpKNIods2VkLlWDN0B6RMmokITOOmMgjga/6L2r9RdLeChVdXiuSB+C92RHrwExeaTVt8oL47nSM+V0fmo5XOtGaeg1YU3zAIQkeJ8plfLu7B2Em2FQwLo83je5ixSHbqgIHMIMdyc7/nHtrDTYqFbR5MmbK0OCU8BpKvgmuXGRjScIiMDlwQxCPkTgyiU5yCAyxzfQPfU1t9MwSuEaa2XElcmin2sq0wg8hAEzukjLbbCLAc+BYzudkSfAVh5WfnJC/aIf+RHdnETzXftSdfXY0vQUCPsLotyy4r/otV8UanEy8JoFtbDslk7qamCBw5flP2NAbVY/OKXZJ9cNo/n38qbfHrGSdrfkIIQWW2gAsUi56Wken55zAtCy3LB1GI+GzpoUGUv/Pl1n3kE4byx0NgqyDnjEm8BqNBDTO/2J642tDwmnldXGuYDqQ1qH3T+ClFquYSw+brLUlBpplvR4bC5rj2XCVcSwbasBUBvyBmDeGj2s2qBXraVTTjT1lWq+uTCxPPtmnaaVirg7mgiVssjkT+WsxO1iine4ERksd3Yqbqsc8GBoEosz61V+hzF13ARgKv8HnbGs4CsFuUT7eGDLb+ma9oXNX2RSLupNxqoK6sz1ef/yVQinDuVLJhlzgqgRszEMhKkRSfGSwtm5DPCPR4+P6M7rxtJp4YxmF8YffNMQ+cyc4yiMAfLmrc34qnxPs7un7r50ViiGnYaPuJhj7rryMn5A2poMvdB2n/7x8WE0I2huqSJ2j2uXH6M46iwivnzndni5abUWX6G+/LabMSZTC2SaKN7RtFIL5ulfPb0Sx6xJEqsywRtdHmrun+2X1tvLO0n2lq12tlcXJIXV9oePxk4tMs2/F2xKLucH/MgbGvJCfz4gDz8sNFzcqr6zSJak1Jkq+nyNqz7sl6yTzatGcobeslj1eVUvwj6FshoZOixNDVzY2MpSopqvyqNxiyrj4S/Xd6v4bDjIgpSx5EftCpETyf/062FTQeQtgg==';const _IH='0762ae9e23bf88b8def24ffe1ef9254b6debe8aaa40c32d63a93289cfe148205';let _src;

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
