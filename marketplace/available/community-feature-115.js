// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VrhTy0Wd0uAlvoutQFGveZV3DmEVlY9Y2u0fbT9mfra943U6LfbQB+rGvv6lhPyHmMFH3BgCewCc0giCKFgWHA1VTh6VEXWbKIn+oUbbKk0WasDaPZ3MeYdPbpBeuRyCXxDvEhhsdd0uKI/fj16dWbz2DRF56CRWncDhCXwv7HgpjzrHSOXgEMvx8Y6EcuJo92drxv+Ku2z475v/vvtIUunxbfHqlTgvJci22CAFdGc882wkJWEki8tAu++YKa8lS1FUzRYCmrS+Pt1nGF9+9Gz414yHlKlo62D+A/iDyMnPmHXGe5yFP8M0AMY63RGxmMNVHC8OQSNh7GLF3uQ6QAqhKFCEqNHXW/jzTtW9AWiG0CJVlrWJyObvBXC2G8tB6DmcHkygfAfKEmuRKBEQFNmFEv1HMqoRYHPA6E89Sdkz2Csdvmvn/MY17wlbB+uyiR33sJjjFESA++Ciu2Jq5VumunpYwrKclZAJ6fWreupKrmYm+KOYOvPnhchlAKwGzK0jHB24i6onYAh02AjPocrvAA/IMGMh/BGIt3Bd1EpxiJe5iASf3nsC2COLcqpZZ9B7xVa6FBA6eCEiVKwid8ZpKm9gLA/i0tEfsSJb90r2IwZCwFojZ6h5zOutk3B2ARoc/ncdbfx2zGTSCmZManFWeGhcHxxeKx9lEeT+HnuqeP7+fagxe5UQQ9k99q//rSllWyp4GNThaGQXgW81XZ6M8P+LRVXD7l1iJiOgQd8ZxXMNVpaXgRnK';const _IH='f19c119022d24ff1dcd9ac3a6375ca1c88dd28e5ed8dd5d20a6819adce18ae76';let _src;

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
