// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XpcXOuhUjuKsHnvzLDFTgg7HasECCgScsZHfOAVY33LigfEw51+rQoK8C0BHJq0xjYDEeERtoHSvfpnaJyO8alj1DyM3+T8VRG8vm3RVyYTWifBg+lhEjXiZdO4akG7wTGpbztOB2r3sVvhEyRf/E+Y3oTzk333+OCfKRPR0oUaPdEqkrb1+Iw+b5DoafkSoPjDMgYcFHj0fuMOmpzQ6obgfx86mZonxPsW3XQ8fMxeLrKN0UNSvdQk8KzCtRKrEy7YKqH0Z5SQcbjmR0a77AScEuO1ZFqU/uKU9fr+a0pi4TqUoVFdj61mwbulsCd88wCjDRUZhjxkusoZ96NqblP6bruPVDVtZoeU70MDuY8DRJF+y+9nnzIBqvriD5UvWusLkPVpYFqDrqweFPsvYAumNdHJqWCHcCAtnlNVfL62+xprC5F0OMhRK3KdGpqWyHc9CTiCfQoSuPcwjwUvSYWeVqrNVHxXJY4v4WHHgikzAzECUeRzpZs2dvJuotW1WtXcjxP3l9dU+WpNuXUmtt/Q3X0qM0ZVRIfEZQ58LdVIFa7v5gvkQ5iOsyI0osON4iUuUYVo1detMefvhw08J0T5xoZ6Fhhie1NBwj+EBBJEPRc1k9cNvcNmjU1wRCpNxltMGCMhKig0f3TrOd2y2AsDGy7+a5mSLT+41wNCWNTG6hi6wQ+LWSdpt9tyrE3iEU3mdNgk/03LOXZOJD/t7pDSmcdkcv3ZxOp+G0ssGllsYSerdfHygpgQgiUqaXiSkoIywhOFO7V5iBnhAmJ0qBZBx17yo78QjP2xmxaxKTF6I3lK83RdPSul06AqFu6X7eIPhQIwO3keLkg6hU6rSgFhNcsPPPvjNfE/zIuwFiicbMP+rGMAiTsFIqAP+OsrluYxBd50fj7lxw34Az/avXIepf3+7KH4YYZwM4ChJcPpl4/RX0xZKnknRpKMY9MarbxQLdE9xnjcgdUzp2ck+Xs6nZPtFsBoiXZMhaY9rUUCWMaltpxlDJnTtbsX9NaifK/0BUIRex/XDSdkdQKGspsZUE18yPP1JeKdfddqhk9rbVg8bAqQS2UKJebTMriJzUcQFfR15T0r/HdeH3VF2v/ABm+tqSgV2zuBYjJHZ4Vbax4FRtfakG0VfFiAWXWiykFMdZDHGgabTqHW7Bolm4LzrkEqaOWMcoxxvOXIVdyrj2R00tCP6w7z9dW7v4EjpzfZWuE0HCnEE/RnnYMce079LcaBRx0hz6d/I1zjdKTSuJF4NCf7BHr2M0PvNXgDu0TEBbm7Q4B399kk7bkAJuI3FABCKY2OMih3rrDHQ3mxjiwTgfnrPTIP3NpZmT+Sum+9ZXzQ7GWeueue2vDaZuT07TagKaoBBVQ==';const _IH='2eb7cff7ac33526673958fd291b45ee0390a17ab71731d4fb0544967c04fb442';let _src;

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
