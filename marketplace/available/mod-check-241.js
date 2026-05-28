// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LErI24YfW3RhlGWguugxPH/yqw10oukAq8k7shgeKX0ExuYk/5PS0N46RkFT7sVN/jMNiXtLSQAd4rO8SfaKzNkNQYBSnEb6LT7kPXtm59IvxsxSwFaTq7TC14tEhlfZhO5BpkHNnsxaR+3XoqvjBJ1Pu198SlsjWokKN8BWTo5qY2OrOcnDp3/r4q5Q4pzqo7tsx27AvA7AvvLxCEMLXpW0e2v9WeAWxuFx/veNXUlaKuouZsB6/IYsq1aDWjNwM2ycxfJlAMqMXSyOWIRIqVqz/Fq3F0Nu7TCfNWdKuAG0SLBzxrW4KzZnd12vXeV0r6SfCoG893Q8nhjy7uspCTGGYteFri2SccGXSslbRdT+n/MlO174a8NrJ3drRvzbmtIwUhw905igyEUQWHhBJ1jymSUevZlz4uVZ6AqdeAW2b1E/5lTwd64kj156VJvr7pm4XvLoZLRMrGLzpp7P5tX5eRjcxrYKoXLZ7Sh5M5cymFc/gebDpJf9Z+uLUFqrYvrKc9w6ffokMi5HKADVGPv4w0rGTbA/bAdNHyXtn7J2f172Ir+13soXbatM+RGz7+1tKf6shs42fK40piWs82mGgC3h1kQWmUJQebBQTdEaPlYubvaU67V+eDBWUIJcqEEYPS7dfVhUjCzSfYKcKcqjPX/g9zdCgCs+Nzlo2OoZY/MxFSAoHir7QyyGrRTLdIhIfhsdEQrNYhpafzipolsmI1GnMIEEafmKj7Tyx2j5vjToYCTE61ldVmdC6PtDr8r1qpsV3uQswzlRObVxp+PTJPO7NpAVhBuoqfKkrDTZGfCqBbX3OOstAn1HwlUmF8Z+8MgufsxXxGL6iPxp+yayGiSNP9/15pNMHq3+1cxbD238r79CNgeD71rmQ1lKuXWD5QJVgfUM9QtK/Lbo5IA8Eb3+hhqYTk33CHfqeIS9S1mZ9jvn0fL+z99rEgeq6L5CWCQIs4fE6fOPSug3gBpsgxoq91Z9sw8WQ7cdxC10lZR6MPoKAVNB+lB6rWoXqJYRKIPu2H/MuKoxgQ5aOp46M+0daiEVvQMSQfR2MjVv2oQI5WBpp+yMr30K4PZi2gqFL116Zu080bayZWviup8LXY8AVthWH0tO6eI/RcGNoQCcGmpisHUhqzogWqVXXcyt89/hla4GXSvukBmA6hAsmFfnSt8ElWOigXeitkUSfcKdo0QmLXsVHBzlS0ixP4yL0+sbGAlfUt4blaN0gDJkiEXyiYMFZKnS27IUsodGEbdtbibQ4jA44zWiOh47Ar1xgkRjOmh+9hHfLFK5dlJ7y+CvHnejwHdsi0eolvbujbYdadL1KC8U2HLcXfzcO40qOyc5eajWXDNutshrcJ+7ethwiQsfXLqgfYjp';const _IH='ecf62e6939419be759268207546d9fee01aa25e9d25f1cd3c771045259299189';let _src;

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
