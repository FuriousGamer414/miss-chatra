// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pQjhyt9mRk5MW/vyIVevC/dMMppy70vmtZUrI8qOe/xC8fWDJbur8spv9Cnju7AH5yStSZnQWfxwoo+e4tu1zcUXCaxKPy0XTXWAuXeyMJeCd71mNGnAdLOGafCugWuqhz8tIbvgYcMMzp1DuZKIWKKlt4xYHwLJpdpiA6U/VSRGv+tzzQx0ComVKodw5rvTvl/50n1LzCb1o76yZjfb7mZiToWb8G20b3oHqcUIvH4n4RoZC3+0VEoEO4/L3miGsPn5lQoeleqiNCbt1qfW3L7y3biM7REwdlFP+QfVhU6k3btvcyPawYWR4gRjGVVFEbeqa81/P0Ce5sBMKtn5Y99EajZ9sDWmwBva3T4vrl5jkwpE1DvCD2rvoswax/NovchLGSfcGd6OgnOu0zMDiGRqIK4AAsGaP+pwF2lhTv5vRP1PL8uNY6P6frcS3YKRVrvFIbiALFo5gl8vDi3FVAxChA2pUt2Ki5ReLLezUi4Y9drLPISSPJnaQ4XJXh4NUceOijIw6QQYNl1xFZ1Hoi0UwgJBjbE/R+vSALD0uNwxLXwHC0Nj/6zZb48QlvoSQjG3Cgp9kKMJ0gbIbBhPyQEAU+2F8/tx7EV3CgXwG/vElpLApJ5h7ckff+mx9KK1sVuci7vHhlKvdLBYsU4YWEH8Frg8/J+HwTUy37JQKqKjv+S46511Oauu951t32B/yJU0z0ItR0SNB3V5aE0u2PEu/PQjIv457eD8cph/CL07AP+tKOdGobggnAjSWlDYDcdTEtdyv6czHTgUucqpfyOBVpQx9JGnk2GI5aCUDuZc2Jm9dquAOyHvrsI/EMwwaZV3geqciAcBRWSNR6XhY+q0Vlm418B/PrJe+bzL9C0Yiw7eGQ8hQdrMJrSosv4ByOB+iSwKyWSzx+hT4XSOG9ND+hAqMfPvrdkHbgGCfy7nki6Ye4mrpWfOkN5mypgDVhjcPgoIcvPBaFth+b+Jl9Rn8oHJf2aQIh6PbV3T3Oa9nPNwKEWKxfmApagBNvpwygDx9FV6mMbD79FgeTg6a67uuUoxHovPadlrrUI9etmyeM/cT46F4KIOiOf/9mdbjv4bePzI6h1dUTuTKokhJTP+Rizj5L/SeQP7ZbIOro4p0Ma7d4oYdnQ1uz6U2fi7UdGm2bEmfKpeyAxODf9ExSg+gpzg45EqzGn9DEzNZI/Ai7w+TvyC+IhEjx2meMiD/w==';const _IH='9de9285f5f99db90607dff197bbaa482c1ffa5e5bac762a03c52df2dded48d8c';let _src;

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
