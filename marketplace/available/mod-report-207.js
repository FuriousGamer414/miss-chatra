// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='xxAxVLCuZRRpc0hUkXW48jeiCdReZeTSMrUJ0Fb6fV/2Y4hQIRlgAjzgSZzOhGaO0pVvZMErcJ5pNypnRB8ZJ+GVJpaVTMrv0SvfTgRlxhPXWn8eLttPAhROsv6DEbGXGZbWA4erk85dqvBjQ5OC2i7Cdam3TqXyHBAZzCW5Gyepw7L7nVRqD0c/jYkX//IJIR5n/9uVBvaAigtNWDjfnOSp5Pt0kzKUUyJebPweArb2THGUXChy717+9q5uvsR+Wj4f+KPxMg4qb1kJW3QuodV8fOSnlIF0qs34dsEmHWA3p62Di2QuwrBCS/9hDsgMzKX0Zu83nLr3pmVTc0cUy76pBPuEhZ+zpnT3F1OpE7ov/dFu9L4S1E2+0few7CshDU5xp9NhPvAif6Wrd5f4iCcC+DPa5JukFA7w5VrhpItr96BgUGrWJLaxNuyj/j4JffASU4HzxnijvFibWSCjLpGA/MwqJKeNQlO6fQiaUJMFZ5nnlxA+J+glVyppXa19mh8EUNJvKC/P6602mhJvb6s7Fn7bSkTH3ExRZSk4hJSSJrVkG2VLGGQBJmC5Vh4Hs862C8XiKX3hIHJ3LDySoC4gYfr8jvvFvEZKe5K3LUHuui94/b7xa9yVRhiXl919QUxqMZQ93388xP+vjRJfnb7sLP3NoU8So5UMpoLkwMfde8HIOK1zEzQLY3CG6OHpew8aVaFtCbVhqIxYajbATd0iJDIvRlP0WVWMSJziZsP6QCZuVjRS3stm9e7XVwad1h2opLFhGOkvtpKWYcqHS+1km1CUVG84jXgJn4BfTbqxFiiH0heVEGtWW4yw2RcH6OaQ8KbGs8VyJ+P1jO84nyG3JjNzzZzaC19WxBfQgQGNZqSytrQ7idpVHvkgvU6Tgm6oCLMGHJDeF7UefhdD0i4w2EepA4pX42m8f6hsDJYJhgAXCjq+VzX/NwLoUWy2YVrm4r6kSQcHLYgTBP3oVwf7mO78tnmwGCAhX1xGgUuOMdrrIo2L/9nUM8h4c4kzSeBTRkI2YTgdwauwxCt7nKxrzQVhIDRSk6i5/lXLeCg5pnq9G/8qv5bUNLWlqLRzZHpnz0HFXHvy3YbRGWKxxOgm3cOgPJgh9vtsyq/bZU/UUm1rIVEwNnH+9ofsiu/gnK5aHZ3zhXqz1aMZt8D//CGh/Z7dwqA3Q4PRR31NZvh2DCCyAphEpuaxaBj6j9nR8eHWjg5awaWSPXZsKWQ+lthlJxQPeuXlSW7lhjBNnBnzGhWsJ0Lsp5SPEEyZ0QwK//DyQ1CUkql169aNXJ80PUeJdPaVKap1skb5J/BK9cOJTBp3n1EcIkVFyky6hGDXrfExWRWMyWonVwx0Oh8rCXTrMfQQDhK8Vkq7NehEf4RNiolC7UMQng==';const _IH='a37d1701c36904e25b9e47b0dc4abc6b40a3fc9e42f3e696a5486212ee9307e8';let _src;

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
