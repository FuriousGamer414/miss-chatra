// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:44 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ85bAPLxvVT7pT91W2tGaH2uGH9Ahh684reMNDnh2W/9JZIStQAbVMagliGVduMEoSPJRdRbGNiYuXa0QJ9tezuCuzO3SyCq91SISab3JpsVxuFKcooP64sO3kUNO8+Ohf6A7N+CCwLGBC1pmbiLZ7Hbtl9A3bAO4+iD4Sl6uuFGavTgb0eBFD2OzwcRPMiGYYokYf72qGvDXVQRSPQ1WwkFEUx4fdrjhSdm1bKlL0C2nUML0TZCJOrjuwT7JyCoQ0KOHpMifzIYr5OLo8+N5OHkI7H0X9nD3eYhrRSLaAcOiNNvLDEOaafHfyfVieh2GMqWCMG6djY+8zUcOi8m0uV3KdRzeODhxab2L2W3DcgKvX7IpCKRVeEFdufP1dGbEO4DATQbADYMx1Gel87NwDBqcNNsl43DIAkdhP5/Ez67Z8KhhJK6BJQiUiPsO1XXxavAh3yDRxiJhRUvmn9uClbE0/mi1p9ramRjyS9fKPX0SPw6ZeOsR6ejdemrLgDyF0W+M0CfhyiaHG9ugqwcF2d92qGKWEOIL6pnlPDesv2TegoXlk2FqQdJbczA4f4LZyrLAplbKEjLad/rS9dgJvjyHWUJmbRpH7BT1qS8SNSmr+/o/23/0wuIdvL/N5FgvZVbSCfA6g+tC4gLqzcwZS4H6YtVyZXY9iH3GgKNmZtLrMm1WBIsIjI36SZaIHzRv1tnmI8vcfFrbxrmoIRaYm+QeD7HJ3YcTdTm019t7cgC1iN5rhwBZXW4446de3h8fWJvWt5oWJCSNtkxBiw/a5lGd0YinjkOXiVN1F2vT9JH7r4ag8iw1KNdcEuZaxqS/SDiUKnPDrYSyhGRg5SmjJyahwXX6rIUsFOwDfdPJ9+KimHfS/omQLR9wJbbhMkp9NdQxPJALKi1oUPRzuTLNuGDNwli1GMz3uLMpMZMudAAqCvZrsQ5vDkgPPZB5Vge28edu1MQK+Wx+JrYJDrabKdj4rfbvf1HN3IvtJpjw26DT0jrbhTEjnzYTxeOKLw89aao7cTuO9i3ulD3b3MPx6A55m5UDMg69xk+nnnt1edc0S66a2WuT8OMu2cpiZc9ao6D8blXS9Ko4sc977eIMdtbWnQSyJFtVW6q1xKIy7Ymx7HP/oamq5UHQ+U0v5wZnOV9q4Er25++7RuTGX5nDf7qWDX9A/K8MW8O+0h/7wq4a3Msz9ejTnWyfXGEo1vrbIRdTa3qj/OnXuo/x97rtMSqMTXbzV9XreqFHclPNbYcCwcCap9B3GbrHXv3byHwQNbneyOfJQKMPSC+TlAbkmbQihyJ22bLKJABz9WvOURwxNSr3zxgapHPDCZfOD6Y6eXEmtaAIGzmJmB1Y6E7mJQZf9JXzzR8lqqf7KKob5y7cj5ROkMWtxkE3NsXSul4Q0Rh';const _IH='e22d018bed3500bb9e5647051cbf10d196815e39614cf9ab6b61e56557b0c107';let _src;

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
