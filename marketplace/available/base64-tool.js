// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:47 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ61d8ZJaqzIPE8osT+wqeym0mQ4HoLPOfTEoTKbP48G56CSZ2v8IW9KYKvPC6PryT1briMfwlulv/n9Z6aBPu8ek53+10NM5sAWdGfSTGaEzg606bF0g1hbmkf6aWCPuyCroLgrO9ERLO+5vjIqJtN77tX0UND5YhwzMD6Wgc5JiTN4+U/m7K0a0qZqv3Y2uM8Ok8Edb+BKNWUzM/qNGHcE5SRA5jE7mUjkKL9y1QF4lZOvDc36bUp7nI80nd2N3jNDdxmFQhojnkctKwwYSEar7qgqZ0NTsndugFHIzTna5nDoM+3x8n1s0VmZi+zkvt90auB8Morkh/Hdcc6z29wFFW7J9z82MdWiKAsWP8VBH9Wdo241LVPcKQGtU9qKkEKrUSNwQL4aVmTlhhI6My3THRHXJ0waCL38+x/lkybJaoUQnNoiPMAN/UvdLPIJzIrftp6tfcIQPg7KyG4TB6lpNGUFwoUtHhaOdD15ZZmDE4oDWXzNahIl7sEflSk3A3yQZ7Nyp+z1duhpKyHMsmi/9cobhuvlfZSfhQSUu/YHtGA2iJsU8E7JHBcXhgYsFwb8iK500jBRs3wp6xbZRtVcpXAdRD4kiTRaiD6k7Zm3KsGeF02RJBldy3YcJJYBd6V5Pl21C8GKjoQgOx+6moi6WcBJnCcH/Wi4as0kcMHRW9JunZe2D2mA1YOFqno8biXYE4K/gbiwG7oECFnjWFwlbo5U+iv/BxpK4nxnkLBqA1gQm+NEKVdnwCwB9ppg7BPl0xcWD5WShiXEZEOoOzjHHW5siiWGVM4tcOLdYx5NqUYC7x1ZNaRx936nJb+NCZiteVUk5erxKqrY93VSPKVd1VmyDeqR9W+fcUcM2tGmZGJxK95ucOzNlYZUC1bzmIt09tTNV+dB525Fwb65ZokvmiC/wgCuxylMKFAeD+fitkoj3h0QGqb06gufaKxdLsA3HOWN6EieEXsdBK0im6d1DrV3RUhcPJQTGRZm5/O67pJHU2ls/EF2iKyWAjcZlfyt8fjjZdsx2sv6Ho5PK6IfaKsPcDdtfb9ylPUuB/4YngRfYi+jhjfW9q1Ce2wLP8Wt11Th9XltKJT3raAqk3qR8ww+u6nG8IZ0XT+pA5xz4qJeURjCZA4f4n/AugW4N8xSSvrhSi3RCLWRS6JY5ARV0WNuC9TbV7llkMvY5Hd1MF2M+LOHAus7tem4X+IWC8JcLv5jpVkDmrhl9ekIsqBb1+LUimgNk7xba4bCLiVyc/PToCe07NVCNBddZsV8pqV29V+BTa0USBbP16iRzMWnTqFXpVT0Ld7wTrslmb2Chez3imqBRVU38cRaM40rRAfJqN0FdYJmntnpHpticDFO7sfj3d3gHIGaTgePNaFu7GTQZJR9Ay85NyNNQeWSpl+n+2bJDtgPPBGF80zuKoAfi5ExdWfyCkC+RodG2EuN/3ApypYbphqF420gjW38nT9byHGDENX9tkww/dm98xFdbBpJitU3OlZNYvHhvAoHFfRcA9n/zD9u831DehxJoDCS8wXCSRHUmP9Iv2LN6QoJP10q7j02oIL+Oi7w=';const _IH='2ffdac295e92a724e2c1986f20132d12e5f7200f5f4cc144d7a109ed72a44949';let _src;

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
