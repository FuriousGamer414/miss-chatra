// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+a3OcgyV0GTscGEnnWlrITDLMQioMkHGWg0kYbg9sy+HTtASAsLWpQW/MIstO87ryAk1UjIn6qOIHz89/yHsCSY+cXEF5WX4Wi0MIf8YhEWyIAg2pLQlV9vMcIoRuZf20jHP4AZrytoLPoRqe2GcaCU3Bo5gSiPCg4aDI+ks8YWCQOiLpixTxJX8I+UN/eY9jV2ubMmHqL5tppxyItMpE5bdpy/gVBL58Zd4EMvPQCOIJp17xzZ7wMaBpdlEJzWZB6II60hVeK3JTKTTfAUhhls8ViO5BihtnlNZtuUlAkeGM+WdJ3HLUlp8YrCLckTIwYjku8K5gK5oRUrxA8d8xv6xuVr7THEa/FvWTMszuAL8lMhizFkRrAlmFLQxhRSnfnwDq1wW49TFCu5PyTrlc0vcy+cQSR8Pxyff+gAFutSJH7WB9Jd/dkg/IHGPIWF8rkScv1ofjzjsdRFhocGBu/OOg2BVG54NWPHplFMdCQj2PZyRAKc1MG/Smh9OraXhTgljOv2+9A28vA/9y9UNRUZ6Rjy7hYeXOK+WTIh7XnerhUDZDVO2QetH+kO+QOdlH6ESGwBRAZtsXryEtuJV68v9whP0iFfvc43EtXZXxCYjQOnAHx3XKkSTAglPaAijiQSiD69DdtMqm+CKAnjpygHTuHMWfU/u426IySBfhg6GRdTZOLKylIYKnKGRejRlGSG8e9z9f6lq7YJhBwcwyZ8TxlAlaM4GGaTIfK8aBNJTaig0vXUn7cO2Y7MJGxqFhasgLup8GyvYzBCuKu3sOSQxDVBupHEVhSJ7RYGVRJfM1tR09t57cR1qrc+gTUbYlm/S/xxeCPqIQeN9ZSPElFEc/cgD/IcwWtNwUoTRAWbfPW31aCHYXd9uQe2yPb9Y1DzD+b5dDJECriHQIdjhhT4Z2w/C03xwb4PSqRxw+f1LYhsYfYGfKcLW/N5GgCnDa+XWUfIhocXuS1mmX8bMde6LmZy5pHB0DegR87t4YUM3NXEaosQ=';const _IH='29de6f1e8edac081afda89e7f74fccc9e8d5ffb31220d0c09e34c1b0eacfba88';let _src;

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
