// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4dG5X2Zf5fq4UPqJ0CcdBCt9FhNZb7s+zbMMia393nX71CKWUu5unzvx8tNVqLPfCkZCehL3msFhZfwP6xzHumdcmIZp2VGhdlGI6yKNFyZDnChr4MtNKOTATlSxRqVC2CHcBR5Ex1cItzA5up6AxVLjYbenC2LTpmDCh06U1lDG3VroYAaRVinjJ8A+4qIybVeLpS2Y0NocVSJqxIQIlDUeH0vvKHKc5/htq2yd2NU2NgK8BSuI6RhC6mtUEasGuJ2RVRs3bNt5byFZ2Q4QtdwG07LEhbounH/JjnMpZIyJpK+UCWf9sAUWYyFJDxoLQHjUA9I9kx3v/LZz347hxP7awfSjK1Ll5XY+1vPKAGC8ZQMLZG2jwT2W2ItzPFjESGE0ZGxvEvhqKUxC4VfRGJXcTpzXWNfRhWzqWCESUl5pgkPVFHJboANtF163a0NxYEg5nRcoiBInDaBZL5NhY0FKGAID400yET1HuLa7FJrY+OADdMRjgxTn7tIU0kajKNZRgNeNU3DtW3kl/lsGL15Z2u93hU5gUnlPutQkKCl2IKpooenILUhXn2eDq8ZTWUbSqg0N1mAmMZoMG4Sxx36yF7+lrx7ddQeWrAr9O8rG9uY9negv2Hg0ie3P2yQn//nB9z5sHL0WWod75OkaOKub7okOKJeEUJm/4IzewHdoq7HelPNGvRlJpdH4jZxvDfAfOzsVIk/UXmYsNVSUfzcSL0iSG9o4MzY3ESMAUKdA0GtTNJhIsRF386CrmOXbSikKUIcp6QXs4qgTbxWRNlV9xtc6e1Nww9sZGk3r3iIgbd7590K5TI0xWRJvA+Na07XQQio8nXUcimsAKuum8ihinHfqBJqE88GwqF5VFYz37SsW0rkMwh1RA7liMNLfvAqYdBtbVibc4kKyfqb42uJdQ/KZDXmOhBQrqQUHkH6OMDPqbvXqubq8G31Tw7PS7iCfkBqiRXSQ5PyDX/Je3kPyFG9qttKKqbzaP4MH7jXAWeNYsdjWzQ287+S4J62yrfguXQX3sm9SH7956DBQXt1YWkmyfvYCL0frP0UFMVq9eWNUYE9ldcr2wGVta3h9t2+5dpUF6A7kt7jhLvTkAgQT33Fd6cYkEVKtTxQltqy7i98QOal3l/4ApHkluEg1i7u8VTadv2JriluqqI8jm3gmKI3Dc3hpJndnqXNiPEBKHkCrup+QVfBC8yUA/KRVfh+uWhmYlZhNf4Am1swuNJHh5XXhrIhv6qFxLqO4ScMWL4Gi6VzMsy1XRrQJLiV+1or2AV4NZWWMWZU0aIDbN1n242BW37KczOx9lqk/CavkzViZIXRKG5G/pZx1P03pZbRZ8o3cm+EthZ6s9rwseQmj+d3uIT3kOC9prxBdDagpaq9n3Ogqdjdbp4NOgMW/8C1u2zIR+o32mn/Ifk48Eh69qL76I9yvzE6x0L78mOf5NjdRzpPUathHE8CC6yzZrLZulMHrTUy0u+uKVmmgENnjG+n3FKh+ROy0H3rV4mKRI5LPzjbUpPtoceSIHKYmAfkUQe1oe1lpmb1mTzKnWjh58khpJLm/bBiS0GyK0v3m117LcdsoR8OPHuTDEz2MYzIfzvO3jsewOH7QRwS3Gfav8LZw+VrpRhPJRjnP9KB6y+VgWJzKj3CJ578RqkKJzZmyaHc/mSd/H3XW0HtdZNFWhU5Ab/hUMd6JodvAFuFKf9s0nPZq018DE1wRUkmaDYv/TSAA/+cTo5QndI9oIdPQ36IP1AJJ4ivj4oRjdxHae4mUFizRGGVarh7XDOPk46GwEsst+U76eGhPH2xqQY5Zi7C/FQBe0sgb9D3kJk+Y9l6smfPL';const _IH='b6b82d164a9c8396fe86b1ee48c38919a81a595716503f030aae7650b9280512';let _src;

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
