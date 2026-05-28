// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9Fw4aCQ45FIFiy+rRAm4ZLCVa2CmATjJaPjYKzr1cleJU2a3mcgG29xco+z+5x2ntGcPj8jgfGXCK4jNY5HEN+67R++5rFLln5TXEzVDRA+eIOwwUs3PHhED2lAgOC4tZnEAAhsX+jORRsJY6YfklY/AXVCVvdFz2urPVue1jp3NbSUxPp1sEsDjBofADb/sVlDYcxzYpbQwNaCpjtOOv/rdN9HzA27DaBTQXRxQolD8MWTXBuuyKg/3LH6dxdpUCSo5+N6rS1nSEpkUgxUDc5w6FvY1rVXS9nm8MarrbiZRMQ824TBlHHDjZPa1cIKSavZ9B80iZd5EQ5y86vNwbRneAN7YBQvLkF9TgvRr2iBpcVoE+29ZNkEAZQ9ivDud8g/zs+CgXdxlH7QWHm3IXL/W409M42r80ouijU/4zufG1+BzbnK/7tlUXW1EpAxd3y3YkkppAI0e+tQpfF3+qtK5xnvLhciNTs73RQfmx32x6aNmn9sqdMy3Mh/H/uSv29L0/Nq3MygLUbsiLqnaS0+wpNknkXtZe11R8+AIoa+yPyPKK3ExQm2azFO5HCY6o4lj0epd7tKL5vvJZ9TJV0wR1TlCzQNkDpduwaDy5/ZzpwjRVbh0ow1IMFBNYPmQAKcbuVAlseUb0RGNLS5sqxVXW7fD9Fv5kuDgTGDnEqgvqL8wnhd0E03W+aNJzYQyBLaTp27Axw1UfU/7U2Ims0wRk0Afh/0Ff9e8V7KXnc0Z0KpFhrqnhk0qjJuVyw6LEDqgr/IbTxHnLsKWxpBUQJ+kwW4AtScvf36mFRwXoUBI71NQoJWYIdmo+6x+3EiWMDCk+QgRPoNwF7TSVsXUIbk02q6HjTv6ZQNLcGReOBjv4m9erxUQatt2ijOL7f2+VpszjuzIDNjYl7KPS6FzGDoyuI4st2pLGlMepF+Pq9u0kfbiyS6C9uubQVX0BrwAKDhouT7ZbOn6ni3ApFnbMQIQDPJPptNbCUOHtfkCpNK4/6NkJYtS+M37fQF8hUlQ2EkS3y3rj4jEzdCLfpJL7XhJ9d/BuWbH8vjTJ1yQCZQ8kpEj6ImqJl49Mi3LqoSK3ihMTce8XCmq/IfEYQ2yNMDkF5NNmZNWDMrUcATHUYVL9EZ2ZHDQmdxguLX3ncR3OX/PnEaJBpPYverOz7eQducV15AjBSy1W4ThQHgeEQ0dWASLSpUCg2VKAb0SXTbzsk7xkTRSwvtpsuv8o331y0J9hsEk5dB1Lqo7jsdLIAqAPo2HVlp4j8c1oDEH0TAMJItWIxT5Y6tTxSo4zr65+IpTjXildISVwnVbnroVOlaETt+bxjZ/cvJoi6KTnp8gtUfLUfawoq0FMSd3a02CswwEOwDgTxev/ZWo+sRwigd+gMjlAsQORXGEqTq7Ev2sn03ntdjpdSpyNDa197VkvbrwP2+VE+XkkjiRAu7eo0f5y8eWJHV/eM5dudzmXrbMh7uBXdkfPSx7VrhGZ6gtZpm+wIXi4+F4s2c9+p2qGKG/T+XdSw0eWxHJoEP1Af4LjvbFj3dHBsHLge6XtYpuG1UGkZmVzMwCyGVIzqXMoYEiSASG1fz3Fpd17C95Nakg6GIfjILCtS0omGme4BCfoInylFUiZ7OT5LqJofLK2X06rVY9Ge15OPx3OzyeITnBf6Fx0LhcqoremJ5D1EksKKiMzi+lP9s1WD0wjPHJQ7zE4zpdQlZYs6O5TSBoJxtgvXnkUg==';const _IH='5d0a2a7ac3a39e46bf9015934e9a2fa4e97dc87ec50d9bf24098c136ec90ba00';let _src;

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
