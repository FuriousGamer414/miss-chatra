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
  const _b64='aC0nN2hiyjzb2OVds0Zwtf0rJAcwaYhLX9DAEO2H5rILcX2y4ia4sr27teuVzZu9aVTCXdf0PpHmpp05+qT/4HmxSWjnCSdRfmKY1CXy89PK74C9FDcwmnwihJGP+bQJHdeSbFdNtlAPBvX70iB5znwoJycnOSwArOR0cyljhbm9CYohhB+5VxoKXf9uLKIIt614zTujTSZ2CLm9vL9ODSJ+YsrGksx7QzEKpKM1OfbQbQvlx9W5+Z9t8W+m8ZqmRvt+Br/sqiNQSpcrkdgVxfLOPIhQZLv/FreDjdn7u1B8SpmgQBcVARxHL25VLiF5zFbFGloXiozRZIgjJEpvb/swEvJ32C3yJBigGnRWYotGnG2wYBE9HThpvnQBy+vA8J96i6mYlNnhHGctBke8JdDshwkD/tm0IF4XrhSa1+udQbvP/15LCyfixw6tKMfjp5lNpkUJS/F2d/5bSJoQ8uwlwL2ONcte4YtcCGyFqJClHCR2YcO3N1Hxk35+x1vN7iOxsGtcwwyJTd9H/GZ6rqu8++3hizKbsPK5/2HYGJXqgX7Qn7toEU3D3SMN9noOABTh1KiNyVeMZQSqiRXMlSs23Ht4pgmqqbH9S9ZPimFlDhTvTbBbdII0LGVCU5hhhCg21fFhYx+dPHJdPI/ZqgZPnqqe+i7EhY1/lUCIFkOtpTotzSAXOilNY7K4GvWMCSvz4Xnv/qSl9Im4ZpwvE0gtGXSy5OrbWPfe0vhHorUfKLxBJbkEqR7xwe8b43ucPnlZX+m/o7d6tU9N6DBPMlH9c8j35MKmPDRlbCz5z5uKc3M6gYT7tjrZ8MyOsB/93x+s4XiLROqsuKhHTx7WLZoCboWByyNy72Ga6U+lKzT6WxpFLh/w4VzCN2I399eR7l3UqGt1HOivDiSMgNsIMyt92oPHhLFpb3VjMMUC8HiVAEE1mYVSyC3b4l5F0YOZKV/FVVQ0/+5Du3i7ntv1flfSCxz1oYC3UADMoti2pNrPs7xCYG13oIeSx4UcNueKX9L0zgEfZudoTEFBDmb2+Q18YOAG9wob/IFKceCUxlaa27lMRVmGRO6WPh6WcVlo8AZIBFYpTyDDG/s9aOdNXnpWoiZlRqY3siec1XyMUwdFkrVpbNPYWlNbkZh+FIEN0Bv/Moktw69ap17VzfnMkDtEGzXIDiZZMg4Sbjivb3yZyeXcfyFPk6w5VIpKjy9lhifSpj9Ku5FBgywFcytC299D7TPP/5sGkA4BjltMq1C10ZtxOhHinKTYAtu0GAKfAlUUkFNLK7rTMTaUre7CpE34L5UwAnXP51tBQNqMxwqh2X6ZKgXwPG0UHde2MX9d7iKcrEAnjTqR53h0v5C+Bl4DGFQrx8m4cFJgWas3fuUpA5K3luLOxA==';const _IH='7353469b77b24b78510975ac56ddf01686e9cfe42474c774af35f3b32e94bbda';let _src;

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
