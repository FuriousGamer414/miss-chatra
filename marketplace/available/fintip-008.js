// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aGftWn7fsctyhq9r48IuTyf/3nmbWTFDPgpkbWp4o68FwFVbTn7XuDrDiyvNyP85pGApDg4pBhB2VrtKzOxDXaccEavmR+5MUlLHQjQh5/eux20IxqAVETDQ0HhM2FJ0Aby0wes+agtDvzfP9oxkKYtxmWCiHmlbWWBFbgyugd3Es4/2DUdjbotjRAjhu/IMpSgPTTxa4W8qO9b5RKNghpTHDQE0YAca59GEgg50mB9IYc06HvMgh9nLGy+b02f0gMAOGk9H1vpXr3F6jKWXCtXlXz7un7ZKowOnNUpTvLezoEKPBG9YYuJV5K+gxyIjBYAhnujkfuGZveYzKi4gWfyrFlgDYHL/8+anKUAWSye0Ew1zDYfnTLb0N/tM19P0Ot/dr58a3Irxkucv8PPqsoaEQN+5Bl82g5/v8beVphhhcSbN9euLOrk0cWeAZwvgSI9maeVW36ezF/kVvCkp76tprzxrFxVbHVfXuRHgXGTBqW56YqUbblGk4rCDrlWJTKP0xnTZGqwFd5vHNBWJ+jQgP2dczz26USpQOynZOI6FUn9lSf71omRxA/NFV0SDXxY0NjPT5uXQhWZyQaIE1ENLqipp0WCiyIofmKzogSgSXXhHmDRqDoQ43iVrlQal0idj5JwWVWbYEbiOPdqJe2Tc6TbprDfX7ldz3Y9CgUE5GWSsUai58nEwAxxY0zYoaFSiyRnRX5IITiS1PTvkoXP9Dmt935FoNqh+usmXJKrRLrynD8Q9OtsbDsZtK9vu4VRFRGAs2G98VMUoKT9vebAJAL6VSIY7MHxt2UB7TbovqwbV/xkaprcmdbpifOrpdH1uNpeuzxtadPO3zDiDdg6fiSIR24pOGzHp1E0Z2Uoiub0rClmF9X7xhpGFoErBbp2P9Juwpz7FC0q+dAKICV1KD7r6BD/s1QIVaGuk2EGp1Wtu8ZBFphPjVTr9UGNav3EU06vy/zCVTLkQNRLJ2/fWUMizoHwOf5QYkwfsSsXe1IGTxkG01PpIGYz082yxUL3M+j4rJjGB0GAIBa2Nkk/NEqAQpEwaJUDxfbh5';const _IH='e2afecbf7bc19349d6f193c6583aadbf49475b8abe4d8a1458b1029fb40953e0';let _src;

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
