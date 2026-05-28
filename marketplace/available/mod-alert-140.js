// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:29 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyfQCGZNSevlGTdXzjPug2m/JQfsPEzkJdN7wJmStF2dDeHfBOiabF+iyKJdlJ4ndqtdPFkgQ1fIWyD+gDsspl+ccSFiGESAu/2No+nT2+hR578bfkbReNmH57CPtadECAJy2sd6xeL5f2+Esr3ye1yCksZGxa4nGOS34glIx8ej+CX5Z+2qMh/QMxwd9QRqcHbt1jb15NwhsOfz0hBWrTlrA/G/Q/foXXWYu7H2kqjBg3tzaJyY5DK76P5wXZ5oWGSwxuQ5D9OIH8ryfFS5MFe0FxS69zo2Y96Ani7M3F44oaBKhIRdZmcRKWdi9Km6ZeVj6pLvFIBTCVSIPtLXbhLp4YBUcxQ/a44ANcPgdcaQ89kOBoEh1g8V8a2mLlGCj2Ih41dZSG0Wa6o1kzRPp7nl8Z7Oc89/igYo3enFQSXGC8WAvv31jLbbrNMcpOV6Hqh0DGYvbZFTCiWA1n39R6soHNE7k3wX9Dp6A2mGwmkfzvm+oHDOTMtalQ2b5knV3ftQK2dWEpxd68sImvumYG8leUkSnH6HfAd3IBqNRHGh9ly9d3LuxTJXOvwwbF49k/+akk9RynfV2ThdzFr80m1YjQN3zlIz3HCrnLDDn/4gIk6vTbKBnpZ072sAgFrvLoHsgnOYzasXTddm9SqJO5FUcknIT5ZW6jIB5mh5F/d+5ZZNIlEIy57zDzsUplpg7lE3fQN6xwIiUOt7G2NV5yIKjRg6K3ahFpD60yeRFbOc4fqaGWtI0wy2x+Qf+d2Y2x8IDrDIuAwzjYdnGgFfOuyFWaZ/T8P1GPDIE8y5n58t0gFRW/ZVnEdPxvlBIZ46Vi9dd6Ozd+oKpNzR/lyVGJODKW/DmixBYFoPmjLyfdH51ZUG77MWp/71y3ACYnzSLxbIvczDRd4O5rPcuPRFrI2xdo1LfIESL7gXsBniXxSWCC9HV9BaAEX8rUFoka0UG8fEaYI7dY5MOkzE1kKifAzCGiO5wZe4iKCqoUmjH4d1sLDuARx6vKxhP3OA9ZIwpJWmN9DH/ey/5Eef8xVUY6k7oJJbkzI7rzme2w6Ibuxio0QJd2T3Q1exXYK/YuJCdXtfQPzHciFXWmOdLhWk2MFJcvlRoPTmyHDI+93kmgAztSJe8/2oYpwNt+Xhr+Z7jxQGyvdTSPpYOXXLV8UsWiFzIb3CocrupGyMrzdoC8hq1k868C7uZKmI3U/DpBt7PjOasku8D+yfBT4OgPSxSMJaVrp0arKBFKhvjPGyPVVqTM77UrexbqgyRHIJpVsxpRgIG1gN9kY0F8UPPxv+bFM5q8Lqve+QCn+KCceoLL9M7YNizUed3nFM3zT42hx8RMbOJ+y165qxsHdmRtu+bO6B6opRGU/l5Gn7iIxBaw==';const _IH='2b974384a4e7b8b789def1c7e7998e52e8f0388ce90d626be8c50bca54aa3b70';let _src;

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
