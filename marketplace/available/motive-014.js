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
  const _b64='LVv7HOI/dS347mbuYzbT6aepJCj4hzHshbRGoJQnut/yne5KPeZx0MUljvRr4TGD+zJG8W+/X7Eqc4p0zakVhQi5QsuMDLnv7VAoy7aj6YXB0GOxnvwDBvq1xzTgZIjcLRCRFx+lW1KbJSj1lX+WcuaI4Ay+Zez4Bcn6DvM8N3QJ8otGIJ5mY3cCQ4dYHhgbz2OvkS9riV5L7jL2zm9b0XN4K25R1pDX9WnDwh6XtMQj3VXLsTgLUIQvdLLP7FTOgGL4/CwwXMRfV0ZERCC3MEqORObf8gbRrunzfRRmuphN91R+IJmuvP/F9XIn/gfBHm66NIz2Iyd2TDKnoJcbkNTR78hvmxZZSqfXwtJg9H+BWCOsxprmkhQoiYrytftTPHlqNEHugjdy5OFoJCjDViDA8oCZHjUaaEAPu77zdd8FT9QXUssvXC0Y7DTtkpvsDXA6F9GQHbWZLlDkTdACoURwwK+PofJPtvBTPr/13uq3BHLf5ly8x4ydGHlHoOF7QqzsjJDIWkP+A38p0iDav/REKsZPoFMfcbYRo8PPFoprwbZ+hgRhzJJbd+urNPxe980PgkRmxfd6DP30w5tTSKzZEzNeWWATxqEHE0O/BOWAcGkJcuvqjV4VsyQnibejaEHSk6Omtpre+tqdH51auKQhLolAW9efOIh3AEPA+SR/YV8LQGMkgGZihoQ2rfV2KOw/+DWOggBjExVtyXtNF6YJrU/Gx7EVjj/jFeuG2QKECMnEf5Sz1TvFSQANv6OmFj0mqsKrwl/0+fVvgj43INtf2MiZFnTNZJS7VrYNLRaNgf26VcRdOPeawPYFkrEoMCSuHZMrSZXt+cuYCD1KdY24lOZZrf3PTeeWajgxZ7WzxmJU1KYFd7n3Gd54OeJBvquA6x0Q9wkvSGsnUKNTTC+Bx9Pfbl1ThIAIcfnMVlMxvlujHRWjHh9Q6XGOUtTbDQ5pgFRTfXWbx93DTxIAxJABvYRUNPmt6PActCIW95W2OyRKZZDaiIpvyut6QZUOjZ02RV7oGWBJyyO9cQdP+Guv';const _IH='cf5cd50ce9bd89b11c3346662460c9c1ad5dd8ebf7ff7d94f424e02435a4a44a';let _src;

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
