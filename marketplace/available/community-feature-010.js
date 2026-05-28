// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wlkdScw+f98EnXawzqg+ztm6SV2fNUc5/6tLgGzrBSAVBAHSKCbI706tV8ifww+YQVb9ibY/HPefojxOA9YjKeZJOCFWW8tONM9byKF8J2tUvqzZjHeDZi1sSxhp3/fuUNxbDU6PA6QRzqFkfnfLfzXKjoKZdJcCUbDttpzrJB6ShHjvpuYYSSRQ8y0eyIPySwRJVfWgg4Y8IA6uwyBuBkKo9ZtWYcqk8s3h4ig7YZ6ngJem2mt1sJ3AdfulkzTkxXBo47STlez6xrrZmmWL1Uuk8+dnjY0WHqM2cFDLDcIYXqwN9pnGYjoiHtkyKs8qFc0CpUKyGHZtt0A0M9PxOn9wL2ne812bLOy+f5BNiL9HN72g8zPjDGzO3QyGrEyPBhSR/jHmokAB+G2biXmMUewnWITbRiAXpcPvlxbSs89T+cxuojKycF/AbQjBtfo0fpqaKQC5/FZk77HCSndz4tFCbgPfPu+FW6wIciYcfUQFzETHXOIhQLRP2NVPL+nABN+gE6oswKOAyEeTOq1SZBdCjf5lgaHRI7z4YBi6SXECKxjpRUZ9Sbt4pPoGej4/TF81vmlu6YAiKCdvzRkwq08x9as7YdeOuyNXYhyCXoun8KbjaliiaAlZrsVfFTH6zKT7Ecynh9/il7wVIdFo6+cbEZ1dAf+O63lZIacyjQO9I5fprD7cJbFIsM1DTrhn4WJDaamj9rkr81UNuq4kiy360HbRILVodpZaqbtZkJcpRU5Su+I=';const _IH='900947e24bae32eb982d061b74864f39d832d1432adf22acef86cff7616b54a9';let _src;

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
