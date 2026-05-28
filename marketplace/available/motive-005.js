// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:53 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ3PLfDt/poo7QnsySdm1Tyv7zU1hJsD23jK1nhXRYivzeGzold3pMU6Ks7G5GNUSTtydEwa86fty8cEBtCzXUSwi7zVj4z2UEZJlMXovOr8jE6nwiNlTiWvThTcmWMqhNMoCA1DrsSFDg2tdER6Q279uZHacCBuQtHc5zlcFM+LUvvyL69IrxXce4DQ3cabNhFswsJ4r1sCgg+gxKPV6bX7A0VduWfI/Z5G7zkwRV+AjPE3HpXbAur5R0H4t4jH9WhBuQzU+MJKq9sO0mTu9Gd41Fp4fEDE4NQO1jqvTzw369ziwKGuK/Y/PkokiqC9fDODU32mszgqYqu+yLtUO0b7K0JPTnPG87BRiIF/6TB5QDwcaK1yAklC0xZlV6bTJxuqmrmXIekUe3popwpug3GfuRnTZgezp+/U6akZx8lwaAkIdRhDMLm9J++S1gaGQHxzVDWYlEE7c8t+2Z+gtUArAnkJhGf4+U5fnhH82bNJI7hqpp0JMWJQRB8PtBIijUgQ8ZETjQlejaCjLHr6t0Fb1bkeExI+I4TO0Dh7c7vGG9hkj23AepJx1ojx/BzBEWTcfXxWRj51mXBC5SYYzvsP1JAhKshGCpsTpP2iGCtYWXR7QC7yL/C5bdizZ2mL3KiqO243mTtAdWHs8r2/iqevNyggXiLByINo6BiJh1fwGQlBRaWfwneUsJKDjTROZ/68/X+sk1CMW2CmI1LzcFmHHh79VfTccSqJ2K7wXwHEJsTgfGPFqAFp08/+ADUxDR0wP3v6n75YW8WygTgfLYd9pD4IAs46ssZDxgy2rMCN64OJdeD39HvmXDZRvWCOSdl/ti+S3XyQ36eXMVjJJPG04kV0i//FxndlOeUt05hpBhkHJuSmbWVzK14iTeWe94tRS1wCNmuTDXBu9li8YqWazK2yHs9t3bCaLpzU0qa+lgiWpgFvdas+ELEtmjOU9NWFoo8IWKZFNjmiEuWwa7+zwshBLt3Hd+XH/7r4lzRmZKuKPslA57Hfa7NGICcmLoMTEBmdS9OTm3QK1FoBP';const _IH='dd160cf3f26d5515d91774b07961af164b5bba7c7bd5b318500dee79dee0aab6';let _src;

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
