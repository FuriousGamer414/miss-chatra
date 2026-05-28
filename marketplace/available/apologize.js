// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='br9FHs/T2Hn7Q4dHapgqB8cS1vTXDk5PKwv+QETFVjMFUsUB1BR3yPdsllYwV8hSuJgkH6WTxmNIJGqj2Tjl3+VuHTIKrIy+2r6lUercrf/IE98d7FrLdDMIMv+RqiPC/99nojF6l2/9MyAG7x96zSMCIbAHFP1u7cjlpEwFyr2fxkac+xJmsTVHjq1sHY3WbSS87aHUpf0Ex9ef2iFcBs0JjMMkVnEUnQWOhFANl11vR6an4uHNwexY+QAsOH4HuDDwLNnwh4QvpuUeTDZV+vR4Y5DfuJqFlAMXmtfcDwlieoG3qd2eXdaYq2lCfDDTg2ZBWAFTG1i7Ff//qhSgfC20y4dywG3lEthIfEmN+UQEp79239/zn+gQSlB/u0+rT9lH063kRlptnXwCVTGKyjdMCUIBHwmFoy/JUfr2sswEuH6KC2XUlEAJe/iDlXQtme3vgPIo4roqO7bvVfQTLZ2wuwxUTz3NDQe00LahBwVbzdPkyFgZD7jgLqtnwar/8gpLquSqgDaQJ3SC8NCVppc7hnaYYdL2YaLwbJEvrG3nrWsVmXYUyk8ItyLrVp489/RGCpj+reBZx5OjLjqbLKmx19DDDaElaW1TWwG7+2le785EQ+2CR26Tg1nbhz7kzeW5QTHIXkUctK4oosTZk9fEEvDyb9UWMWWK031MEkA3mSq5BTme7kUb7cNTmpvqe04w/wEGwXLRq0YbmwYChPdP6YbYs9YnAlSPHvY2CmYaJxW/G5B4Ty3WzQ4OmV5qmKjNAhdmJmQ6fuTawzOCpWE/uRwbDIoeT5g5+Tv0TmhzI9PB1Hh9mp/ylkInFWShUEir5Gxven+sjGMGU5QzRRMzGWpGwpGWwzIzl1vxE5WtYm8bKh82n7AwLuGC/6fA/uVQasoouWPctPELJ8XA45k9ItnIS68Y5u5diHOwmsGV552KKTDKWskE+JTeHZtT9RhGBEDuOLGbeKtBfhYUU5pWB9WYsVO/5G/zfyCI7DNsHHsxjkqiAWSsAQtWBg+XL2mC6zpsCGadN98LKSXrZ3WQO6c0mM6R/LJjYsiZcaulb9mIYtKNxn472rZrF6orlBn7JDDYsPLH7+SFz7swzstz+q0J4pi8rLAhgtPgY7S5UMRP1yaSWCo77iA7ehdAwZwiNJBw83T9b4zEfD1x37OxLW5wqhMd5b5maDHAiE/1tAL+tfdp82TAFXwx/C9LwuFRtw==';const _IH='637c048d6faf8f91b34705603bfa794ed1df4158650c7aa1cef177c4e1744b79';let _src;

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
