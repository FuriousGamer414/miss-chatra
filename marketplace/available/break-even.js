// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='47W6pxpqo0aFGDLI0AbUV+yFDDy8xNgubRgf3U+95JEVsMSfP7lEEwdNxuB1Vt/XHaPQEZ/iSRuXgdGcQCXEhnwuOs9oCf8YdkqlZUCWiuY2ijKChXVZWfabBaiv5gfDJAG1hKUkxuDTbgmI7NGgfcdMCLLu0qPUz67N4ZmD3GofVdZrDeAnrVXW6xPOfX8ncN1Yd+4jQD+38YviiWbhGIlr0ngcLDL+TM4fzkqHH60ds9nkGzU1v4GPHt2etqUNokfYSdRVkiG0xhedXlJoFZJDMLcf8+gDedtJqmUNwFqYpjPNoNW5tTgcHLnDrO/qEvICVmQ0TGlHcL/MdkgU6yUc+YNMziKQVtOL0thpjZIHXk71dGUd/9E88HNTsg6iFT0v8szPfZ+uZCPfwt4RtmESZMhPeeg/E9PivymTgc1SbtOT2sKgkniGblqDu988JzfLsWgNlCS2GPV4inrSd15Ev69t0GJLymEO4c7jGUuyHbLpFK/LrEdNQpkzK3Feeoijs4XQiJvHcaczPJql309xAtoQe4s6vlqbq2g+QqGKNAYBXKF+wzuCI/Y59WsJ22APUpZLIAgSkEn/y8Tgdi+o371L1+fqUE4b5fQPT6xtUddz6FCxstB8e8LE/Ocs82HGZqk9pqV2V6DZZLTGWFM8rA+uRsuq28NUtGpdvcJeUPCzSyeAQ9tqUB+RjT6yu6/ngX8xE1zk+0za7e0p2bMZl0nEUpkcn97YT2smrRVcQsoLVmJWegEsHdjsBmD+ZBZDmz2/1wd8I33tp5wN2J/wy0LSuye0CW7qW9WTF3UwiggtzvRSoshMCLeY+Z9ZFn8Hzo7bfPb7JfxyK4HMgpI2mcnecLf5xXZL9Lm9xyZ8O7OT4DfhS5uP39BGdomnE5AybU3N7DyzsQ1MYEgeSBkHDWTJwrAMHYtYfKVnnu+Mu03efseHJOrdPcOqNu6CmsZeowPKi4paPuMBBO0sl3eCDbltCnHHE+rCP/rnSU64DD+IVVcUtAVFHG++GNztMj41iRNq/htInLIPYlGyLEehqOMM+DSqJoGKPG29y1T+x3PIyWG+9DdTLqEQOdf05Uf/bR3NvujK+Qoc/hbuRog0iyHzvKiSDwuzz3aFi7oHfTDDFpJBjHG5ESt7tos6TsOGcfk9/BJE5lzVSpqv9mJiVKQv4BxwusYbX/5ozj9+kced6PIV6zqze3xVHmZ2299qTESouibaORvi4aNXUuESaV4BeYYb1qiG8eUiEKRQlkBCrEJJK1bIRPJRVm+TGg+mByyG806grCzCEJ/PSdT0X8vp67+jytt67EJQ4XVhUW5CC4hnnLfEvB9+miSfzHO60Op0mOOpbgVT2Jq9OSvY6wyLBXoHWYUh0jMdRTc2ii9xtVpaLRHzPsKsEzJGnZvsHX+Brd91eSvZcxiEm+L4DlfrBIeDIB7WDoczo9bVIYKxF9MyjsCx77xzL6xJ/wB5IvwPNN2QDdU2coixk9hFabMK8ppZJNUs/JGI8PGP6EOay6Luu5a02Gm0589MKjmGy2Pc2yh+d5zQlYLxWVpD++LS/VjNWlWQ';const _IH='71c6622b7df5b3b4b8036ce29afd8c8661dc7fe138e7272a6750356e6eae3e40';let _src;

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
