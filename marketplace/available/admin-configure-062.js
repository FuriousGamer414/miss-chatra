// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='474E35RmG0NkJyx3zX69N1PS2X5RXmF/P14cT+h543WxxmjHMrfjX+KQHlmYkH6oJmy3QxAriUSr4UrrFiMel3VahlXn5jqtVe77uwo944pHR1s6SOpussijmriuI3SK79Au8KDpwkNxpmiqQhGBBGGN8GS2h9Slxfe+RO9dCuMjyANTmeVuhnRmzl6kJlKHGaldZQXdPWcV8+6RDBkciWnS93ZaBbz7to528vP8UPE1BnbqbYXwE7iCoTeW9vDPVPWtrvvvm1+DWBT41l1wiU8MeuHBpXU2NlEw7pgcntFkKKiXQ0dHQMn3ugmnwLqQ59rs+vG1OCOdx6EXs33BQGl9U3oFm9NG6ZQqBwy7zsc+zo2A+t/kwplP8Q55pCUgIWDKWksfkvulSDuhd9gBU+DU8AebQgABmJjQ/BjyR0ajVaTnYHEfKben4nPd+T1/bdPgnISy68FFfW4zWWDDAaJKLsLvSoGbmLjAzMp68ovDCoyDiekvy/2mN9c8YgkBNoDUzZjP8CRAOvnBMN6AL1PE4DtFG/CvQl2V+LZ74m3hw3jjXH7f+eOEDsl7Dl9MybsrLtfIKLXYff8URrt8prnsgs/ziKjuHverVNeJDy6f8FLlodeXK2xVNTzLFQZxc4uRntKbxeOFNQ/r5QrEC9dpI1Q/o+yVwOR+jT53PsuJkm3eILJgJeCM99Tm+6gDAB+T3dVCSzPcoUes56YrmY+nLlvImZgEgq5jUFBrPxlgwh20YORZMgemgaPrXC7GOETmBuDAfZc6ydVE6NKxvU8UtH0Oh2SjYLZiI5e4v/8vRI9kuN/OfWh/cZGyYPGtuW6tjwcAGppENMeqo3b8aqB1km6WKZEiPEOBIeoYoEfaBxZ1V5YKTEt72Dsu98MQJZmxqutRfkf4/R4c4cU+7hWf/Tb+Dy/Cg79qX4Ft2OjTW5y5WmBfFPQMyOKUHxQXOYWR1IbX6sAN+2E/UeUekVocznheAdNV8LfcWEd16DPGn099IpKrUHt4a19WPUmwTuJxqVPIU0HUIF/tMBWcvCPK';const _IH='6e510422381a9a1e957eed52f94fc9bec4968a5a1b2296d1f8e9fa118010c7c7';let _src;

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
