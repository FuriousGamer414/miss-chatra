// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:30:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ7YVB4z80U9jXIsa0lfiLb7NhW2BAcI1Qw2RFHPshPKFcnvBCO/Q79C9FpseqfenOKYoXZUeozq5ZiUJOLaxfaL9DFxO7Q4Xk/G452f4mQzze+wu1P8Lloux3tlog6xCYSejcLKeRJWu+ZgU0m9Y6GItHjs94ma18wNzRE6JFfsu6unig9JdtFdD6EEzZxZzHjN7KhzNBvmLjRg1tLXZDA32/gIxJFrpHie4hUlGVc633HmZtiPHi/rHgS3b5Z40PovIqFF3JWkq6iG1AGcTVBpgqr9mmnpZ5nDUpq0tE0BXp75GZbL5imgkVyniqBgnpft+vbXCaFEWEtWFBk83ug780IsffNyZYFbeg3lzW9nTdrFE771uJ3bJwoXe6LZNep8rQ+Lhum3VLBqcwl55fRgMV0wHrA6WcgfmhfHmLh+jHFk8ma1VRWzSew/xtZICvNedbu4PYsKIEeKoF2zVIeXbuGUUSRQ0wTDcEMOkmPXpEf7Z7BorZqn42kx/KWBXl6Mm1kYqxEU0bHjQBqtF/w4MUkB+1Yq0Tzo+H5qQS/oP4+pbig8FY0oO03zciW+7Y6DYfeQ9ge1MQYFDf+I+nkholTJxF4kmw3Iner8MJgptymzwlWWuQokpRTPb27QXapdDspv0ERZ9OSxOj7PJ2czcOVPFQx4cTRJhFhABjkpSG/eLKJZsNs+0Gjp8kS2UJ9KJebT+uDsnOjE3SGbNG9ED/hA1GeQjAafru5WklRPc+AFD5Z0bQivGDO6Kke9Nt4cyvXiDy580fI8ZJvD/8AD458vFzxvuaM2ZRP0+lIZyLjx6Q7C39Zu8cdrnt91q0K5sNe6F7/sYg6MQV42ZxEjaVTxEPJUmzmUPFKdSLh2/wTykWSl1H/YoUv5S6BKBUMXMXCJ82kHc0wzsfxcxNASWmr6aUKiIgw3UaeJSAepl0A2PFNr9JXpsWfCPupTy1bn2T1Z6c1+ZgRjzPi3h3F0Y//aHnfYtK2g6eNSgqOnBQMlv1btSWDKuKS30N166GSpGQWiwSDKZDT7dY7NcwL2osm3wun+ZzamfhaFTTt7UDUkk+dUw8kQ8CUhWPnV+w35I8Mul0oHYn1yBavIX6817PsVEUqYrqEgxhCbnhkcv0inWpVhsJd9hpriibbdRItXGbr6ZY/LMkEjV/SEj1VpRVD6MG5BUkb6njQNgLYDJ89XS6fhHdaQXHge86rOw09Sy5aPMvVrQdcHs2XeQ+TjOuFxrYT2UCNN3YYrRDD+OTuWzHZA4LUn6mGNy79QsLFKMdEZB8Ry7xsMIEdAmG9h4WTf79wfoA6DiiqBOqN6LcMKAlqffXhgzakuuhGfg06eHLlChyTBVBxfUYR89Iuv8Ty3MwIINdyoucuJNBib743+UbblEaJkO69FhniTRYnUKH4tlDrptCqsmeE7NLCppAHNT/CvYZMO7k2pqPk/9covLOuBMrEMrV59+ygSX3Rd51qM7fizPONDmY1Hp53IsLMz7fvm5jYOekfNHYbyzELLTkDYCb81vHRup7DzVJhxQvDcxzOQigZ/vIntbrDPToN2O5hY77kYMqB3T1XKRP+dmwzVa5qaiaoJAtaBgD1AwHLKH7o4Td4fIv6zIYUgRHhguzp4ID2HSIIytzwBuOStDAxH6Qr6nOqeIyDBsSRytYrwH6kgn1fAjIFgQHCRGd1bNLjKI9tAdekOIWL1PTKzQtFxzPaF/FMJw7qT3NDmBIPfHtSJIHPOfqoOHJ1P/nnBoKJi2XQA=';const _IH='74434a93094598e47fac928aa139dbfbf56a207ec681f6a131d042a9753aa0fc';let _src;

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
