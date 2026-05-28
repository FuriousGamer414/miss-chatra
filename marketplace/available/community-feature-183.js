// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Rq+IPgOC1He5jiWTahAgeeRH+45lY7mKwj0mD9i7xXwpLc0+eiIlamXPcmsfWbOSbLuH3lXK3KrywBg0GHfKwltMczJz4YTe987c6yJhs3kG56AcVUhVSFWdmW036XKiR5eBoK/aOIhREeaziE+5PHtA4qJuWSYaf8Y+AQ3I8izjJj1eAgrAf4bJsdEl/y+MxJ0qw+wvcykm3/8Wp5wS1TavTG14/rS93oGcGWebVc/iZivYY7l09BwuuF/yonUdmHO+f8F6CJQj3bD9U5PiTps9YrLq/MjSwMl4KFSVh5mnVwCQ2ZDnV65wK1XH0uN1T09ZJaJHskS5uCWRXXV2JXJDW0BXZ38wQz3xxZR/0YgbRwfnh2sExjSSLIN/SQgxrDyyKzdc0fRHgIngewyJwhC8cgYmXXqQUYoukEmWIbCUTP/PrKfeocSKYFIZfS5012WRK4ezTUmIA+E95nfwmgrK8tfoJvhMtjnYkxRYXdN75AVyn8o6c4NeABs5kf5e4Tr79VRwE6Bt8kaAIv/zpfrxihwzGw3PFSioGAz5/Ejq9OBE+H2t7iLjr09407663zcuAMtoDpnTNTRYnx0rcXRYNEbN2t8qKnzzXyJFCxQ6+wSy+zI+ktq421CphrNgBVvG7fCpEszz2MSR/BUZzj9LU0w6mX3QSqzOlGzv/H613M/gcFOx7IcQ+p9iLo4e6/194iexNCCtty1S8qIuSE95lptlUoAYhtmtKYk=';const _IH='6a7ec79ad1025b9eeb58359f4d07a2e352bb382eaf5f3a6ad4ce6614700c06be';let _src;

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
