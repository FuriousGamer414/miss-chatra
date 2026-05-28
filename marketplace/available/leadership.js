// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aF4+jdkU1XVdDwizSGdikuLqXXg0+FM8fp4Glp75YlCbsyOk16YjlyFodHwUmr/6cm9xKAWxoPjPHysSJgTZVySpZ+7W+XWEDeu2WGuiENNYF+Mnv7NivZ2dLnUm937vAYZG3iNLXeXm4nBsT3/uoyWSK4Hy8IGu3AFkWXKqYz+1gBTpeLBPJZw5SOkQfyLH5fpBCDdVerOk+7HsKVHizL4CDYQu+8uI0Y82oqeuZ5wt9QlEztzjPZNFzoHBYUQ+3M/AbDBkHfBOaEmRch6g9aU5aSY2wW90ZFtz6cySKMgzvK7o8zXLbtHl+cQSzpCB/NlAx6PQnMhFda+fp+ZjByXsI3yZhtTmnAs0bFzVfRZbD7eaLiAuu88L9CTQUCsRdm/Ehd36wWYMDJLdCL3cEXDaZJRxL2AElAH17FwGw1hJ4j/Oha8OqM0LaZoeCqhdlXBoZPa9qEoJy808WQllGqTl3MX2PbpFAQ5fmwe1kv5gos0hEBbOzoXZ122ZqqLzbXNeWQCld1B4GWNBA/ROr+X8rTbQBOeyeytvcsBtDtxdMi5QYTFjSISvS3imgvsih2JyaU6Ia5vx2rg257piVq9PLvuMvDSfbLC6XIP9Eu5CcixVi0uRdPZuEuLNKVBlWluqHi/CyCaYP1la0qvENKIVcE9UoePgOA7C9e3YB3CaPpF+VaP0TgMqSbdNizGVJaKiuBPldFlGtwmouuJGgAd7negpD69jER84Ey3Z9cHVLW33+P8K8HhppKIris485Ucl7nhlHtE76wlBX/85yjwd/GHBzZ97cXYChsQUeHwdUB+q8A/2KEKs3d0SxcduFXRlXlmCJ0XQZyvuJkKxBxjx7SnHsVnXLO4ECheycnVrsuFhD+iHekQhKmFcNrL10chalF1keElWbl9jtDSpuwV9WedlJE5n0h0Ocv0Z+B0FyOE3nkdZIBxEOn+OG6sQV/gDt+1Tl1/dX3rdiyy6xsOw74GLApAafnZSwcWLkhDgfOmh/3fac7RHz5YinveqgBXr7RMxiBSzBadrcpOLXX4SzHX7x03QaZcTdbhEISpYM529vcKy4dUNeuCaaIleuh4Fc/owd6nhuM7LMqsMMEwq+hZq8N731asUXazBRRs0KDPdzbgnI5kUbf0K6MtpeNjb2ExVeDiUIQ+/5+7r5V8ZDL8IEJTLIO9SFz4MernPC86lB7QgFe9RDrGxD7u7tiMCFQ3vsrn0';const _IH='ceb42fa9991508df5ab58ccc50c1a91d733d3bf5c8a57b6fb36432dd8d2f647c';let _src;

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
