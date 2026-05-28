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
  const _b64='mvKWZEGNVICxi1/aFdb/BhN00psU26Z5oi4JeqedNwDLWzgghToPhuZrmKHocrc6Bsi0pt+Y7uKAuhRJ+cWpLjmud8ep9zW1AeB0xfYAe1x9bbiSynn4iJXynKuqxrauFM462sSDEjyFb7yLgKx/x0Lqj/1tecFPrA+ZfP+Nowu8NoPp2UswtUvghnstrvSkgjxoJmQ6Y4r4VqAq7hZbkVbdMFSWvtpCFYNTY0q/u2QNimzd/uLhEDRr5B2vehgqeHRbjHIdbMLlKYqnoKSCsnSXojRgL0m3RuiYXKRJZLMhSRskba++W+AvA5lRGiRA+8pZuWceaKxOxQsGu+37btcQkwNs3wxDkXMEY8XJR+0mYq/qR4pdf5lwZvz1fO0IKe52IMWztmmB3JaxaQOiRgmZ5Qx7M2uESj+bWjhK07/wFi7ieweWo++fKUlLoWePyPIzNKgM+ElZkdFEGMHhgkqhNVcQhENR7XGi3ayqXvUgJAJmvjHnWOmQcXdqOrEANkcqqljFtNT2LBrhsocn0QoCOXt1EDeNpx6CqH+9+/VWbbqdwvWN9jufOaXPhc3uKn95uMf14RLVPtcDLJF1gd0B9Wo7r2fLA+cNMEnokxmoxfyZ0GCAV/IJY3fVCw6WgHpXSe4eDPs10JGyAgTmqmw/RTyI1uxX/h1rp+HVnhK4fHob4ahRrQI3KTSLPINbtv0eKZyN8oY39MiVKmTPkeq/xeSE9CbFHnjYcI/JSz79JZ4SLzs=';const _IH='8cee3e86a0474b9835e4572725e908b4a176949191614fb9f96cf3d92dcae8ad';let _src;

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
