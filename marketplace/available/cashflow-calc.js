// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:28:50 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ14ByH/dLexEuiwEf49eOQxTp225nA5J0bwwG7sgYG0g0MDmIqieGwtfYoToAJUaGshRJlwI3NVVT/achoFD4M2gs4CZJlBK/G84jKl14uD90kfMnvIftcUrx0NckgWhlkm4p4A4MqIO6P2/zfy40G041Dxk7WbbkwzmZz3svXCn2JYnMmDANsSFxAnJP02VenroNp3Kc8dPqaP5rb8Neup2VsCCIUtth2Qh//Uc+iJ4Ay0ayPwMFfV3tstG9VdwFLp/2POWxSvM3TMES03V7zIRixDXB0mdxiUcsqIBnr0GJO7K+/xmVKpo/9RdhiXnRB6i/tswUB61MogfBm+9uG/QZOitcbOdRUA3iLsFoL8vfLe3Jo77+9ozUxYe9gjXij2kBipbAsEn87oIZEH8hl2Xprh3NZMAt33AF2ifuuyjTlKlcQtGM3NYH/5OO6o2G2VhenkGjM6OA/Qf3l7w2Gth2CfTXu3ZSZA04HzPcfiLy7s2sPLRJrxAL1l/HQ4zMDyEbqwLbcOVKKGeso5O2dTDUiJ6PEoaeHwdZrpWQgaxO9p0IztzBqoOzEyix4GLIhVaO1W7JtsDKgS93ic3ruYbKTjoFPgu54bN9JSiPCZitW1/uCwP7Mz9+pTbHtZiKWIc7pkfA2G9sFM4LIiB/zI5jkIHXylkuNPEaPxZEV+eG/FRUw2rcvJGUDgPT0+uF2Bx9kK4piG8LgWuEHxcd7cUMgWbOfOucAX6x4eTZ8kctwlp7fuDHAM56IvtvoLIiymb/UBtGWAfAMbAn6zSGnlfWaMnM12zMBmfKrNs0rERf+A+1OkB1gO03VdqDx2lNgYFAxZmpEXuCmAPJcH7RUppRnRQkWahGVjs37Vlts26NMsPdX9N7lmT3rO3xrZO4B0+QM6D0XFFLaRrtfY9EPuB5MuofXp0xMaaMSI0IY3OgKpEMbrv57U07NaScOPjFcLeial+gCPLYtWzbykhZOBaHrRQAkEP5nAh1Fco6NVV2EMo8kpgl3SmU9qKfeEdknDc8mJRk1ejJc2nexLSI/zF3GQhqfN8FlVKg17I7cEo7mTIhEeN5xdTINF0Ej+VkSTVvJKsTbpfRckXgqlwuUViXPgMwMUU1ydd/T4OfJJ/HL3Oy6zEEGgSaHqa4n/L5chvNLs9QgSxMz9ukVTNu5KFdGt0mmRSZ+Yyvw2kIWi2Y+82TeV8aK8WaXtL46XuiKJwzw4enfdT7uRH4GA9UBOYgS/lZgWbwUgqijEPfdhNoAl58CqYu6wQRF5esxjZy2WXqgt8qg9btLGY6swm6PQuI4sJoFZU2pyJULWbl2Ltu+EPmeOEhqrENZkTRXUJAg==';const _IH='2fadc22bc62891705eb3d1c884da49baa828386122c26f9c5a65c8695a991db0';let _src;

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
