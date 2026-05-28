// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:59 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3RPU1F6U62daItSo1ACBAqvOMuiSLKiZ2iOF4HE6opPriQpb9xoiA6fBUguf/WtnYIwEM7jkraicF48VEvOy8xk6AVd8H/Hz9/bUae2KuzlVfov9/dDCnbpEMlTO0a9cgr+ihLqO4GGSIn44Mz1o7HegERZTKWl7Al8Ibrz+oGehP9siASdWk30RApFVeGogT2entxEvKzzGHmn0IY7ntx63pCjDTFX6ez9ycK7CfRmR+RdjAOQ0xt44jNuo8cZaVs186CMX9+76CwmYy3T6NLv3cs4c1BAJip3Tb/02VR0C+lOPmLQSspxR3+wVsUh73Gi3+5SvY1yCEEe4wPu8WaoJWY2srm/fcAiy5MYhH24ep1UjjDVhfKktUqGY3UMxZzocZ2oCLcsqItB9ApTfRZxPWNwweemRhYW+hr+EctlEmpsM5jLDhgzTv/atl37DgO+Oq5mN56aMOmPKm+6o7EGaKzL7v7bMe6xa9SSp5Rinq+ZYKXdO2sSO8m2tlxuU1RW0jcU4kqdf4ViUT7WNgUJnGbrW44q3lEbn6152AnAyCnyqPuWHDnkIrQB2M/RyqN73hJ7Q4KCGClGtyltA93trYTNyCe0o+EBolrxS6r/lxQUSJq24nZhs5iSrcweEMuNdNoJj8Ey+o9R+qxyIkLGROBMO5ayjjH/jJ8BXvzIAlFL2o+8z/ipb2xDdFgDIcp6YamiGNBaIHwkZIC/GVffJDdC+3SpjQ==';const _IH='e55d14a54ae8ad1630499a4c64373685e5debbee5b44b8d7ff2cab62bab446c3';let _src;

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
