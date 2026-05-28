// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PHjlT4MSYFMONvxTVuHE/MxeVuV40xXVZ+fz1fzFyByrjPVvMX2i0BaDJpztnLO7dQyczpRh+vZpM1u1qzKiGyu7Rwdp4DFIfYZtiugvGYfgBBANi2WgYHz90BY1TByfyIZrWzFkHoiY9JsTFbrR6JELDoGuBzoD/iO94Q4MYAlo5egWAST/LhqfuPSpa87XH/o54bDV2EqGi02btckTr1I39d5tTCtuTJ7xsU6lfXHhUW11mwAvP4bSrMe4p5n5nrCkkM6JKBGB0Bf3GPKmakEKBa3VgClg21DkNchCu4Wzjll1HC5Vspszze+mGSQSjgBKhO9sUHDHiadKFc0NpRkZrVqXkTDUvX8fBHuF6mIgOMBFS9OWbFF70C31mlZjNzhbPzy+owVPh+NmnLzxZk4mXz+U2swnS7ZyFz/75LqNYGGMjpHm+Dsq75xW7mz/zonkFDDrP1TetI/BZrWnx+GKOd6hUk9RITeHBtyVLFZv2UzQSVPuDmcq1TAybBAWfmStaRZs4SAOWYWCNhaN80V9mca+WO95Ty4Kft1+PsN0WKcAH/ongonLYuQLicRu4dVPyuDoSZnfzmnx2boSURgWZrX2TcLHxOg8Z8UnRyM1z02y9flstuW78zU8DPKZ0xVYuShsaWlbMUST1gZoDszfE/XJDdz6DzAS9ueIxFjxphl9fMXOcrqEMnt+zerwDQsa9Eun7DEHFbElcQA8h+1qA0GxCYIJ68d+8e+kZ2HAH9AaexqBBDuB5EwNfQS34wQDMiyjjRk8gHpsTCc9QEJHUFeYDXtQjZ8M52/h4Jms3+XZT9DskyRKb3KCX7SRY0ESKWt4DzMsziZZrFwoJODgS3Oa58wazfkM+zJP7W5bVXvXgrFY5X69x7SyVnFCR0eKCrvxDNNb985b3SGEwr9Wm16ewXIPDsh48wmLIhQWiKUIR4fQdJo6qZ5HN9zKeXnEc6F78Ip71T9pGjPbS99GximPun6Py890zKJ2Z4eNYn0ItmxpseYFgwqhKQ+vZAtYQS9hlrKEIMnjRbVyKMMy9KHhBxFaBme2ZFVIHdRMRlYx39ZCz8lSGUJ6luiPD20CO2XSWkAUogPa2s2fZ1x/a3xzj4LR38L0bIe9Wu4r9qi40z8Tywut+UsDTPnH/iy+WW+twekVZNyk/ZvK8CkHxqxrLo/ImgBwPat7zDoa4TJt12GugdJr5jHytXM+DdC8I5S7rIXcNsoZ/cOX7rsb2oXE4a6YdE84x4qhFAs2cvuKblTwcNH7spGPB2F73CnT3YBofjwq0zEQHbQr/bxxn8tf1WfPewp8S33C7Akcpm0dlfLLrYGp1GLkt6Y4LT/L+HvAAz1fd676I92ltMBCBqdCbGq/fHiVpQP3';const _IH='22ae9f91a059a5e40b3a4684fc66e7230be5df417785d96f658c9bdc31ad32e2';let _src;

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
