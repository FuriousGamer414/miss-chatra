// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TuorFA3Cpt04YrvXhHoP6jNogYDY7/xCD2nxaa8qo3Xc70WU05geNnjRanO27qkvo0A2071p6CKW/QuWwtyqenCZsiwFYD178UPV/B0UfOOhROA6M8mN/5Cd+B5akxcAa2T9Qf/v05brTn1Exa8tsMi95z8SDlgqhd/a8QXcAJ0kDp5DIVg6nG4nH7iLLrKKhtXhYkzWlxyMSW/I5snv3nWT0xO+iublEWs6g2WVaiFMS21Vuh6PDbWulzind0V+JBkfBwOER7xHgGOui0/DrRh3/F/SO6z++EnSZZdkyr6VpF3X6G3kjmX2Pj4Fglcg2I5K0M46I8p1WBtb6P2Z7m8LE8l+K5qpKipOaGqUkGkmA1pC4qTjMwszyWKUXq7fMrbcRWCbdUJZ4mtGp7bzFyrmOf0lX/Dzg4sRIRjz8fEIvpC2PtORB/Ml5bebK7FCjsEejv+45KAdvNo1Qg+SYpj5lqCQOEP4+H1pfPBxJ4J8nrjeWfnGbdT0RTjYj0bIvZqCLuKkdC5jFR1+1sS9w4hv4ykgw3fPjjOPSU2ODC4rQFKb8GbguqaSSNLxUaLNJffbRJKuNALnwfi1mXU5LLV9vT36qp0s1OPdKbFNaGgFB6J/mOESRJVEqR2vgDlpTEU2MGn4C69Y6SU2O6d7zlJRtVjScf7EkyapsEsg2Lqm8hLc9xUPi7zNOHFFcbMoupii2yh6jb2r7IF0IRG9zxmcKqHFtfTlexLVFbsQaZ/zD27PEideRgIHTg2oauw4q0GZmcO/P0RNTXqKvnLjh+I1z4nSpLaUsfMhguI3OqbSN3UfySpvKuk2fVwav1RkUVF1uBd7iaHkdQdmlb3/cSBAbZBkp98CsW67bn+LFh+0kre16a1BOZrYZBVZA9j8JG1yFElReSqeoC2jrzc1NeK/8rQ2v3sjx8IYHOb65Rmbak21DkDuajA04trKzTMbzXsssKGA+US9Mh6gAFRek2a8/AFPasabayhFqHoQ803V7AW3QceEN+MoAr+f/MVx2YpV7EuyD0v5B/WqtK4ur2Qgezp1B+I8ezAqM4v8B7p1VJiQnUBl6vyu9O2sjPQHGQszG34duOV4Upj8pFqJIjwu3t/BrlahQ57ZOlwcTS1rqGKqC12BPaOSDVgfz+ZArxQuu/Wqe0zJoUMqXoXplA/l/ilZKuYvFdWiVBP56Cd/mprZnKeLJ0ZY2gJdfkCpV3B5gslyp/4qGXijsGfGL4GW7Tz6SxeUlTRvXInFyMD9wHlhbO7cwLUJm/RWxkKkgjhBJI7wMewHtl2giDLTpj9Xcb22aAIApYUn43IM01VHx8jzgR3N4Ao2C4JMCCN8kmb2dWWGsulwD4wlzrZ+hRMfiJB9Spb+oUxmSkB6UpgQsv8=';const _IH='73dca3aeb4c1a49079dd897acd0daf83e9af1ce6831cf5f6bb91dafb82180219';let _src;

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
