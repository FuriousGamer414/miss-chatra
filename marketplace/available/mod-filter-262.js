// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 21:29:36 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+XOBLj/fSIqb7sNdhgBknZGW9VyEJutsOj05uQ8Udyell6vVSrHgnI5w43m5uVE8upJm5YVnKb//8G9aDCLkEStGczoUj16HpiB2aLW58yS9LCcTThB0DMyXWNgleoaZeGzguE3ye7Qc/DHoLTsNTrfnA3vo6lpm4L5WTc48mp9m4LrnKaPtEfoY0n2jEVA3oiqvSn6tn0Z4BF5JfMTMHORXxwUavVpoPMU+g8m1jEJZBtGHe90pJ//8A+dY2kcNB+SYTq9q/8W+OGXIW/xesTjVpxSmz06XLOVHA4VyneH+VQl3c8EJCrJH8FHXF1URwBCguFuWNDKOJTFI0UbfJlOBkq0nga7+LCliWe0GDUR1YBIg/M9X9/us4Em6eiasIP5tE+ZrHGyfehERfFsY99IK6nEnKN5vKQuz2jOg834vHUl00SnsYK2vjaaWTk31ESHLr9T9RDbZlmk9XRz/NafbrYkE35o1gS4IIcM9cuVx5duXc3YOnfurNfUwLaEKL7zXH+0CAbe742Lr6phOthns21iYIhibFOPGOw630QSs5qZkMUR558PQvxC8rd3REDzAWYGgnx1DC5MwrXaj1A0VX3vRqlxVfWyMblm2bJ5VQ7OhCxaEuY8JfOGNM07zVkcjyahFBYZTdoX2TMpXCrlzDXPsfbHhdzapeVxVEe6jM6EZvqdoIWt8xk4aglCxUCZoM6eB+ZpnsjnRgVLAsl9hQpheFWLOFfIiPw6OKjrJPbhKRlvHZ6cQ3Q9kZfHEapvuviVgT87glMEPXNDKsDhqOF3VprF6B8pVBs5WlR7DSUYppOJTJMpvfUyA8pdMBe386jaMMuC+u5/od/6rF6gPaBv6er7yG2rq/tcJG/OPabWpdMIwJBpYnKIYdRA25u2qC4hE+KZTHnqnkPjK+/0kaMjogj6rWMWKHQyQ8BmhZCO9cgqS9ki3jeAtVGOgTva753mNXF9/QRzZOYAAMEqyH0yg9JyS8eX3r0PB4a9SBwG0sIpu5UdODLXyPBrWpJhWZ9r60pfUchoDTektL6O2sGm9RoBFWc7gtpwVe7gDoy65WDXvmaknPmmM/RuCFpe73XiTxq9bYUnD4T7uy6sx1vV8Fx2mkxgu27M+SoHmkeI1txk+Q3ndcu3rQQDF99DWfJ46OnY5CKv+Z1h++Xv7s+IJNsc/x9v0tp1ZS8VRLAA6hspbBLKolRUCVZ01uj6BLX08j7WqdlCH9X16SoaNuMcbz6JQU0dhnfrEhA2Vm/E7kMLOIAtngHHWqCNwctfDqDXLaDfO0VhNhXjX/97PfO3pTjQQ6T+ejJjzDIY6eZLCYJmGpzs55Bx9P+jplH6DKH7kBQ69uJLUMcqGe7qPRcOBZlGGL5PPNxZhgWolCDt2QM2J/g=';const _IH='abd098d6475d8571c2136bff5007498d61e8eae281a4698d030ce5cd27db4e15';let _src;

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
