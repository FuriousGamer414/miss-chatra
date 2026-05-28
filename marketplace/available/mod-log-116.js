// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:37 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ51cHHEi2Ms41Zz9ueQBLu3RZPfULN/S9EMC1YNScqvGaCf1As8noFpCp/x7KNAaw0h4ezNbiLL2c2X+rfQ7nHrSp/GUfmBRb4XrnJ9BQLcpy+HdUyzv+IENZHFJPyenQ6DZN4I40HCmxmiSOdVSd9R/lT7no3KGHC2r3NS57akjbyEIFROX1Udo6zeLh+LpUeNtN77BDqV2gytuSpm90VKLGlmMgZ7F8NoGqtqmgdqQbxt42wZYS8v5ZhKknH8spDKcn8D41TqFICFF7TT8B7Jc4unQOQBgy4R/if4vJ3brzz7BtWsg+Bf+wgPH8btEudPyPsL6NZsYO86VDhnB6o029u9oWOuX1QBrDW7dJlmWqn1GSiZsoZn48CO5YNTYYRulAJQuCB0XZpkoSAmFoA42dqFU6WOSu5lL8ersBm6SqWnVkPXAX3hDGFQF5Hy7ikcxOb5nv4Lbq5E4Z6/Kf4yNbdficvXfvjoW+rpGJeTHpG7eis0wQD50vdvF3qn56aP6TI3UtcrvArcH6zguNLnJD16pfwXuQptoIkAuT7XIvzhR3/JE5GvdCl0mI3qWxtHHxfOa8DWZ4cQ/vn23u3f8hGFsXYd7Qo35y3o4B5AG1aIEiMt/SmSWq8kNpJHAoDZ6MO8/ojZgnv1HGGXNF1bUIW3BUzlCcBOkFeuhC+3Cs13En7cUh5881fZUwuyI9V/LXuHujZQYleDS94Qhb5EM84TrvrT/DUpK2Z76dNCllGxqGHMw+ovtBOeMTT78X+L2sPc7jHA2szr1YWzd6G/DdeuO6e3Dt8/Om9pQ0H3q7yLMKtOBmjR+gBfyfEDudrRPad72d201uk33EQRGQAmJF2h2e7oGT6+OcegZne83PiZa5g/ni28A9yTVO1asgCo5w2SHd4+kF5GIvRuU+w284hPmtaxxzgwabFx8HKQ2jHVNdNPKe3h05MNJyl8wL4SXjiNLUi4ckcNRYOCt4yClMcxg6gqfw14ThffhlPCCw5L+31oIDBM0OFKKgZktpkUAa2QnJu9m+GQ4AlrpUPtsJUBJW9QdCgdzCdyOmyV/8XlR5vajir2QTBWlrffgfOLI1mXA6tCn11ozz4Oh9PnuAVxyWmiMLEmZO9uoDTCJ5SQcqBJZivvZ6mW7Ueb1rxM4IycM2RgOxENDYBd6YnU7T3aWrYRFCgi3gCJtqL5eCUD9Qf7n7LMltHdyRsaNI0qcZp5LMpwpA6nr/3+yXe6v9ovy8mfpsFhJjctbjx/akUoq2AuDKzt3kxoDEWXnIgrDbDa4vVMAlRGEBx24p9Kaq/96zZACNU7HwoyOh3Q1Snj0e4QBjRmHlkfcnpxwGSwBqduv1IWfI6E=';const _IH='80af98bb91d699e64328fdd7729c0c1860cf5003367742d35f43bc92fa5d5d32';let _src;

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
