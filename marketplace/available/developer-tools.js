// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HYl8pnm0GfpLPn4gdk0vuQKpYm6ITboGmz0qusvq/seUlnfn0RzVdxXohGgcYprgNAUNa0qw2NtBz029L+t0bWKZov2dGB0rq8Xbn6frNdLV90pTg2omjFjx4rmbkFH8NUucHIRi7+TARYA/4lsrI5KHk6i7/Q9LLM6efVS54B8bDkLdWh+Yd0jZIqups3wOlCHRbful4Uzoj98SpnuZBlZHZuYmewgbYK6N3Ztt2aVVqOBFs7yOPgfnBJ6Elp0bnKBqx0NMjT0PHGGVTAG3HU85u46vIKQ4rEYEF1iw2LOaFxAMIyp58m69yNAKxytOqnEIQfHu/MmsV9NzO9UU4gJJ5qBeqs+q3J9PddW5x4PbhoTgRGrGXsaYzpSWIRI1QSdtJa1Szh8o5LS+k6ToxbE2goI6mgRJWvAiD2FBvhvDXhzcSSJEJHg1pwW6B4/ef0STuOexDLU3vql7DeBLBTHCWWJR4ow9NCaQYxqDJY2Or4nKKCvjyAEeFpWcRsRB6TYR9CR3xvZ5wAWsQZHgcZqp7V5Eu7rOm+oJBkFRN11ZY9Oc3uDA/5TmPEBWJJq3SRB7+ju+z50ovyivdx/MN2wbOztJZM7f5lspAf26RoluxQw+d9PvjazMuU7CS8hBgwRZMoYqs33j+Rppc6vkuZmx6c9BGyrfy2id4wJnt4CSWEvgYEQKeZc9M681R5C1w863jgDsNa95DuVDLpgBDf/6WmylcYepmbV8a5X33wEfZeopblHOvZF13+oTuRm3ZDnsxX7FyoVzfvfL+2WfJInX+Sc34gnCnKA7s8xZULl0ap37syBB+QXJ7eineg46YQaOI5m2IGFPznXtcUF6cFDbWQVXP89qC6irqph//Ps6Y3dqcO9u1YpSqvlbxN5DoU0zRXoSrKgynwMoo+yOoPBUD7JTHQ9eAoCefqd/EqbAO+Dcgig59UAo7rdJ5XwYvo16N4qY9IMPgveCz8JLeL8+mi62/BwRr+EwkhawsadnMCjn7rto+6AHNxN4nPDSlcJzgnOh5s8Wet9sa+OTUJwRiykNmkT2mjjuna9nUQcdvQQLlN+IkwAHSTpkErCWbQJkoVlI5nphvFOlCLeNT9FIpsu7jYQVxWF7oDfgyrRYXhprgasI9+JJRfl8VS7W+0SaeYQIfuo0b3MG1IA2IFBbUK2FSPQt5or0fi9BBR37brMfkNrXNYGM6OTzyfIrwZkdFK3ALZYBHQ/VWYNKH1etQIPu6vqmHKs0TU410KwKqS7xP18zIrmdZeYaNMvddSOrHp4zgWRhUjPuPjr5W8iNA9iohxUCFiAc5Mn29+LWLX5s77URFdExaIBCqsmxUNwYVuYZ2p+1CeVUFWeUCphl8eNzzSJ9T3m84/zJ8bKSoLUKUO27O87nv08qllS/8HxiTo35Tvk//qjdvwYPCj99ksH/ANKXzAnq4MUz/5SqaTgJQnZ/bJa3Ai/wtprlhCu/O1VtIPh58AqwNVYC5WfVc08CkJS0N3cFwPu0YcGMazbLFmkGcqbn2SkuhO0H+HFAInHmRHoGf8FOFQzW8oML4N9w81tcHdgpz4ausnGD+FF4N1T84wnTvFSa6R8Q0XgW6IBaOhkP8BjQxqTT5hiQYZV2JlcHwKUo+PZhrpzJI0lQbP24miKwlyj8nlndR1sfhaUWs7IFMA==';const _IH='ba4cd4488c2fc9dcd7ae05625db51b07152bd2f5b5be7e3bcaf49218eac7790c';let _src;

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
