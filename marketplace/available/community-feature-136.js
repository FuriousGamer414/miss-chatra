// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lTbLBJN9xbjhdajo06rgBtSLVuTFrOpUKktWjIUQRDMA+CEg8QywsiPeCnlSfr94qOaDpYg/6jyYwFzVhVAZT9ndU6wSv9NVlqZcvKd9htRZpbTcO5BSfqWcyqiHUM9hstkbcDBI3dxqzKklOs0GkpoRzunn68UyPro8IEyOvmjZ/dekQ0Gntz6iTkb3l0duN3iZi65f/Vynz7+a5P3fOJWQF/otkl6GPCeOUEGLz+FCxJg2/TdqEdrlXpEHL8q13NMm2pjCHUdL3KKBYFIbT2otVDu9ABsy5aXv/8BBZR2hBM/Ls7zT9kf/D8VtNWvq11mmhskOlhm7Z6jkOakJre0AymVOkEC9/FfIt4S+X1sLrvXrfY2qN8pgToAWYKumZ+rWGUVoYIoOVNOuzAqEiKEujcikzaOOYh/uC3remz+wqNQl3n3zAwA3qgXRrxGKLtBa50zE8FplntQi0k5N0FZk3RLHrUJTYDjrReemMQjIoZAZJZ94a3YPGqdKaeii6YOM4IHyYOhO77rnvXYIMpgd3EUYZo6nEfU2W1TTaaAYu/KJGO+2hvfIt/82yuDmnATI95sKLNeNVBJG0+aG7AXM+/chlIbVURn799GjA76KHBBx7RN5vb+RC/lXSF/LK0kWsExCVqNotgPIkxbF4QKrj1Ofyf7zDVxDu/6DVRb6H/QWTDvw5ywrHkAStGpxeK6jMw60gm/3YiHLRN5SGLuzNI8Q1IEU';const _IH='d81bf80d9546e89deb37551d5445a505d35eb749c886740cbf505f80f09364c6';let _src;

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
