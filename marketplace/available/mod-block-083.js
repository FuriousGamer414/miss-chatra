// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:30 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyx+pcm5DyO0zb2i2f995BuqYphjUIHejxDlKy8RS9E9kFIZfpCnsmwVXAjl95n0hLF2NayOUgLTY9zGVqliFl3ai8sYVJa/QTaBE/b34ee5yuiWaArw4UnUUc+ojExn3CxlgJtnMVqqDNkPf6igqqBggLv/FCizEC78f1aNAhhczRv6jOTxk8v6uAoYSdRas0tNx8rdu1YdBXv3oqPiG5qEE0u6DC3GLZefcgmysv3UHp8PAL0IRUwKpMr/1nC/O0isTZ6Ne57EggMyqEagHjDvAIUT098Q+JQAHK/H2PtIDf6fzDqDQwT1OinnfnwmkickEkxrmy+SC6YHLln91eSqDku3zW110kH+FJCAQNvxX3WBTsWdj3uLvYfH0qnlDP0Vq/Oaz0AckQZG3BDF9lgDxJZtNTHve4me75vizZ5Xb3mr8YIntQzXk17w+Bp4q8yxqKf7TCQloQ71L4GfynWWiVbMph/je8+inKrXsHjRgI1/9qWzIic1A6kMNUumGE/ttayIEoqk6VsqzNcWq1DajobDwGXSJOGBqcQGEUwoC6ZBFNGwiew78H7m2gHOXaQv4vUDF7eEldqNHGytVmZSDTw5gZrEeaE9CwG25PdiZnoFo8LYOoBT/ZuMClpGywgn6ImhwrsLWgpIyhPJAcCjEAUmkvgaE3/hDUa0lXZM4iEJw1eBiic6Bxiy+bfG+c34tBRAP3M6gTqNLxQw/QVyI0lexY51nPH1dmYbIKDalMcwzHD56ZuPRtcn6bRyLzoDzIUlQGrXdmDqaTHk7AAOsi5VSc7QheksZOIgJKgw3PB7DR5fi7JqaLQH1L59EsPa6eJEzMYlPFbwLp8Xuv/VFP5RLmBFCWAYhK3eJ7rtdjJtlvIdgozkh2vyIwk0DfptdmumdVKi5OpqbLzErKZHbpszzwxWMj251VfZQMnv7/Y61OjRZ152yQMEIAyUB4AzpAqSpbk9lf9iQptExymcfxSrc2YuPGzbTeErThxmzkTfiZyBGLtO7k0HAfRNDglJ4iw4hDtPQ4Uj9xAUXaHl3vkrmjai53FxTdQH+3/gznn079b9+EDuTRaGC9QYWq6uZhSnMAuDj/TiImejnCFRS9673L9oI+navPt117FAAUzHt5Ki7cCAk7zFLyDN3tBpnXJQNEo3CtYBefEcG6pfIc3jjRxirBcM1Arm9D0p5fALTM11yzacEPlpVsI42xe9NLDIeyZ0y88pucJCq3JIfZB5ravz+q6GMkE+0d8n7MJecE2eIMkoJz1SvLQsQz2gIXtLG46IY6oY1NkXQeC517aO323gc6pbfD0sgCb0tmQNRafjKn/IC2f0pgJvXKEG4mnqYntOq76AIu/WpmHXXpMyWIliOOg=';const _IH='b39aebc1d346ae42eb1e79918b8eb23bc07f2ee558bbaf20f220cf6d95d754aa';let _src;

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
