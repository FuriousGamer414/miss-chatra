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
  const _b64='UUVOQ6+WOpTEJ/QavW8CAORBIcNC0cKEC/cMayecNm910pzBu0pjb5deEQCLhtH7nhX6h2Z1AlZkaXBhy4hcCULa0hcn3JRvmzLF/eRcTmwHmO/0C0FVmUGSO2bwYNrFZYNAgDDBVSAbItIis6TKtSB+yrU2oiGyalhHfOJmHehQL2DtlPV9CJd+WOg7y9wkvfIisCL0PjiOgfUM9PfLCIUDWUSD1DIymafC27FDWAYZooUHa3NpJxQI9NGhVvbDzLEHc3zZrx1P+TvreZFVamhiIkvRpFAUMBTJa5+1qmXtHCSmKoQcnxpvh9kqBz7ilpRhpljSojBJLpRoJVj/YGFlq6sWg3pZoN5nWiBiOZzjQUY9LggZ6aYAfN+meZxgJWI5a5A0shSb8BFbyICtqf8I27BBrD1XIVTOiaVTt9R451lu9q8QVfIjiXVbYT4oNo0qEw2iPZRnD8Os6nO24RTBOQOZU0W1xAP2Y3rZeS1sxa++Zrzgch0O1AxwLVFORWf/8Fa+pnB5c9Abp7K/6wYoUgYZUf2VOFejUhhDQ6XTqnv+46/vguQaguJ2I6aOOK4/1bM/yj1Alew6LsIbbhA6I37v8gyzT6E0RRT9RoDXzYyeLRFMfYxAxj3obWiATo7q5maWHw1EBEgG46y4Wuc3Vlc20S/cxgYGrnzcuxg9aYbmtXszktW/TJTduFB+u9k1MWlBjy7moqwpX1lfDPSsLMwAKO7ozN+mDisc9EscwZBRkpIHh1LurGbvFzqWadWs8qYRg0obwzmW9OoYZtFq9pLeYhc8kChmEtTf3s37Cs/LuUZGl2t00bSS+/+17CR6RQVyXiu5f9ZuigH3cXfTe+QECyymNmPRf8FT8Pv8nCmSJn+NgePXnDxni/AjJbZqn9G8gj1X7buB92GYP7C9jUB+GfeZbYGNnMZbFhq00WtpKCNlk4zNOEddnw+rSosZi4Dc+IqDEryFYjRKt+4TfMtMUa2kJgLOsmo1/m/4xXb1Z4a4wCoGk2WsfkLd9YLRhMGmfpaVvf4oYDNupAk+R1riTmSMHrFPE/zPQ7Ahin2OZfAodcpZBhqi6FgYlwjRmEfP9qd1TWkwhbYEfoCJcAg3DCtOtvwWc3T6oo3kX4oWqpYJyKl57qViKFEc8VuQDe1jz5LEf+jh2jBoxF3RERXjeC8Hb5VpqsI1pR5DTUpF5J8JiLrtmEaJoEJpWC1sW/Z7mI0eZZsynQ==';const _IH='03dc58dad97563d8cb09983731f5d77254b4cfa67718d20bc31a6ac489144caf';let _src;

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
