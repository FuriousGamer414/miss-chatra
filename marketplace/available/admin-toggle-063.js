// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='l8iXDG/2OX8KqTW6rz/1n9qaxb+B4tYUX6OTKo/ztvWvj7bOEIZ0WStjpGb9IpWjkRplZes9QNC7wxKC5pC9Ck/PSmZY1cVSpH25p3KM/oJ+QfSLdXakjH8VaFCcIPA09nN2Nqdiou8WfMbIh/RY67MxObSOEIkT7OlZP7VbANAKHGTqplBX+VqYYELHfTwwFdEMgohEq2RTfiyWIF/efS7Z6Ycekbn0Utsw9iris1YRMphVhs8sff8H8WjqfhqyXJf1JcRe+5AU8aTGxVxdJv0/IYI1InWCPF50G1ONZXI6wVbD3w8vzzWtyxXHb74bx7oaDJsuYylBhCc7Q2fRaClOoicU+cGsnepEeNHUafEnChm+4gKkE6vM76Ghd+4fLKiu9qljnSKvoMkfTNqe28IRXFtkQU3Q9QS5mcm7hI6L4pJzbbMQCMR1THgBn3eYFlhtosCCXZXwFxFbDMFSQfBCPE+VBEctNN0PDOdDouK4Pts2wFOqT98dfNpHK3dFWXl/vNwhhJhky4xxCNH4SDCrZmzKYBzTesnGTsyliXijsK87O3F8ZvXM11+m6RKOfYqZ3AN17EETWz6tarGSBGjrroTmdZPjnuYtPcrpICo54c1qn1OmskVxiFifvHMTQmHxTJf5US0VuwbIizTigdPCwALTycqe0I/vHf1w72nxOENllXtSuTa3aUp9O10MZ+mPC0qON3z/915oDeVAb1xDteWkjqqXSs0YAH7yXBuj/vKiHqO76Ibvywa8e+3MoYYeIpr3JbA9DSJFuNUG/6IgkU8eaUiKlNcT96yrLnPKKES93kjYQATmfmQ3reA2W6ZqM6VWmMYdIuBhLh0Hjx6TL01EFMWCIxhUaZMSAa/59H60YST/P9SmB26IoSxKQtd65z0q+q2DPRQJpSI54M+C1FaswrzU0diFkgvGyLdEP3T+XPRcWkF3JuXI3E8BSxiFt7/tncSQ7xqmNrNEnfOvubZkc3kkDy55VSPM6D01njqb3brq4jU9MrAH';const _IH='7b0ec6a80e4a07c93e3b502f89b1ee4528d76f650aadb211ed642cf2936f3644';let _src;

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
