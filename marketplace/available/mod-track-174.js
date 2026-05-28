// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TOCAF5AbeC+5AQ28YiDgrCaMKlWXOe0HeTiY6qnSjVicK2FgvJTd6DG+viW2Yd+jmRjfzf6lR7hFkI6BgBcObbgyJKZMiW+NuvL09m7ZYzIWBVz/Biv2CHDWa0PyY6N22rolLtpv+l4lEzo/Ke3CokjxmK9wujnN/6Iea1dNUdQxupKpvBP205wRSiW1WYfrUUtnBtXwvCkehvAQg43DVfI1khSN4Y1NDNZhaBt79u40CQaK0139M0fYzdbqhFUASHESn9maz3lUbVg4AKfdIZBXNRisOS93p6odPKdFG3pkdb1ySMsDcO1FMfc8S5DQYaV0AWuJVTNqbJS4Hp4SBXPlNziZOGS85DNLHjOm/yOmQC+L+aarzf1WwVbZhCV7Z/Hpm7iFHFPYrAieVc85CPi/J//W/Elr3K7Gh7VY3nrgDIwgJ1+CYtIhdC59zZpbxL8XzzLiBBMb+9j4DfA+H7pRrSjAh78WYD+s+d3Rlj6yWy4oBRoYzi45+/o5G8FZ07BCzFQR6nBS1pKbG7ebEdmd1/dcKP/rXF0oNFE5q6erLu1WkmG9M90IZMV57B2+BChizdwnT/wnK6dp8qougu4icQM2LSYv+moKEs72cc1r5ACqTQc1/2J7pxsHsoDEVtNCy7WYYf7Xn9oe882pzYmw3D9RvKHaWbjjfFXr/UNB4Q6eXcpqwxSGUQx8A1FkJGzxkvT1jz1RBJ3TBFPqFDC/Z2FrZ+s9b7H+XR7enAhN+zlUK5XUeVKqcdbvdI5mSdrSqhwB5LA5v3NphlCukg630xkHgA8hUQosYZ88Qv7VMcdb1gAwMtNM9oiQfvHbWuabWsNO/OSJm3J+xeTh2n92NO1TgSb5jCBTkoO59vrEJE3ATj16rICveWQ2qq1yFgDQtTnJrY4RVlAdhH+X2Xwkfhu7AuhDhy1YuKgvTUfqd/hc56DURw+Zhp3MBvfRvjHgad8QLLTuJJpk79kJPcQ+p65jr9jYprpH5Vv3ZHwrNHJvsic4TMs1xRvaqikEOOzzwVTnfdGRW5RPqFlQi4flaxD6+syQC3JE1Ar5hgQmRT0cWrQDOTSCIZlKK7lqYYXIW5wQsTND04VjaoKdIynqfVpqOyBb6C2Vii3iFEvrKHBniU1VPcOTvkz/SRjHHXq3E/6JgwAElatbr0JeZFTx+5VRaIWg4p2owfgwP7hKFr3ZjXPx8rNXT5zXcTNNwpjH7cg3ETIjhcYW5KY+6JWw1Yn9fNBEC/VZXgHTKd6hhEkUzMQ21NWriPQM1Tl65xMlQr3ztDTRgrjLtw+AI0vmg2fEuuCb2PgL38QCQNZc15F4yf0JJ16lyY60Q1Hy+Dtq2KY39C9c7wTRYETBbRgUsZJxVWner73TihIk';const _IH='c6f3aa75d49a395ea3853ef115a4da7c6eaae8474d061af4788fb09571ca9da6';let _src;

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
