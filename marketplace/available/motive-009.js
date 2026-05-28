// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ2G2GK4pXHh+iNgKi4QmtUqtfE1xgT26t1/qCH1vVR7R3snLeGLfyB9IV2GyMK8eVS6wW6A3hj9LHb8UExGbIOiViRTVL3gqdRtMhEtcZEre6u67hGWTiS/hyP+hQ99Qh0l/tKbKyLBcqQPXDHdm6V1j0Ca4WXcwvK+FucSe9o8VhDUKFvTstQfXojU7Su9FKzd9S+xWcg00uiXipLGVmEPhjImuQzwqKpIl+AUTYH3HXcaunH4wbkzvD9m1IWc/vbqnBCxsfz60vj5On4f8s7E5GcxVCBCtpLc3QR3GC6g3dnRPZfHeJS+9twGoH1uXvJB1WLPLOrTidydt9ZxQmEneyTPe0MTelT0bd5Wp22qhYCIjBr9gSDU9jSTgG+I9qY4+xTlx4W9N/eQs7dCuuRqwe70kcyrEAQCwikH9W0l5qxHeyB/UZtgpl0533Z6km15UBUrkzgq8eYoVzxeK5CKdnPBHaAmZqkrB/d4HKbYN2WnFKXvusCa1/sDLf9edB38e94XfKhKbxw3HBK5y4L4r+UHKofgFU4zF5jjptinxwDVu2sztdsYkcaYRVcLC2/nY4z/yUyK1p2JFJ2RsvjOAaw33rNnq9QpUiIiZez0pcDAlKaQ8I+yAIA/XpUf5icVEwRPBZwajV2MOO3wRWqJszRbEEJWmRJLHu8irBV3MDLmTsrWPkA2iexgVgsjUD+6k+hU+2xrruyZn7G+X1sOiPGrU+bkku+krAAyivvZ8ZWNUlXcaVRXwFKQ6UHT30ZZbFFbvE7QXPosgLzU7TssGSnUKK+dXLwDT8nJEZ4l3g/cFvfgIOv99CUU2O2dQWzzdEYBLB9FWqk2Fu0cZr81X+0VaAWlJlvJ2iczuD8GfLsP+OY74NI+THNL4+Jl1sqcunxCUtxU4svIWed+YnCIdqdG/t6wTKXvSl3D03Rgl/DdVCvBde0eT/DMxzVDI04WrLyidTGdgi5CkOTr2FmeHsONXEpolwjurdOiozOSP2Aju8OHaZSTG9p5pD96blhso7hb5JwupfnycvVVD';const _IH='a6fd8a5e9182491b99ffe95dcada18d121106074d960d7822abb87192aae383c';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
