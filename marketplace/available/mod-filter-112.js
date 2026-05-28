// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='U/XPtpplz4g6JxBT+xs7tMoABdgr0QTCOySZuBP9cpncUbjmcxgkdr7RQGKuXjWoKsPOq19LyQ6r5BQbGYOMo77FA80ejAkfKTLbxQU85Dh3UhkRBqJwq9uJLLVo7Yp6GJ64tRRy2Bq/wqJ0EeiJGGqKCkAqVqe0b25VpBqwnOd0yQS5H6DmzeE1w9GY9RZIio+YHWcy14YgFXjTQ0mlH4E2EBhgkP+GkhifnV5VqqCxLFwGnZ6NY8TsGwK3LQ0fSEzuipBWtWIHl4jqIDD4bg6hV4sYTSVGvzHuebi/OLRIfeyQXN9PwRuxswAr3J6RfHqp2AhvKP9i+/6UXJW16nmY+6JxPRRsHCaSYHK70D9cWaK38PuDWtO5NOIp9SGa9MihucJy3oWMFcN7Iv4EGh4z658oPD36OONHIgy+yKdh23aITeV7dAOnotiortIsarBjXiLeQMyRlfniYUjNEvrQ0HzEXiJdAIzsGd3KBT9AS2C/uaHD2mkniUj0krfXiToAgtBFWnH4u9Ncmnh4OW32n5rOrYL4qZI/D/2QpXQYYEpzWsVoPITpSa2zb85cX8J53aiEf9ohJgEQe38OMToD7hde0RGBOqH23bPPwWMkAFHQi03GIMyiO1YaOZiDizpaAO5W5h02ESUcR4gLqazLWVlSRWiDmO8JsQxnDGHS9crBqJMmCOZqsF5Mug99jMyIIR3kuiPAC3i4OK2OHH29mFi3QZoKgI+qZbFQWNmykF6/FS2j2Cr+xiBr3NN+OmmrNMixZFbMXr/H5rISnxYG4PHrTIkOWdfJYBQea1ApvHUrYUgNoDTOe7quWToItCGLvPWxPxqkmCPSDwzyKzV1XW2iLrQL/gC9cN6agioEbYlQxJQTlkW9nkulXOJyppVCA1o9ZfekcXysnDdQJeW/dGJQ21eugUQtJuEPd89tIruOKR7HOAdCoUVdX+2COk3SJMyjq/kVxDosPLYwwQo7v1UxI1CqSK3Mo3Rv90fEl23Bzt7Z76nno1aMlcjmXjzrQsmCzyV7hQnFgpfBD+V2yAODC/yL3xcotm9kSYvbFYDFveSSpGVVuJFGom8ZQ7NWQcmyREUvzMo2qhY/OTCyH1tK6H6CYKI6E7PYuYAqEnoHCK9A54txFJOteml/odHVnF0h0tVFglqfBdhoZtm0veXXbej3+cafN71ICqUcvGRvZJyqIYRSanAMA+7ZSTkcYlzMxzQ8eYtuk8tTMRdnUj0C+/X7rrsidxUINioVK8/FJI2odjC2xC6a630RRkXuVOc3HEP6EyYEyEVheUQ9ew8ZRvVX+Ougyg9JZOBf/IsQHsCYELp8PGtS36Y8foI13pJVczzPncdBzMyS5qSw5mZm+EAOhdg6wBcsm0gNKugS4Yj9AQ==';const _IH='43ccb67fee3dad73ddb0a98c231e6111ecfb5ac0246d5da330da01e5860c5b46';let _src;

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
