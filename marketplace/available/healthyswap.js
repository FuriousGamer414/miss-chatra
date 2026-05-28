// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mQNsW7MVVAj6IpgZ2A5KAU/nhPVM+Ov0LuBgdMGyazbeoy69XqZT4mzZnQABBfnAqKrg0K88vo6yvWCfZp1NPMe0co8wNmQvp2Tmf3ailrG/NDO92gr9XpI0VBGi++eKOr4Behpz1nB8yvBs/ym0TE5J8jDfaLa7CelZJjZfOpL+YdVOuPcQYXM03ReSy6wFIbU4WnpOcecYqNzF/bwY/B9bAwVDJd0DcAwTMViKMNSNNtEzlpi4XOzkNPrAef2BTuFbS72P5GTH+MVkWyys4CAZaDtW7dA5YgZgXIk3mWIxy5ghRwrFJTon4WemKiRB8tb44FBRpcYibOpKntwsH/cjsBdT1S9/vIfY32dYdfWy9PA2MnCEe7kuuOSD9ajkm6u4IfGpV4jQBr77DT1qiL38dl5ua8ePuq1f+KtdqZ39RLQqHXPPX2v3zDDCqkbqmgRxqpQtBuFsi3br0VjSkLPT/x0Ucs/RrcK8f0u9MR8UNSsYH8nOZXsUAOuPMhydRvMI404m+hwFDXhdYoX2HBIvbVxkW3Hws3Snu2+D91Hh+EoFulflPIPX6vGSmIARw6+40s5SPQ2bJ2McznmW3iwgbNco6p2WqrQwzUBAbxwHdhHhoNnQnSZkHgYXibOdI4gqXj19bW6V7edBYEGKKM37kGg39+EhpPmrvGBl0IBl8H7WbU6vQ8kYyHLo/MqB53pw4DRPUJmWcqmyMpK3pBnK1tFBRVVsPORsiMBVl1UyfLfmWp6EjOdg165bCEnm14YNQz6WIlvnDHjQVDrCqIeTZeOC7G2eyspJGiwDYsJJg/rLiKBK4aqhhNMze8JZoijUL+NYcYhm/twMeIfELv3QkrkmI99uLuIzJ5fvHn4pP7VY60l780xOlSW17A2ZWlK/ZRtDu2BYIkeEAi8eRAeZNLV9z3/eEkXJUurEqYvQH00ZwbB4lLANq5nU5qk/KTeQGbtVq8QHUhvFJDmOV2SR5M4xzitR3dVvxLUMok2PW5b6J/SLROlVyHSUspHWcK6ZddU6D6hsJCECwAMWe1A3/t952y3pOH1tUB4WtAXUwv9Lq/c8W7tB68wMOfjzaOoBkc90e7Zwqu4C+Wd4/mwI7DQyd5ym/kSBqlIt3BhBohQKPxfgLDtgbtYPgY/adJa1Sv2KkhdmR5Hnm1L0XOPib1V3cI9y6PqMilnffDJC8thq1cfOb6QZ82+0PxVeNuVk';const _IH='662d1caeec2ac88ddf630de3e12c8c50056536ecdcf850d3e7b196975d33e569';let _src;

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
