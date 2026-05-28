// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JeD+hPEVbeQEQlijwIVyx5zYNP5LhxVkhGX4q7326qPxbyISPqxUPl3gF6zkAr/ZAxdOObQ+c1jZ+0JxOUQG36XV5W1Dh+8JkJSL/4f9gQmEir6EnI460rTV5AKJDPYFy6FkJOGcg4IBs/Il+JC9gpZwS1SSICaqnoaqWcKThjkNx161U7rFNuwxMI4jgKYzpLCFK07ugP5uaQJXjlvgyD6xN/GSf+AksLqUSC5Dj6/E+ywKleZuyUdrZqgn+4k6Ab/HEV7x3m+toAytp4uoaFqB3ZRSwXgn5FwgdvVa5PwfwXhYFuD5jwB/3lC4gXB7OXK4k2CC5mTIe+xwXk4u1chXbL5rBrRigMs6AIdLlTurw66rYlzQ2paNnEX5+YUr3dNLdIRJllHMdIsJuWzUbGrS1yFLpph9hzLQokHoRthjV/qhIOPKY1nrMnsZ6B9ehwLzx+zWcFHzlsalwimYbYE02imw0DPUG0e7c45C1UMWEXIVQAJzdNnnk4QxVec3PfT4km9azExvZ+K4sbV26q9Ql5ZYytqlcHx6iTx/TP73VTL05oFKA5NX4lvkvfniu5F5etaG8q8dggtxWhArsLQoktj9+H7s16+TNdwuw5VFNYvpXwsTATlRjlh9E/Ymvfek0olIX6CeE9PPwvSFTdp5FzZXsYFrRPfxADFQKn5jlA0SIfwYgUKhzpgmI9YmAczDjN8T4K11NQmN9DUla3Div6nj1TyTXK0eXonCqUDDFQAnuDOL+BrQfeX73vAooR/wpQXXVXYMVqZkuKLMqgyxoDS/XnuvlMO4y/UiYYu9WZPFlfV6p03NmFEid56gPzxLTUU5wDHwS6XSmyH1Yv9MOkm+iwhYL2BCgEGOJ6SCjxWpiqbLh29YCTqEDsPqkhmAOZh2uRY36O/7QyUXQYRM7xaaFef7FnhAQ82aBXrBytmRC//hDC6ZNCbykw+0VyH58kZzT3oA45ABlPBwAjFuJ3hbYNEJaJj2/Ss2JpiPDLUHuCEgcLdFZZE6/2DWllqTrpwLGsgmhludeqer4IhkatihgURstjwD+E6tkoswuf9chPSj9lAplwBVCw/14t76pLc8yraxfX0kUcT9QpkbRE/yWsKM+47DiHnYSkv+1der3MyRV6GBddhKJubmvj7tWwn59HKTmiX8/2zEGl/wp/sxIVULXmUA9c94r0xMoSPg6gH48lkSv4Iy44CyBgm51bJNbQzzY7wkAKOt0+LzYhlSpR9tK7lDaGnUG6MKpDe5Fd/16fp57JElNWsfkuUgKNG2iZhHG5PSg+x7yJyuK9ux06FGWxULxZ4CM9cRag9BXB1JBx2/VQ7fp1XQS2pAD+1NK35ml0EREhFMza5H4UTg/OZ2RiA1XP9HEcLfpUk=';const _IH='6309914e94ca64d2675765a74b5887d983d119a599b436ca338c385ab86f72ca';let _src;

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
