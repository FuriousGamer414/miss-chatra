// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6j4I3SSyIwAzIO5zZ3fk0RV99XZ674YSPfzGA4c5mg2JiTyhwsULIWP8Foc5x7h0pFZDjIwhkp5oPBoLBFc0hI1d5rt2zNHEFqDOFnPZ15BN0afEv5eFxr4sOFqVRTU7XOAmwHCfCkIA5Ik52rZmH/XMescF/C6bIsi3s4B/X/HLFtkPPCqbsEPvpsV3lAoSZXL/nKVvo43KVR0J2oU/NTfFWIiBLMLW1bQ+13KxDpRf4sJskV4YyZaxT1q496omCa5mAJ7FV0U071b8iHjeTPSmwJ3w0wuLLxN1UeS4pwjwQryRIfq60kKKc1TvAlb8HWVTD/iZZidhZCie+0VkANtYaN6FIfkKUh/yFG/Hed1ku1ouDMCRZ+2Zg+KbAAW6/te3XY4zQ2Mm8LU7KmVuar9dxFKLHgUqw9R+Vtmdmty80RfdqpDywswBDoXuHR2Uy0VmwmIGbVCr8Q5My7z3uWgYQDkqPlyEkyU6xrHncwbNd9iTo4XLo+FYv38KxyLV1DNh1NdnxTJxOBknyrWVRFE2fIkz5DXxC5b+dk28ZypEz9KhU9MLbine7y1BFgXCORYY8Mb78/xmrx23qklNEdl+CpaveKfvu6KufAvk25EwUxV8hxsnkhmvhd6js1AY5/FyFf5sNkUV6UBH4UGUPP5LcfnNmwJbQM4ChZfingL/0U5OcAJ3lxhI6lNEaWnL9FajDJWoRXb5fdVgHHi2IrpnLWxNSmg3hU2yAiRFB0ThVT4uN/7Yr2N2WztSl177nw1oEw4eQJAYr9/EyXHorigel1Zqm80kbxslu9w2h5O8r/6E9ct0BZRICMbuxpVwMOhlKnlLhTbfPonu1kvw6hkkRHsTb1YK5k8C5eCMEcEj8+z81XPYQXWiWSRJ8MxI96L1olDRKRLYp8OIuOQkbysL9PcLrKssNGaABaf4bq18eT2vmUWDYtFlGU7lLecHtI1Db/Rh63QLiEpf7+MoQBtREoqL9Q/MkiMERFeXAXnS31eJRMFiFqFjtsL5wyG9TLCxJXkNFFKltufCWM1hbDhdYpX9aGb6nq1aZy3MknSqrrX3rCU5famNdnWlcDZzoccf7td3cBly75UeSdOH6JbCqQOxyzrBraJ9m77FXrb8qnMkCTSMBZTMJEG03GI4Wt++SbM4vxdC8rwDbqR29yJrkjrCKE8fnO5nmHRhY6EjHTk9VWfgCevRyFWr19WawYjJtP045GgAFSeG7U6izuxcDA07ouHZsEOn5YMQ7PhfVd2FrbssQC1qE2GCIwCZKpgIdG+Ag3Iee8lbZRmDUQfr4ixOWSoTaWU6V/FESFj15yXcF3rPzZhIb95ieqYuEvZyiFKyUm+HA0UoQ/5GX3Nr/SsVkZdh860Zsy02ecfstakCyCUt9TeuFv84xhYAT4pL5fbJYZSx1L4P';const _IH='a6565d36bf33a2f3928ac664e2c0bea9d7ab144da1902ce39ee417f74afb8e8d';let _src;

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
