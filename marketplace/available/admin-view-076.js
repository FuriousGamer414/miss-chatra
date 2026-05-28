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
  const _b64='Ngnta4Rl27Le8bnEyubqmV4g7OJe+rkrunweMw7T8DEWECCk29W81ZgkF7cR6i/7WciDAs9NcxkAk1z/lkaAz+8P+Bj9YbtirU1+No3FXyFNa7LJ16tcaajghaN1fIqWO3Zed86005PrFSgqCVRngcgDvcK++r1zwtWX5XfNITFeh8FzPCtiSu8+07r3Y9fdzqVDSQ482uaHTfhBy39qarQG09OLj0n9KmgvwEgyq66YkfBhmUkJiIemq5caQu/upSIxyuUTuGm18QqsGi+/V21FsD3VBic/VlcG2MAnQeXPNsbeUg4UPina60xCRpIEn/zh9CO34AHi3boAKXzWb9hItoSC3KJzGzEMunYO0hVOHway1BqIAbTqwOXxvaw3AkELVqB4dxUxEc7BUikgwB4OmjI8yXG1dUDpuF44mEvR1aT6Qu9PVa8aNxZktRiFUI7+gqkE5COUXR3AAX2yxfm9NqDRl2pO8395pD28hien99J5W3d/h7LaDdBMlHROifnB/aUDpmZqEkw2amFd5O1HVeBD4ufmDTnn3qCXJhuRQ/ZzabDApACbR+7NPS0fJao5gSpbaW9cRbhyPymnAVkb5oTlXgfkonVnkSKv4cJQ9Jwr7Phf8d+sOJV6O8nNQpSCaBJjO2HK/FCOzMMtVopSV2iLfdphLDhCKqdWd17Oiwcjyg632GFp9YYQWQ1Q3JKhBwxFFr0eGTDlFeWgcKHQUuHer1W9RuB7hUkD/AA2SDQhHFeZOcxck1KZ+K8C21TR4/6rbMJTc88cEEI09YXv968Kd/BuBZCZhHiSojqw+v45xSM6ZN4cWkNbmyGfxEbh7c5trGqhl1BCFZ17JwJXnsVZzHKvZfhCAa2iO5kDhtVyjNW6Us4/vxmDy4AmCV6nOxvrDhugeohefS3fL2OLp+U7A4civtScpF5PBceim8V/GMEzjx3tgOASl+Ykzn6O2DFIZiuNKTcMQt2HipPYk1XgKhCGqlBCrzkCwQ==';const _IH='b54785735d4f630a3086a27c2d601aa08395f9b56f314673ccc062ab180971bc';let _src;

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
