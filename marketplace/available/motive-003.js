// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OHSf4Hg2zDT/Y5Klubta/Cb8Ng8LrRHfOIwmcBv/V/cD4zyzj3rBXI/ojXrWciCXWdCOJLZ/RdQf1e0p+2akwQLT9lbM0GpG8IvyQcLPS7RkANfec+X2KRVcKNjz7naj3I6gelDmXQYByvgYt7vcYGlNiyRSwug+1bzv5PWUtHOe+UfwG0xdRrbtM9o9H+zrGuCvAMe8YqfhW0pkgZniV3wkrzLBZVshOAzgbEFw+FPDSmFBoCtXGmmPrrj+KSz0lqAMjo9jy/ga2LWnQDY0Rl8AdruircQ1/1ZLLHmNf23kAp+vcyretiOVAUQ33ramrIymNKASio1TMpT/yoe8RruXcS1HJ0vlOy1bJLypKhs7iJpLiHn3Ilt0nGiOmK0hS6UX+DcNmDGR0DejCs7qWAxVC90P26VUz+EF6aSbH4P0sd28I0Jppqeav10LFUX/oRBxvptQXa4zVkX0Flj3t6yvRIUUgpZt835GSwQu0JI5iQd4Bpa/oL+GWzdHUfxCCIPJeIpc5g7K92tJyt09vs93F/KJ72c2uNQP3iW6CytjqYYSa/ok0x3LVZZxJgV5/m7eAPfx1HAFiOd44bWQCIwitAJvoOLKH1ut1PtaI4RKIQRm02W2FgvL6nNnvQKVcIewj+Kxbiov60ef9oDKFqmBgF2zL17tSJ+nM1ATnEDhnToBqP87wKWFsdOoLt5TzYfaXrR+Fy0hM5UtNlz33Yel7dv8hf5siULqYXSnMjQCFLdf0lYf5xxmnX8vHieJg0DDsNgX/PKIC9mRw9m4QyJhnTBa86Qv4GdLQiFysd0gl97rixKfiVemEPFoPMNn0Rr5pbhJ8PI+c+rB8UYh5yN3/XjX8LcSbFcflitOYIC+bJ8vCzETVczdzJBBeNsG9fzP30Ii1V2LE4VWB7YLCz9x5g7TVNNFLq/R1l4yRA5Q/Qr+a4wB5TfCtY00+97bx677b9ak7NcpXgxHkiFnChL7RiGnj+hUls+bvlH3Uqb3BIUP/1oiHGCcJUmpowyJRD1/58uiFouRwM1PHfw=';const _IH='666f9f340aae6ce9f31134a309e8325de272847ff1d305f9cb3602e845ffef74';let _src;

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
