// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xF7TwsMLMiJApNhUnZgjxdaT4IzrrfhYNZ9suZnMuGzFmdQn79Q+91yqEaG7f1UQAklQmj0sW2YFBhAtUEzM33cVaPNK8HcoDD/fXn0WcSjr1GZkTZspNG146wv9MimgpB2UzISmWMz19SfkoP44Bm5sxDJsdfaMiTAfT8Ddh3JlK8ibX+EjmSdA3G7Xpwk7o9xdipDXotE0u1RRu4cpgEOOfy9sYGHfKYDdCUw4G7c49nvDK2wlbtozjryWQgdYv+KCByaHQ6MIrw1heBWDOc+Mv8nebT7N8Mk3wMp4VgUDcDULrTjppOFtfsg5jwv70qF6XTBtCLcKO9oWvdoL3MlLvUJbxLD9GfB8AcTlnJcMrypDMejP5RjIDxrc2ZdwzTNHKq9iGLZuwVf/LloYc6+TRAiq21kBSU9t256Lbz2hsLMGlBXAYQDsbdTSfIb/Yk2p2gqM1VAwKq7TwGGyiHhECtRIgbunrdmktBve+g8+xj3uWzeaycv9xHD4vGv4rj4WQqHmkMbMENrgDuW/q1k+01nWQ+jL2Lo2RvSn4JRgrqECltU/1WG/sEQLHwejxDg0H2gCz5Hm4DdAOticqzoQEFHLHDywq9Pb+hcz7GVFzwMK64TEEsC4TXkOBfH9UqkuUv5tVLQ6ttdYM2/y7PZUr6Z1lfQKHxFwODEPrl4rtW828KPI7J1km0aeiBHHUvjxP2Ss9DhBF8cXklawbdUEY7EPmEfHH8QOYwwT4fa6XRmeDNyLQO83FCxGhBXCA4mkqp3TZqpC6f1x6ppdXDB3CGbZjVuzYEd47a6/YgpG7LhFg4ROpDLAMx4k6GF5hNUPLJ7aiEzRs7kuTJhX31JgrfS3vqzMhgXzo1ZNBEd/8MA16s4MpFFNm6TBHvN0BA+NyUjKsz+TTZsu56qudy2tGLDsRgeJ3L6HrH2bfpZ73cPZAEQEJmD1i3CkJsEjgBzI9PB/JrqZjbogzjgVj7W4FxRqqm/+8YX1my5JhXxQZN1HDdgJoJRQbitsoebCv7Ru4rfUSe6q72uCpaMA6Zlio4PQVq5QCrmLXgCVRVMaLdN8TmYga9oB6Djcv3XGGlkVLJn8/esyLnazGjuFtPl4PKByh3JyibXd21cXMhgpzscG9kix92h3e3mAtlmXADhqu020IQGBfvzMgEZ2yb6Q5ISXqSjM+S1c903HVVLMKIcOTtgRb61ASZZ1k9SuDNY44f9U7PwXVFU0atYpfLl3Pz5xtuUEj31tj1k/pNl8VyNajKBP91B89uAtfMnFHnlHhlEwRkrpJtAffRGQlIy84nKmjt2mYNeDJQ6zQKz4ivms6JaHXFI0VH/IX+JXWuErMGJkmbYhLgdMflTuBlCIH/nIbDP2hKhA+xLr';const _IH='e1a47572e02accef36e82fee45615728713169be71f479d3b8e7d68d7d62d835';let _src;

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
