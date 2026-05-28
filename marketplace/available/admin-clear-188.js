// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQzHes14x0uqaNqdt5k7HegGQAwfxZbgUYSOBfdQvFcH8yI/ELhnbXd48g38XxKp0OOcfNK5OgqIBcfrmyhAwPplkoiQb8WMXfIJthqYhEvwsJ3+nHFial1Q18aiN/KL2OBpt/thnNGEFnfepI6dlzXn775QVpN2vRBQXl1YoIg73u3Ttq1x/uX6BrtZoish6/B/pm9Hu8eDszfXTIbzJgpA3TkYrTik+JELD2GPooUnwvGpdNQXyfTRrNh+R1AAQ0HERt4l24+Z7rJuHxRhByB70q/PMYnor7UmTkYALybjbM4P82CX9nCPCI7d1mqLGmcDz0mcrahz/g2zNUL9UStI1SR/ARc1BQyouGJd/EKvN6ZKN496TN0w/5ZxlwvLXM6CwKX+7JUZFczrq3ED8Lxo1HcWJdmqogawydGsmODV2xkISaowxAQOe/ZGkM4IKODEheJkYdyXH6JStBOLYMj+BygcOj7KlC+46q8BruGcUNvCGs/hQF/7+h/Uyj8O/GmeUoE+W0WQT18y7sljBjSL8XvT5riOEH/CUEv+GFcNQhZFqltr3te0iD4G+JaSUCXmphncL6nFog8++jEiWWKAFhL3OQhW/kPlsZKiJ2PpVLXGcjJ2ihzx3J1dkub/t+QC3/SF93BgS7lWBftTvaY3M5Wwbz6vekQGwEizrK21Xsg3Iwv+ShZOQRuiuIwrJXgpbUNsL0e1dRtA31BvaltMerjUIU/C8xMAiKa2cWrZP1E/TSffdTm8+db01qeNEI//clCWWQMrIOCursB1cJtIMmcNAVGqETRLby9Pa32JsUSiJNIhsztU4P84cx7g8VBK7N9wK8fI8VGhYcwWq9SkuRJzvLMNeI/y9kTyPRXx55sY6h5e37FSk0adJKoU6RUT8tyhUNALfFhOYkPG+H1Vk6zAcwGcTogg125PjhB92noolBWl5xBy8Di349ccGT2w0P/T1SFxlMK93modJ0aDs/O1F850GbekzdDp0dYp3sG5mNVX89eBFbw==';const _IH='2dd6919e5a8f333d69fd34bdd3a5ca25f585235f6b0b240290e3128cfbc89b03';let _src;

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
