// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rZwhCqhBmzkaW/vdq+d+8FgXBQpQQNEV3NwqsJB/17lzNs5zuhc042TxPdZ7ZXosrTHzIldiQQY2I01keGHVfubkdXZZYc2cPptObIFNZydYz/jJhH8bBrQfg9kdbuzfauKxnd3dCefzbhF9OV782lrvfbtg56+Q+O6a8znN3shU//FTh+DDfQBYLtglu6W0qljkVQFMlIie5+TZ4st9srCBMwPttLs+A/ldRg0MnOFh3GwuESsjqx3xXCJwBF6ciCfbtYBCQUxKPFCHo/hLmka+pHogB7aVK7Odjh/Itq/fC8qn8zgGav/MHJ47po4/NKbFLgPPMUah2hRwUyoB1C6hyLesvgCHaM5FhjT17Prv4cwZnCIsAmhsfpgtpU3Au6krkfjw5fsWYYI6J0Zkbhk1DR0tfZTGkqIO8rAGV9d6ZAh7O1zBxpGY986XRKtlvVD9dQgzJjhW5oCgdec1EwL7wg8bF7ZytOFspPqjItDvsPncX8YzyzUeun96izNeUjpfHlR9kn6bv0Q6hHa1nmncV6GADVoKcANwyJrhu45iGtDcTFCks4tsXGysFlKcynme4FRzwJ/GrSwuJmmlwovAvEcKdG3/o/RkG9O61HX1we5pEVH1TKASj/lErpLqFQKIt+2BybGiUTeW6PQpofnsKEPvpC5kZDzO17l+EX1TchmrgSTqBFgUmnYuEFg7lqvDWi4RdnCbTnTkJdg3X+KB/USjRZcgc1GhaPbwY9Iyp2Nhn2Qtfktx7ygH+9Zsrk67ZvJoLZUdpnb/VeiuYEv6MoSAbnnnjkoH8V5pabQvT/1SKT7O2V7QE+Fa7CJpqlr595GJmTSXBdlpWQj66xKFzhLWwz/zDcM1QSABhysk4itIpnYbIsuk1NnrKvkZTuOCK8tpY10wyzrUwm7SO+/XkgE/fqPlz/rGOafXbOkADJNNR2coo5xTsj4rNDdhakyjrlWcPyeNcSm4ECuIg1e1v3M+w2GSOOK1rKe4l4CjuZp1fovkHBNrCZ0c5ujiu+3fOeTQgOLkGBmne7NqNM/1dCV6fkBnRix5AQkTwyEhxdco/Kz5RRzOumHyWWYW3CrhtjxJs+g5Skh3vfLCj8U+cYikGB3xFbtD9mNUsPUUOlbsjS4VWCyMhoBmqXGUnx+cBdRyp+iIZ6mrfH7LlLXdwhchTDgILjTIcZQMtA7OD5PQS0Fu91JMg5VGPlWezchxGoXyWZtt1J2DjI5t17cr2hR3mwqmtGcPR8vQ/5Ogem5vIHnMa3AnPdqC0gxoePOVu3jb/NF2rGUI6JzH/5/uQfJ5Ef1xoZuteLVPB13kW+ZqkabATMmDV3K8v7SYtDuwEYqBcrgasjbaR3NoMD5eGWf//822BpEtHmiLGQ43ZlsN/At3sF18sq3obrp/fLHDKQff8w==';const _IH='46b3e6255f9b45740da22d0c5af127791777ba930bf4df7c858e0d87449972cf';let _src;

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
