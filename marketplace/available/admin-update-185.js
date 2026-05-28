// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:42 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+wAV+XKI6tN2aWSJkQwsa/wV4gszWXr5Xi+90bZRr/bpOpA7yK7K8K2dws0Hx4jMxM9BLH6vfU6/8dbj9Wa+uaAUvUVQ20dg9xcTRRxxoLefyy7cSEjSSnPbs0qqwKCOXtmXWlEeoAnIMESuvCegbPUKyPCbQovTkg+H4vhxxB3gJWFPnBhtfQwBlxeGz/YNpPstkp97X4wyJlp4lcIiW3fsdRRD9ZU7gDPhvOLW0BbpcIZEsDhyimYsn5PpBnP2CCIu5aeBQF9inil8qAFe7zLFNk2ww6TpB3h9KumvMK2jQ/ZBJO2OZb1Qop+Ipzk1CDYP+a8CQsbDqvEl6rtVJj7uJiCkxCWAYDy6N18MqDqIfGnvBzAIDKQz6178TbaAPaRsE5DD8LA2PB3D63L3ksLSs44oEM5KuuceXMvH37NrNy/Be8UACeU0z2DVn1euw+ZKssiGiXI6Z87CuqZhNrT0EyG9jqCRP/v8UdIyG9QAh20gKYT7/OxG+kYCqJV9uJaUH5173lcXk5+Td5C+KYTM4GoSko6QF4pd9UmwZQKu2MBKpT288VkjMjNCtj2AuGeMjsHINh4tcr7KW695fW4pnGa6duwQtw32wLXCb5I4zWtQCa703ggtTRNodc9UOz7qFNq2Mi7g7OtrjewlvSrYqzpvP391dcyQNNGEfj6yyfS6gHpU5Ws+QG+nqcRz9HzND5Qs2NNwg5f5rU6J0mlQYeBTYcOhqz+7i/5trjXAUags9gFg/YQPt/Ow6TuZ2b9PPNLROMCe6yXfoWiGlrFH+0/P6AmaRqtnxzOEePaDAr6Ujjsd3NGg6XcEAIjcWhDx2z2ImNg5ZrLzSkgg3XuDo3ImKUhrG55B8+w10Y77fOs87KIuagnQ8m2vEEqJif9WJDxT2YBCE+BqSRXAw124al43MZjxLy+PP+6s4UX5BWT5OGVu2mq0jfwa7MzFm7fYwICJdJpKIys0IN8KYHYE1VD26hgscjPnWg+uAmu1CUoP8oM5yB8bHqWYuX9ngs=';const _IH='19ecd9561b99a85f885a68f4f3b645bdf94d3208b7b8ef57cf649aabcceed583';let _src;

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
