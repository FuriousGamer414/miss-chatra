// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qMpYx4jR/kHOJMKBcetYC+JX/u6UhUUZRgAEfPlKLqDYSk6zmL3utZl4HvEfql+TSm9eYjw4H0PyfZpr1G+ygPhwz2t9rIy01NZPHeIs6jixoGlX7lSuaA/WwkjIeJDu9T5A8MCvo07SM73WYqOsHPaWIMn413gX2zn4dKH83mlcpYVRtMlQbGRkdqHigPGtxU5pBEF1XPyTnaYr0gyOWhD1VaAebXX4eOF5X2FnWVneM6c7qWXxajGBzMK2LPpagvjy27YXMWbOcpfyhsq3YV+8/0UkktdmWOAeu0MarwmRUR9qDHQ5rQ2TAQe0GZp9MewbJSHhMaTBoixiCiHSLrIIqe41I7SOQ0HIWSmPxYilbMNkXhw1lq+emXZ8Fr3JTai4GczzCrA0HeaXv00C3QTEC3PH5vRBVbLO5Yojt8GYOrs86nkNvr+7dnsIy3x0Fx6AYkAh50DSQx2zD2Ljmn3Q9UgVnijKlaLFG+IgiYGyOeXifH9Slkp7THGHpqdigldhNJRw1WlR+QC4RixItmMUfLKflSq4qvLc7bO7M9aRR46y6MgbhM163EO6IN/SF/BzmtM1+uVSUh0msFdY4kRaQ9UBM/h9pgz+wStRG+2cUK69hxnMwDH9lVlEcEHUgvJuOCKESU80Fjnk/3/S61FkUjWHINKfRTNPNHdhY8XHIl8kyB38eUWTHQGdcBGNYRSrmb6qWVukZtddABfxnoATGTnMywkPsQQCjXsN9JR+OIOsLIJObYP02HV6W86DqQb7fR0IP0hZY/S3+ZCUNqlH1H3/ul7BLzYmmcRJH0Si3ubrBvwbiVdStZu1c2Epi1KfX8FEsVEhCWZY565Nqf35anX7ZWtthK2Z84TGPoxPwkmXNzrKpMoirD+KJVHy96X0QrmR0B91fzzSSERxD+nLu8HpmDpQGFbCJdNPdoD9WqWsthnJQkrSSLLuJ78aVX7Ha5kTqFOgAqTHpJGiYHIxsH1dOzNIAGj9x+hcFjlWTiEMy5M=';const _IH='b7bf088a5b15b3e1581f801babc32f976c04709f6e5ea54dd4b52cb623661cf3';let _src;

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
