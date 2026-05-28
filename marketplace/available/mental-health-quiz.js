// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:42 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zfy5ZuxQkgJq/tpi69ucQd8knmbIt20dBWhaQiRNETqeAsgUwxYR2FlZRTwlbwqcv+GhIQSk3mfEpklyHQf8e2wXyGbWutSWjP1xrq+xhAXyrn7jfC8VZCyvMwz1ZOorvMk6Uj5WsVetk66NbQXAYDXE+wD/eKI17guXKbhmU8cpHB0g7ct635lG3k6rL6+j7TTMKeAQIdY+NML++/3B7JlhJqZCTcGX65dBdB9pc3LV/lTf0wdOAXOkwhHUPd9+OGv6v+OTo8qd5eCJQXgZy+aF992b0/tvnLQBbYE/jjhJz/RaOXLRvrWq/G7YfujjFQc6KikbwZNh/skEeZPKYJrwm+AP2OcNokkB2V+vlPvL0NxlwHUNiSO/zHqmEXM93VCwGE4jHftsaZ5APt8ozPImscGdDr7ljgI3vdNZi9lu6xQVDdbOuL7ql6aPHhd1tZDnRx6ldPj5QseErUeFzwi3+4RrMf2Rwgr8wXJgbcqxbKXTl5g34jnCXNLSdo09/puyZejtVhYGifb6T1lnxvOL//4/I+ojtlp2+GiKrHZKtprp0jwsS81YgNQbOI4UosJ85T/HJAEFy3Ew4YokdpQErSsAwmr1bgo/JyS8djCyLfXebrll+k+2pSZH6Xv+MohsKmfRZ4uunzLqvEIfc0O8nvHzc0kgduYLzxiRd7mU1uGp1gBLK+vjsn/dXzsk+UE5gSjCNuZCAd+fkBiSMnEvL0WKLAhdezgeaV/eR9GKINmlT5aUFOXXj8lUVVBDxm3dRhkqUB5shIh6ZohgQDyuIRQnoLs7UFEbhZ0W1Bq+m9MuTgcXpvgcYyqWz6/kAc9uk+L0xEyz+nC+HIUf138xSzl7cVJEbk9VlUpKkxlUTRUO46E8SsAQJXEObUwm79KPO5ZB7uprSbUq/SHwVkjP3Eh/r07KV5tb8c3Mn7ul/mZ9yJhcMsK/U2Myvnj1ftt/RKxeDkb45wkhSDaC7SBb66zL+QqirpCgm4wAr/bJ6gLFv7E1xZUNJCDojraR/SMCigkHzeC28Xq9Pu6KK5AG4eo46l88Vq2noihF4/EY4TnAiSIwf6Ewq2cL5mY51cW4bL6cmq6ZBCT40TorosdHyBIiPgPP3/nNwWhMUeqHqpFBq3IKhp2EjSDL63tgGe7vUIIX3ZHT2Nm8S36WTyEa9kPO9j5CJr4IFexvQyTNAQet8HGxKh+gkUb7c46gXx8tFhGqN8h5ZwDDMgRjwkJT9WOQ7nE9z8S3YmfIdsfhve+MIfJbG6gEMrAqKh1tCDVtsSB5S/BC5qfN/AThYMrWGXUsOq3zZtBf3fWuxmOCsFazKPH6xmKITz6V2gGmTqU55M57RKlYYX/7XZHYAvNcxKmz8so=';const _IH='433492dfd35d1ff1c36b4d495438dacb55aec4af465eadb9cee6012bacd13f61';let _src;

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
