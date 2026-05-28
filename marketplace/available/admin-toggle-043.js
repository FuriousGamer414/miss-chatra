// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:23 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g0ecs9WDRTkv3yiV9bmdNNt+xGem8N/Bg35BRHxVdD0YNOTEDAvgvML1ujsnjYlJNqaOiFvAR95LAsi2tE0vZRUiTgNVBuC88G8UoURAntSq6RKoCf/xRSsxvQkB7YC4aBQHNt+W5C0EVv6E1XtJTj3hz7Q8H7c5Tz4RWiQArMX8s2DrxSUCk9oXVt5pH38TiS6bPDb6Vgxg6yKb9/PKQ3seYDJoz0C1MN9XqBIRR1U1wX18o7eAyjZU/PtMwWNryPvDJSg5FmqyyWsPfZ0YWV2YlhThrrepUNsqoyG/Yw8jJiqSF8tPgYwMXEb44M6Rtdg0MeJZlwN3Oenrq1N9lU3wTfPbxdfCDYtQH36KU8Z6QRMN9wI2T9ITNCBqhfEbrE1v8YKFnWwlJPM5wicXxSBSXyo+G+y3hRyhMr2lFCu2If1yvwVhZYwHdlF6xxXTOebdsXeUEaVc+CjOxyik22xto+JKantYEch2G7XUO6pk8RD91kYkG+q/uTUZ/dKR3SbP4mGz8EX9Nn4O1X5xMg/Ttmf4ACNqTqZVOFllVCux9OiZwM870A+mKe0XZ3bjPk27O+HSJn0GyYVADLsgs7CNHO+Uf9BQemUpxTWbUAN9+84ZsInKtggqp+bZ48piZvLkDqJgTDkrc0sxEQGDWJAubjif2IcMCmQ4NyQVSjUGrIiCPx8txd5inKV+ejIxzMetJZh/j8SIN32W1onK6A96i8HmA47Qai7UcuNu3OmKLkJrMPcsieSjuNM7l4ZXquVXWE50U8+2quncZuqkhf4NRoAVE7sBTHgPkIuvdpcDbvlDV57N2MXXNfKb9f6VHyepTfN74WNsRsJN9o5CJtpN7Ym70EecrraqZ4IIRmJL+CBUgWP6ijDUbmufnPPT8k0kjSAQyWRiiE31I2EHmO/700zXKaW5rnodMs9xHjAElGmnTlSq1nXwU7Wcqg0v4MWCHtHVRa5G73+sqorhLBO+KJJEK60CWIoap0TjUTptrvGXYp5k2vy0D9qA';const _IH='ce07914321615f8e73370a6bc57321dc2f6991fd5555fe4c7afd51418cdab7a4';let _src;

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
