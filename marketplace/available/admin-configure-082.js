// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2/w3OKk8ajNQDuw4uwf/VZl+Q6lDET1Uf+bpHEBKvCkYRIUmiMjDk5znyPqV7nt48whlujhuoAaJMYP1Ew7gug1ia5JewMvZiD3DWuOcsfIRc3Gf0seUI8OoqdelVR3UWT/VBG0M1yqZ2538e5oXmSVqmx7JXAm29BwB/VfWYQ58cUaPT+nURpFF/V7x5ftg0/YJeYZnTziqb1yYHf01DiofPONRmFLarWuyKibFf6C3fjuJgi8UDG1UB3LuivxmjLZpw4ylOS+yjH7W1aNvy+fwiPz0quzvfcifrEgQO9uQlihXfTcdw2VHS5qPDW/KhwIEsRc25btJHmR+0Xss7zH0TKBWeHJ71T0DGna9jhiPdbonR6amz3T6gOqO2hv+phanjp2AUja9wMbErU4rFuzsMWLQIjsV7txl3du6i9GqnzhUc/hIAfKH+yPsD2O3Om9NZntp4aNbt4Po8mUN5MR2ljMRBk6fuQ/9+H2DQm6Toy+0LfKCMczCSN/zW9rtpy/sFsVr52WERvvqLlJn9C9DRuLCFMZyHj+f+LQ/E9P8sAVBriGMy1XFpSg3Kn/mrW/xVoS+5Yy4UVG+vy+WkivbvXIPeQqDicsF80s55xB0YNFQJZ3AOuT0BZCbi1XDb7XJvre7pJ54vI99u64gWkHx8Ko/2gN0FiiVfZLy/IyW4gOpPOGKk6K465gFqNrpSyhyiyzW7h2HUhpV6uDBxseP27qvfIsjzJrKvfbMRUe6cdzCRsxeMos6pY82u+1ytKZlMeQCEhxosz4FjBleRc7qe5lDbe3r7Oh17sCEwgP67V6zCExs+7H2LEux+o6XnX4LaqasrbraLzOdUzu9E7Td1HxlccRGGV+ehpr69Qdu1YDo1CzdiGhglMJvbkSRpTXAfAeuF+Gd0LuGghqcQWKbx/3oAhEZs0zKE0gIKZOsTGqM+LzjB8cu43rF1Amn/rDpYaKRMhdA8PsHIc+145h08msuSaQw0cIJDI3QV9nmrMmQRldlSucgLuP3Dxe9UGDmhFlWkEGZuYzsgY0yr8/L';const _IH='daab147f938e05b4d544a0343d3196c486b92f1acd73b3564de6d2c8cccecbda';let _src;

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
