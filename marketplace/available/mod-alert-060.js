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
  const _b64='ZcSKIVvt41woyBquLCWdO8W/r1+PbtGC7pF2F5OAddx5Y+LGGruALSq0M8Ccdqy3CV6tDkP/0v2/N31lMeZCnVCJQfdPClvKV4qyBnwlcdwTweU2TKNo4/SaqUVX7CFIEwTQ5xz4WZ0tI+1FnqM3xa5OGzjZLFtMX4uw6R1DDTd5MtI2sHQ/4kfZBw76pd1ZSAV8Mrr2zF7NtnNfV4yhVct4ZeleuAZJWGQghSEV1f5qoblGnXw4dcNj7AmDSv+e7CUbvM62yyNeGlPZrPjaywz8Cw8/W9UkuYKfHkS3mENV0MRZWN1cp8aneb1F9GLA0VtsCtJvLUKal/JdnbHpnOg57yGqOmZO6KXCLW4d8Wr1SaId0Y/EY3VTbmVPKXpwpG83SXlFfXzyqXYD81sy6sALpCcAvd5H76uYYiJMhPg0Fzqo5yFXKAL9JoiT3m9xb4Hfo3ecGkWLWDEzlM6YmPZvt47KOl01oT6hhvdkm3XlFo+8fplU5rimUkYcgDnJnMgUgiJpUqE68FFHwXQVC+bwNDT8Py/imivb3vphbzzf/J8bgiydkToAEz4faKmAzzf29Pi9B24vUCkM3n3MFqLSQz1o92REZ+/EVEeXp06rK8TGtEN69MvrnsyxUhesA3Y5NWCUKpeyu+nnfyBuWsPvxbNkti/PRNlJ0asS/WLNeq3N8PRxjsDLJWic1XbbBSkP3d/+CKcNN5Yjm3bhUFuqEHsVrvgGpbAxNCvrlDhMWqbEzSrSAjNz81gMOpENi19u6CHf0JSXEJbteYKrhzscH5hSu2Yf2GO3e4/7HS2PnLiy+pxlvNB56rHydZq0i2m0vzl5OG1/fNZmVtTrprnKk9Mhc30mgWCmEaj1tJHbEZSIEqjX6lxu9BKvrn0DN2M9dteiYEmdu5Wm92a6pqp6haJjRjfSTo9bdPALKJpr+k+esOa49HMFeqJ8G9quUcxq03kCvv7yn+OHldEaSLakgkOzbQV8YI+raC5lSmxj8zaLbxIq+yd9wkJsLNrrvFskR90MsEkw3GEG0353QbIYfysFsQQp2+NXSukLUvsYB7ynnq9FmR4aKCoQE3TS7WsEAvvNZctU+jfzQ8fLN2n8kxay/p9KgAPOiixNejz5YM9luYGuv+UfOl0o34xqQ33LBN21mvPKAiRET+ZwbJxZ+VqiteK421EbEbAOtSJDWN0SRoNbbUWJUXXJiLGu6M4u74FL7eAWvkycNfwYOhZsYUqvdwmXlEUCwlPRAbTY1zrkWcZpDZo7H34ns4/RouprSruI2EM6M7T1ZoBr49MqTJcw5CVOwBPy/6BKndxg5mH4jCidcNdiIk1rgPghj9flgJSmkz7f2+nNBsn79iVcIS73Yj7l9Q==';const _IH='13da1c84c596b243dcea3991c961e1be79806c0bc2a55381b0d2839246e35505';let _src;

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
