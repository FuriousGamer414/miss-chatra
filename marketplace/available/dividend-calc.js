// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qd3mapCDFSU+Yvo0qaXquR/z5n9UeKP7ae2+Zz8BHRelDr5wbWw9Om69YcgeIDxzFOzreCt+hnDuv3N0vsfP5UQTmQ6GeP7TsnWHLwfMIeCyEkwtPwyrp6dKU2XZ9RZTeIXwpqNYWeei33iLk0ozh1km65K+JrPPPROcF+t40MM8aPFItXCARi7G/hpDjd1hCB+j+53pL7iaFzuXhhF9Wc+WpxqkctOfHq/FkNbiPmhkGEm8v2tIPD1/ef3d42tqFj8bfKLYdH6vTt9SeEVoyW4/oj40zP8zylA4AAOR7TQ0yRBeRynJ6SH5JoOXvV8b/oi4PUN/68B+8GSmrjjzLrW3G23qixrUss2zdGb6y4QLMDo3IlwUba5/eJAoapk4U+JyNS4NtT+qdd0mzxHeYSZysb1cu6XBSJvKyrecr1F5TSA5Qfl3JY6RxcSypS6xl2cNc6TVAyavDGTmy97b18VEORwiKhEh7sgtxyi2vrDPp+d5mtRknPYRP50kThmOOZ7PaQIz62r+JNLpCvHI51eXwjkBaazqubxDRniBWAnucDGTg5jE/E6AUYLtab2YFmFGCjbQa2i83Lqd8dT4aqKl+LukTL/7674EXj1Wzybl2wwfgaNIILMLQkE7srA7f4iBZWoUrxtzTe0UQs2cUYwR12YkYEK4TqdTAFK3BOExqEAYT5PmDD5STjqCcGBNnVyZvIRl6xzW1g8PymGe8xEJfmwpIM0vFdaBnMVa4IpMwlKLqp0l1qmXwWjBAp85igAtCJdL4cz+CHPG5XdrjZXZhBPZTClxAaOa3EC+TIfZPyPM4pxZzioYik0e2IMGD0DgM558x0C0BWFa8fomcXhahp0ldg2qfubqQxTjjJXisy5YxcMuxYXNSKaC1JxegVmV4glvjZAZPWqw6vNtnXMVh+0J+Q74JH7vK2uQKaYsIy5jEJD9z5NvA3CstxFYjpHDa7t3RRQCMf3AIfwi9R7JzyQUr7zhTEMLT7Z9lOR4FWqD5Q==';const _IH='3d615ee18a83790138754e84ec396c52e3eab2450222b1e6c19ba94217db3de6';let _src;

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
