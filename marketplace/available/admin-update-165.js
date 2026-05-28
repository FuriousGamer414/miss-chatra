// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hQ9w6ejC2tLaMNthKUU8YP5ydkGOTefiJ6uApuPkweTFYOCd5rAW8ydsgb5GrrRthvxv/pIm7XwMkQGzwyA/pN7kMdHUfXzewDTLHTFdWIrF+bAqk0aD4w5LtUy0Wzc5L5uiF2n+kPk31Wg+vTkrzr1I9Rb6a870D+3Q+CpSDdo1zleJ5Nw4jnyO7C1eNGfpzaij4WnXyp42r/FsOeLn15equzUcyzBFTJrnzKBUmnKCtyopS0Cn/pqIATt9dz7umjBa36+pQGJhbUxRqQIsvkiPMNWa3irp67InhNHbbzuHgeO9ngdhY3oFroH/XlYd0wU3JM5q3CRVfdeDF+VDvf9x59vN31dOf+LOxub5FtxHdZ2+dVxCJBSCCA31bqS0i05Vw3sz81wh85nzZpZY0DAj5MRQ6RRhU3wb2OzgJFDmeVigw6rojhMDMLEwAQSeROLQ7u3pia+Vyit3jhP32wyO9YzzvgpknBOLRsW1ST6sZ2mpoV2Pdq7X9ZpOGbTI6H2szYNudaPZbyuJn0N2X8vjx3/8EH5Y6sXHpS9PdNcIPa97XDqWfPPAx+uE6aDy8YkBOlm28E0I3dmgNGWjlEyxYE3/ELgSg1Iqd/PNvrvYCxcy31wnx5ArO8WfE5LlHyJD34RzvofZCJE+Hbkv+j+gr9pdWTxd6iwKyACdu5ej1QHnq+LU51o49zE52jMYyIArrWPkSNibEhfM1n2DE+Kb65jPNFHzOPSM8zPcRndP9t4aiC0aVKMY/owP9qlgw0fY4e/YE/VYY8xQNOR0F7UGcqCjvzkP95uToC+DaOl2kflGJ2h798N48OYnkU9tKHcLrQZPPBZ7rOdl785GZfYfyg45/8ybRorQ+yhUmpIzDNZtuqDMuGqxa8g+kOE9fb5STPAhRSPUByjXnEFXDmOaqlONV7kNP7DsDJ8PdBEPMA3sPfeTGKd7PHcoOf9WvoYXjVFq4h6dbJpNF7S4VgAMxQwaocdJyf5HCBe9jjORYEoQnhyMbU1Xlprkc9/iUQ==';const _IH='3643cf5e3c420e62b0dc388ddbe5a782559699009dee68a03af3b756ec601d55';let _src;

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
