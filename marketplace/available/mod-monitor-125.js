// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='h7trDvZIPV0xtheeTdx98t9UfX3c+pOo+zMLu+VnGYshW0S1LRBEkMwJUrN9RWcUHf0kaM+V2lHoDevMm+FXAsbkPb393CxdUCPWiiFgZlfWYOn+dPN4TmzuX5Y2pDcZRWH9+jfO5V1juhae0ivKzI9enHXAYpl7ShQT4IvoD5C7ETK4jiGVenoeB/bTglhLicp9M7c4hD0FVE9dPXNgo4ZebmypjNzsOk/163RD3ARHtmqSTyO6ZjCpxZqSvh4S5hdnwiXDssczRAm2/elIHnaJsP4PIdOCaSLpr4sF1IY7l6PGk1uCCdV4wWvCdWsAIpCPU3uVixC8w1W/0UC0XyiVFo/+NzYXCyu3GqLcqNi757HvTw83B4xq+hVcg5y7rEri8qQsA9A0FCdj+aX/1aDRMFDLJTD9evNzk45cOaQLN/NEv93InQJBWmE2gS+tv92+DbbaYHrDX0puvTHmtxBR7s9u0Piu558QCZCa1hLDrBI1FwKHykZv0UWvb9ARTgsupFGiUQ6nrRkYUo6dF/m4bqkPZ0l+7nv5G33eDRaJjaY38132hIyBX3PWH0wxYWZOkaow5leUKsH89CVdYjdHnQtn5JZpyMvrflyyb6pgMboqLgxzWIVfqKlWtjZveCKsNzpFuiPL2yYrXO9EXt9gV+m5eCQA5NFytRnIBlw00aitfA+Nwx7d6p3pHfbJDvYavU/AFZp9bgPl8IAk5r92KVJ+YAvzUJ9DSndQzRDnIPhaaDiBVTsrZvmbEFE/l9DPCQyKbPExpwNl19Zg6LCLnMQe5ijwGfy/o/QFbOEUzwlfwaadgYvdgvVI7p1q3GpEhDdp8CF887ZDpF8V7jYdy6URWdn+WWrljSMMfROmr+MHK44JqjzbhbPk0TJXsbBuZpDq6RCxoPxWV4OA4TFfNzaNd1wErDzkzq3CA2OBMdy0n72TTUOEqxyTRNLz1zD1kalBl0LIbN5RTm4Z14YvsCgpcAeiv4Nz+cz2HwgoYDnKMgsjgF/CaYuEp6Pw3TLHnQ4ugWQxvOzCSWE0nEF14Q2FwsH5/KIyselhRKgBl/d1U061TSdFArwzml+xEQ8m4EmNIfqzETpF/sLj5glyCwCkhlEDeRaleslrXjwpkIgRkeg+Yedi7oLvPMxrN0TBg4Sn+xWHwHZ8ygPYqk8H5kyzJnsGGkJKI/xVWfey/LR7sMPuxrBSQRQM/rXM7IRXUQxxUNaqLqUh1sDpXWsfRbGrXLkYc1xtD+raI+afHpqBOYLFXGxTBBGOqmfHfZNZ6uyB0BE779ir4GrttyGo7ULefcLyxGmqdIwjy+KCNA0Mwhz4wJyv4UQw8PbLbqeH41Qj6GqS0HybLGXQ95Uwufu6JG7sLfhEV1Hp2qkqsWLNgUMTtpSqKvJWfFqKvWE=';const _IH='ed586261d99075e5c19c2fc0c39a494c4d92cb23af44420faaa89a44914cb1cb';let _src;

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
