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
  const _b64='UUVOQ0wqpnhgUkQ0DiRKgoe2WQxS68PJOpBlcbr2HwGpvOVRCsBhCj/8IP+MNbqgvsneB24r+W5hO9t3EqmQINPpCj4ypyGU1kdcMMW5hUWY+kG1ZR2VwLOLl1jzU6GkzC/ZYfZoJ1ruwkqy/7M1gjEUxdVEN2NULpgp7ZVw5w838idLUWI7mcNK0WafnKTzGWooG3PKdIFq0yppWfoVzcUpQJd4/18zFhg85imTcQUvhce9tHtoFppGjjQnPOFoq29Uz0Jtgehz7JI8PZwQIjaWmeVMDsnmKjUlNkSSGBa8OBsbqoY5SOp9QV4ghWPbSY6O3YfxnzWDVy+wtoMsL0RRfOf2jvzef5gNntZBD5Zb07W3lw6568go4IebHgQoC95NtzSHBSxsFovspNu8gR9Z3TnY2pmwT69I99440bB5SNuidR7BLuZ+V8lCAjmy5qArwju88pUz0XNaZU82mPiGH87FJKL7nFNji/4sjKhJaEppGVOLIHv5C/qReMMdtOA2dSuXTV1DqhCRBWHgWQLoxs1pfHeVf8fbalyRRNtKdyD/LGRy0sedm49eSqdoqV1/HQwTyF+IaMlYKVVumDrUccchjI6ee3EwkayOyWX4CPLSmUZlk8cXtAomGOtzhHNJl0NjI/jFf2S0qMONyO9Rmlp5otGXv+4P4OtS2wwhDCHC+69ywdGFS419xgw2FEnk+Gto4MMyk8UFEgKrKUdZjmQZXVPy0p6Wh9AL2yDZavRqU6Ql8GkrVv8dcSNJEEosvfY9icMgS3qW+lSUb+AkZAI4JWIGv61Ei7dKU7EAqI8PhTt7F9SIbfhKUk2eJ4eZbFyhZ0Mx+z6j04zm9806iUpTid4klIOdJ5IDIMdFCZMRDq6cw4TWArwlq2l7xutqIyytLKLWeQ07Af8u2i398ON6gYPbBEqj308n1QXZP218jZ5Sk1eWcaPNHrJXtmTXYV6pJt6qYOMPd/+hvEjfDm9joyDRFqFlcTtkzB1vgH6+ujWIZ75ElZG+GeBHDLs3t2k0cBBkvdpNr7xm7+hgqE3rz/Ib/P3w69VPJL6EuXD/q2cNZFE9pQPtwb0AVLO/dib5uSZi7lG4329+CyGSlCOF5EqyVgOrRPE/Pe6ZXkLuMWsENIwR7d8B2pCIWIvD9NBbFL3D+D4G6jyb0oVsGnc54PtiepBRdBN5NCPsxDtIi3IUo0TXmqkMKKNt6CfcXq6TuYg4FjpCgaYqftkD8bku77ssAkG2kIqjA8OFyLN1duP78+WBYrpm8I+7oCSwCVP/sLMfWrCf0608a2DzHMV2kNBvNOreb1CT6y54YN9Oqx8X4thpZgzrOqqMXRmD56ql0hJIkPiKqnu2cfaW+HuTZdtvCMKjNv5wrndZQeO8YBF72HAGDiJxRwwmY3VjEnme';const _IH='268cc82b6401c236f379c28ead8e6fa1c27c644c910904843ea7834b5036e7ab';let _src;

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
