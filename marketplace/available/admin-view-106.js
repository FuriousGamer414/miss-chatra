// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SEaE6J/kg+w0HdkhDchmB9NY+oN1IR1x5gaa2gDLsq6jh5cg0SYjuZVgY0zANV5b4f/zPsM9s7prw9SIUpceb6PyGFzFn7taQGPhXrn2dKCa8z4cgV3JEwPWJIHWrkkR12vDwzV0P2tyFsR8CVLTxcu8sEeL1vJei55ExE3b81xYj3GBsrl7//ZHpPNxxKPwrColiFYShetoqISi7UtEM0XAIREvqzbwSTP+mOeir4yVpUW3YiKcmvhPqFYuo5o1LzAx5uYxDXIj4acYvZQWhJtxbpCIn5PYYPG+GJtug1XVXAzeXKYB1xqlJ9KJLreHBuo2QHIYASdqrwEN0m4P0PRp+UIm/3dWyYNyjX3cLEHC3Qgwv6FN5VdoHj2mm+cHMDwFWPde38KDImRvhJAQ5aKJNrOUt+1WCOc9ApKimpVdUrKvbH/ab8w0W+G4wLqForsG67MzsgKWrjwFg4U3HLIW67OYqJ6z/PAaPCfuC2vsITBSQJhWreOldAT0OM8JcJ6yXnUdAHtIugLFvPWa3Vlpl+vjppBZ+L4toTUGmVOeabQ9lsbPZ8dspZlMSICel0MDWyJHKZkUSkPIQi7ZB82LHVISs690TW3jWNz65SSotixLHObA6IOhnyoV7e+pejeBi+kVkAMG62Nd/fLhP242MNqp+Hjy/tRPcaxY7cTsEcnErocZEodtHDI79AZL2mfctBfE6jRbf+Mlgy2pjwC2fU0d7XK5WygMQer7LCq8/jIg3mAZz9NezOcpcdI9dIje/XrLj5oF4JC7XpO59MamN1K8/ClKnk/qNTN9ZAGpRiDuk/9Dl6gOxPU/iIXFAbaKssf0ek7bynOP2Uz6IfxJk5ilABzUsUDl0lmlcr3PdG93N/cB4rkNzNzTtvcCMB2TbK1TJc74KmLyjcBR+aMFFZBmNlZelBbNvBswE2jw3jeom5b7/MGAOVC0wRV95AdiQPeF4v14A1K3P8fac//gW0q9Eq3Lax12aaGU0WwEMuk=';const _IH='1cf20fa0710029b798ecb448af6f760f6efa55886cb2bbf6c27dd607994122c8';let _src;

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
