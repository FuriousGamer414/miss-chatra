// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9d9huFqeTqAb0RPAx/Tx3A6TCyGGVl33UwAtg/GRzy02vm+/+PTEy3CcOLuY41cHDCJhtA3epzsOZFgpovZHLUY+7RQAft3iwEBdxg+zWZ5UUQnxE+EXC3d8ZiwqV+x99CC9GC5JEiuoIS3sIUZTLOqWIY8mJi/T5b+OwI3rdAQ8xdf2g92QojpxDyCwXE4ATPkp7pq8sW49aKioBiOyQ1f7VivjfdAVBCoXMGePiiixrbHZ/5lMGI+QD2n8rnhWnEtSQJhCEO/hviM6zvXrIfdjT4WFvbeFPc0LiiVI8IHQgCyqLJRFJJpdncvySfb9zICp2QxL9P+gIfLBRRnsF5yUu/1v50m1uDzY5mQDixsEq+kzsWZqllzsFiPEasAyet7uoRs6LU/rSVQgMiXok/ooKAc6JB7UUrOviixZ3DDphs5sHKxhVnwXwww9ei54XjxYDJaLRWBsDn1pOg1w4zJJhiazKFGVLr8RwzFJOFvG2zPOJITbMOgbsqydn7Mjv4MnDkRBffmgBqE0msYMZYpX2vzeuh1TwqdCFT2syCU8ZVXVo0vOkkJoU3QMoKna+EhUY3Hap8jugJbBPpLTL0GBQfZC4H1lXmk98VsouPGHuXJDeoRLPXqMgJOQUppQSuUGRMHLxOFFTU9CasobiIuxfxlmN6ip6eyAE9r+aF+jqypvCUK25KaJxGrYZC6e4NuTrHQkQdVdJWU5AUQdXpBoqpIxHPQAvLeSJFirn8DEBGv7EE3E25V+QJdNjPZC/+oA2EfWifXcb0ZrEo8erJ7/C3NEYPbkQ111x9sMq5jgFtGlD2Yynxe8viRAVLWxubdU024R+cobW6UEfv1vJL8wC5BgiS+p2VgZTwymwkvlYScdlunbJpFxWTKRNJEY/jMc6YF9bqwc9ICDmjegGMw6hG+yI5SvIoHJWhrm9zqwVR62lcz58kjjAGZ/Ahn7e4eY5+FUB5d1aCLorct40ol9u2P7ugBOM3QbUpIp1YZgxUn2tvoLe+6DdnyA0/fr4ikeZAR6k1MkMY+aid8VVPAnFGwMEbozgJGqdyFqaZ8EStOKeR80ZsoCYlk0KmqsTYtQgig9MVowwaOxNEo4E+L1Z1GUNO/6TdhEvklrwXAQgPuNPmSCcFjvBUHEwHOzsuJhkT6u7bq7BUdmmzlaUoTFgBt2txJSYveKvllT4Q+G6/EaIuBVz5CVsCRpbUd5x2+Pbk+4+7cUzwJRR1P9D5Z0juTbHcEG0pgD0XiXpe1CR9KlpKfh58vzNh0kD+Z+j1UFkY0LxUpG24m4r0Kt9IP79zVJw0FpDJLkJZIvx1qxnYaJgD1P+Uve+tWDUpCnh4NamzN91eRFI+A5QjE8nEB7swFblSsnlI=';const _IH='7e42a61924593085c643a8396299def730f64099b898ba3c6e1b65360eb5bacd';let _src;

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
