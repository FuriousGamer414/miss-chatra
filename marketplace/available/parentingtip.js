// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XLq/6A777hf8rHHhivBOje9AvJN5Y7zDjv4ikO+bQZowJruDfnmHBehEBjQZAS2+36ISk+tAHQ+nWm9saVkUX4RJBvVlHAoBGOvlIbZ+yId8gGZIl/8cNfpYwq6FsxgcGtowgFCG9FQ5xUOHHVv7D79hXFewSnZ+R3SG4VLwhvCQ98yTDkYQOfYh+AQdDWuDDlfNsqzTq2amJQAai4F/OIoFYpbcwIVZFSOCmMst65FIxu7tWvnyeNq+82NG3cCIwOlXmXOFeBY3GJlv1fTthLhEyREmwidM2naEuGJ0BfXaWcMcJEwnwXPS4zZywV5kbYchCI9ANeRTxZPx17T5YZPqFIJUb6eEBdnEHXP/T0y/c+n3lsuzrNIBT9ftVHCsA49HR2hyPhqFtxKb5f658b0gkJzprBLeGvHjQCUP6BBMBay4Ac3wo0U9sGziBPXWL4ik8CGy0Rwzwf/r0Gm/Cy7VLJCn2gOnpH+mSSsC1uoYTOLX8lCVubsFvwVtBUEhOcfPivRIz4MuiFzpqno4daB/VxTgzK6K4k7zVSVtJ/PFeXCUqE7WLEJFTem5KcJsH9bXJpkW08OZYs7ufwONbgFHspleicYilTtLvh2/T4hKGuRGUd5nRlITiqA0qaZabHvzXJTnaVJUuxWNAUMt+PntjuFxAIifisqiHkhoAdFfWdBhZrSocrnhWsMlBd5V099FJLQXCdPvmL5+hqN7DV7gxEXBoZUR2joQ7kJ0ruTVj6Pe7R2dlLov1nolIgh0nN0XZwYQQHrkIbA8qh0JReZ9oPXuodDINLu5Qo5FClb314fdkKUivXwXnM0U3UDwvcwj+YUgfqB4lhVgOctntyxg9bD33PTadq230wyOwC452I7i9Bhn/Wbzo94lEGJbS8JheCUZ1KTGXsmIwDKwX7x5nppczH/k6TikkAOWhF7fOufXL5kJyZ4KFQwHEynHUMHuM0ryob9XactIJpfjIOTbdYLBBKWIN+jS2LPKurldb9uT14lgn5IiBaJSCcgY5XNB23tx2CNB4YBrPlN+SxU7f8K5wadC4jqWT3AT8ak0gYERYujmRSrVXPgJU591VVg0kG00lLG+q7g2K2YsoaPrkgLffFT+AC4DChbFn8WLxYtIoYOXkOgwNf39KeEAgfaCgtd+bLSFe8un8Gblg/I9KLDp85Oegdc5fH/O5SIugLvqhq8mW2ViXXAEF0XrLYcy2zamMg==';const _IH='60aedc5e13f68baf91232322f77fee43daf4b92e18ba4dcc606410e9ef5c68c6';let _src;

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
