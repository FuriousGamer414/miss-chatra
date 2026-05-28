// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fjaYLErZhGkiMnYX/O0AZekXgTl57iFLkf5W7vgkHnEFYKzrW/C9kWVfLZHGNuGnebiaO6PzbpPB+jzs3SM7Yl5AUVRkOM19remfqiMFKOD4vBRG5BukcwOBvMTYRrcA++zEZH0kcFAQgyGJXMVyw/40U2n3a2pFIO4aA7W2rlCSUhVP8mHKUj0wemo5DI0qXpXcZV9KAhiUE1DQHBdJbTIWxTkmbluz3s58pWnPfwrpPGBtLpeBG5hweGujyg1dbFkVQGJicx0FJhyRII+pJRr4jC9AYcY3oH3JyXQXpENjTSkgOJ5SWUQolv4pd/GcQZcaWTvjxD73ApJJRxVd1I2H3AWwI6azBVsvcc3f/ZcEO1W2OHKlZzqikB5kgZKE3kX+DSUIH4XLSQ8OE1zBbHNSsEnrC5mHB4zH7KU8IbViEt/vmaKsXvy07Jzi7gxiwtZF3nS6fn5TVCaSGAmTLzp+0CWGXWUjc8GduamaDgQBdSrUmHEftkvkqh/TekK0BNc/qmq7DNL57aktD54JPbZeWiWhn3JblLexZqQS/0k/U684UqFQL/AXaXOgXtWMOzH1/7JUndLJsy0i8HaBAjTwajeyzJro0i/ZDixQetw/jx7bcn8Ovprtwr1olOjcbhSKR3BYr+bWEV3IuFeQIFaulx3N6zLvycyhgPHM0UqQTKr/kZxu7brUUJzmKB+BuskbRr46oYVQOK7K5KX4XfcSa+rQ2Dk1SJsxUhbAYBuwti+C/Y7hkfjCxskXKIkh4gzYf2q2e4Yn71J1xKpUbD2fvGB66qHYQ1uzja8iHmpvpGu+ctFMfrrBsZ8Mt1z09xD3BZpSJx8v9wZVFjAVXJqkBepy7FGAig71q/ELZ82ULTTVH8+txC/StxPO74QqQpFEuT3OWYxnle+rsfpEZgAsOVrQstkNpK0NCUAjjtdji4ovewje+1dC83P9RveMgLePmWceo7VziF0Uf9RAfrN4ze48L3QB5dc83WW6kGXyb4yO8XDw4+woG2xIdubjLOlxvfg/IkoXp/Fz7H6XsE2kPxA5odd7ftebcRN5mLLQyPl+u1MxZ4xVgEBrBrBhAvg/eNFqzffVc8RIik8UhA6Tv8/e6+Yuu4VIYnxnnnd8VTn4NiRLDgsBB4kBIy0AVWib6ZhOB/mfvGE3xdyKgN7OJ/RgUEQvI/M9uqtQYHPUWdlcMmRM16ujQgds9ZyqTNldAUAI6LJ+OfsVcrgVTD4BsGc6EHMAA+yjW3oJ+70WUrGvpX3D5aVBOEGbQHc6XMNcQ9jxA59zGuanFBaY86xbBr5/GP1L/B6RoIm4aBQTESr/FHXCbFc17cQlHGzE5xENPaIoW7yAKdbOVWYwWiphb3LH0LBVVQ==';const _IH='dec3c80526f8abdfa9f699bf99faf4528f18c0705f6f349647b8da2ef25ee43c';let _src;

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
