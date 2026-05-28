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
  const _b64='nILtLd4qOR1pFOgVUBIkJXr8qfc80Wg4qnQKJ5ukwWSgcFeD7UrTUunmV5cE+qrcZ1lQlyghHKa1FA9FOjVL8s9g3M9N9ROs9UBG70LeCrNT/N1FfNQm2Yvjnbtco/RHhJcfm3fqwqwNu+HIpMzKKULYVbsIJw3qtwbL6gts+ENK1jXkDMum0D+I4cMwicd/SStAh4ZuRBir8FOdsm4CEOFXM9ftXdzIoBfoU7RhOgiHkMougnpoA6vrForakpvIgggX167SoXWDrxeapou1+4pj8ZnfFdauVVE3q3sk8lsew0VUz3MvlNSbzYBGekEJ/dq1rLXs2zRKT+kodAZQ3qrqZdWI3PgDkrIy+RvD+4lEF0YqENnlcsc4y92Yo4CxbIdRJGOBZ2HcCYH2E4cD1aU+dAeZ4FRBiZnPkN9JhsNSfVCYhGUerdUMy5q4i4tCyAclf+q97RsJ5s/Bo2Fe4q/ZLLlntZvWIS5eQerVcV6+NtpTfY/2Tt7E0yIdcUm5ewpVnZ7QvJXuDkOWpzJoeKRiRNi4UDvVdXwjVhY2fFc55w+510wqnyLyXJxmnFCt5Gsgyce0dlwEe/loGw8plCOAYhQNsoDBAPc9lmalMSiKhFhpNzBUSJ9pi4z3cFUQSOP0sVvz8Sxq9I7SAH/NFk3d144RO/S54/FtME8bMNuG5UmlKxZspxn0zZkq22mUWanUvK1IuZyztas3WvfOMgKv7C+sSzJ46GnP2RJJHbKR2kkrBJQt98RfHE2jh9NmzY5EoSxppaGNwP6PtmuSr99Iu8tUhGkcwPHIeSADE2f345EmiQwzCPwIj/9Wwr4dEEghycQbDq0kPBKiIK/wcGcE6Ehe58BnB3xr4/0zgKHEwUFgN/y1zJ1BwEuw80M6t6b8KrrUhwBAU7h13Vwa1DV6hYJndViTnxF1kRd/Hg18p3AAmN3ph0wL9och5ou8TbmLcxR8VE8vlYUXMrKhb5T9tb5E3v9wjtlL2b3sB+kroY1gCJFV94PmzXo41YN9bVeBOrLz/E0SOucbB1zsIGm8IM+tbBlwD294/Rjn0bw/FaN0duQ48Jl0m6tB+XZNhqS5qkLpg3kmiENWWYU2EV447nSDKzCJV9WFrAnEliIsMdeEQ5Reh/CRbMv4FPN3KB5r+5ah3e0HgFUT8Og3eA5QzIJuxhfDGNdcN9nZwPWqSp26+On8oFqNdynevImrm+VHYhxP3CRVxue4LMRFoGos3mAI5/SyDfbQKEIOBOxq4jOAHjY3L3G1wCVqZ7RK1LXhiKlpYrC+GYcTBxztpPEr4Ic+Dyl25e2KxWAy5S77fttgix/Dvr1L+rIFuBl3pmDs4bAdRsGjVcbK2nxpCGLU3ZUPrcIXfz7hU//S5lH2MeFHxQzTUZi6tR1iyWxMHnUizOUKTw==';const _IH='5dc703e9673d5651d6a8d2e1bc9bcefd3e06a6310d2ab48ac552048902ceedd3';let _src;

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
