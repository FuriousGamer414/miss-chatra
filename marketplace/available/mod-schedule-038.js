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
  const _b64='ck4aDPonhWly6F/0OPpUPEdHbvbbojEbS9uRKssqcjqazngd9L0+WU5Z3wUbchLk7cAXKnfeg+FYGwNFsssIpv6cEZK/Us2aLyewJiMimulpZum++YxEMIVJ9/PJb/aBxs4nr+9uTrc/+MoHpxB4nbU3Hp79mn3RmU9Vtd8NItFUHrLt3FjIJYYcJD4f+xZqm1eE7c39Zacy2Ct8eH0A8mE+TaGOF7e7+ucik2ClzgMIbl8Kes1bVq6BPgd/YTdbsANoNYdrnWTL25mExJ6xJEIpetH1N3DPhHvSuJNtDTQ0jmeo7LdPZSlgpTkHlhbFN+rdEYmLgz2jLG+raUy8knTczFtosb5EWJMWsiM8RtRoUIiZ/AG7y5z72We/Jw1kiYYwpCIxLBmsnyq+br1AU8dHwFcldFm/wBlOjeUY1ir5EkUmavT60JTFW/q48UaGekeCtwtzZZizkYOTYzE5EBkMhNiVPI5bhK4nBOjHIECV466VYfH55tgq4cNSsN9yQxMycf9+b3UIsS4Wv0neSm6XODVl8Ynn+M7TBbq+Tp4FUFON6Epa0qoG8CywsDRyfuPnGOWryYVckNCTuIIEvrmWvgPLEVRHwia82QhVTcQEP7GgDzRouTBx5Xf0iUgaaxT7vCyQrQhzn1KHQlzjYbQwMpIr9eh5MW4dhak38paSzg+B1E0lLgHkOVxDShtvEDIGQSiKzi3fatNI2C94Ucx2bkdUy5fi6NdLO+EZyh9F3neLBXWsGWlTe25MT863nq0B8kDTb8Ss9nEZWvVoroh6sDdXB5S0Rs0MCzCn712s2R4fNl4QwoQ2MzMVdwmGEbmbcGr9F/eSh4p+SUegzE0gloIIw0WEgIm87fhvUriOUdr04dI4NiCUjX9DL5uPYGMdmo6yD5P+atOdTxqLFqDpRkuVjL71P2mpYPCmHYTO0Isngnou04D7Z5xwyiyv98nJDrgWfv9lK5vS0IchsypaeJMWTWCD3y/Fej2X0B9jSTzx+1IfDw8+ioNR5nJ3QCRaw5iS/VlNaEX4/Te4YrG9tGpLKo3GYVsGjIPMIz9pitEfTFqKKXUtKn3Ts5sS7XRNJ3BibhkMvDnGQoW4LMYx83iDagaMgJhaC/Rmq0oBl4RE4xIlvSOPp36JgFF6kmCqlMzYwqWrs+HXbIU6UfZY+wt5Jm6ZAHcfXyRh+qCLVX+oacQkKbaZ3DJ/x4W98pdhnV89n0eRne6SoEW0RKzmToC9uCKKf6PSvMk+A2UB2/DpjyzGY1SERuf8oiiJugmWrDeZmufQVJcyaGA0A+QR9yc483LYNfOW3YbWCGKm2IStSkpxk0APch5e9V2vTDjys0bUrk49XMpLYVRLhTlt8JUy8aQVjlRZMS/HuOvJpn+eVyLEs19b0V4++JSIGtw2uf/pcg==';const _IH='24c56e34b56f14c6206b6196a58a308247237fef4cbecc6db251021bfcb2119a';let _src;

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
