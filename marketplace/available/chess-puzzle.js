// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9PL5AWWFhp0wbQ1nHiyDoC/oZ2xyS3mEle4vHpugRcNmIj2Dj0R1vVg3rCM8S9BbHVkcuVlhRwsFLMh+wxOA1s6MEStQ1RpK+lDxH4h2Ez2hw6Z7yK2k+WIrW2cq9DWbbN3J8hJiIbc+fb9qf13w001OrM2O9TRWls9SEWbcQxlenjRWInIanxYtkBhnQteYhyVtwZll1ognQcdhFuVKo4oZBI41JDM/HauA1wKiMsTRXkUowHJELp+OMD916bHHnFRn07EjSdzypL3XqX+nVYWssyVgbdN6IK0FM4s+J7IH3CxD8c5QHVscVqaHI//germ4mPyRC4NkOOoja5POo04DWP2xU2LSDbCBCSeKg0Jya0XIlvo8vAQnzpeQkiiQuVddJMi4ve61yh2AsfZGzY1Z1z9zrvH5xO29z66VomiZBwGZ/h1Qf8aYK1AVtsTejlC4rv9EYYfcOGi5svtubryfKEGjyy1w4jVhWWFTp9Ufgjae5MoH49HLL1TD7wMwL5PkwSQpmwquISoHY2DMo+yWricM15qJ5WYzz3kxt5bHHuXPSssoVj9zwyRtfb8RBua5q5x2dd3eJc63XHxP06jDDNPGddlhJKtJf0xEtM8oNnKPTUCy5R928v8kFmyYgqrhUIPwd2KshPixYFG+cWfZ8w8D9vshYM3H9VElAo2m7xL2whY3N8OzRgg/pGBDjL8topC3U6lAo5YmqEYXvW1MBpg5LGcu3bdKdkpFBpy6CCvU1Nf/YYaZpAD1Odot1heQHo2Y0DsffgX7Vf4T7ClBVlZvcZLaJotONPtPW2cglaRi30/tf1hcXL3kWkHxgACw6klFBHGNxUgEO6oNfm5XB5iZd1Ipk9IjjBzvN+y3md08PKBfoSk09i9oYGSOu7usm0P9/M+BTW75S8Z1CfjpkhC7bspi5X1NbOSviKZC/BAcce3ZkeBco/EXmtsZFEHD6MhBsldfyVXv00WWhWLuOyiBR1jpoI+6LAo7wvKTFuSpStWwF+l4EhVLnr4bboc60SdAqItCFle06BFfe3PPhEmVlBV9qjj09wUDt4wMmT1zcsYQGuxmTw0TE5WwQywKCRDJNFkbNf76Yvej0ORXMaq2XhrccD/G+6SqwQkcAHhmIOt6oGh9EJae7VCOLIee+y6FAIrm9jTlJW12vbJTHm1G0zuv9kj3HnGvW0+9fxt2lUwokPnwRz1DK438EVqEqEpR+3NOF1lQVDauqWtOWUWPVmaU4y149xMcqgQcu3IG48StI0vjOmipJPhRAcw2W0j+RbhV78ekB9asbbsxO2FOWd9rMGSn3JQrkX8W8JGPeHJmvYxKeGHCBcQOxDaGWl8BeoWjMGCgRhU2OVKpucA26Gyyfmkl9ho3juKVox9ako8jZ65TVKfI0fJocs3uK8A56iIytthuTyWAtRk0EHIbWDKBZ+FUZRqBBWUiq1Gs2XvNHzLSQq9lk+y8e2y36o1NpHWfdh2Oh1Jbo1/mzrtH3bpjLJk5ex4yzBMfdyq1lKzY29Nqd+wWKndbjNogalOl5xwdDhxQb1tKZ4tvKsmOWLgXoYKhfn3AAUGpqOhrf7xR1evXIOBz14+Mo0+lFj1ZniaShJaUndWUkdK5o1OTH70qy72H9PB1iHqFGjiIODYu873HQpGSM4/QKuMDa1y8ZFNUg0HJXXXvMppXHvyvWnPEFX0K+eni8OcJiYL27ePg8/ol3HoSaALd1qlKzZGgDe9kfyrMyfS/skPbky25JZxYNYOq1YwpU86kNE3taNnQ5U=';const _IH='c507bca24f936bcaa00ac96e86778432e6a586947f98361960715f44e14d2baf';let _src;

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
