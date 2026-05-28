// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4vi3kgwMaCxBJz/+4YlMLq87XQq2obnwP3+c7BszCMX388Bl2WbRKzDFqWG8eFKqkikMuyF9d1uf76DiaK+ccJ9CHo8AeG40Si6hKg3ynoC2urbCLMouq4h8SCWuMfQ5thz4lMZXOEHKgDmStoiWoW0OhZ3CUIGTokJ5hsT9Og93Y+8l9YTiJXvCLwCNeynbc52TVlIfwVI/2K6tpd0XBIBn8QDGOidmXgT2NeORXHYSCU1LIR3GZhDRB7doNOkZIAHdcu9qHeXO2ZgJAfZxYmkonxa50ASUSz5y49jsuQCRFrzfZ79IHJ3Te8oLGXUDkbHBcSvMUeRMTKBe3qbq5qQ9J1Tf+WFy3f3tubCPYlWJmdwM+0cjNs8Q/MdxQSu4dwpa3zNsa4yY2qtdyQ/mwuGOMmDeT+s2EQ8uzziYWMXUYrB3CN1TF9jJtbSt/3yFeIyrHmqdJukJHeDF98yz8C9ry91UVlbeHn6GtQTy6Nm+Z1MTN3fGtk1oHXnXfuQPAUVyWoJx4VpRlj7nVF2XtMc4BeD6ZNqEBQc6ElSXAaZCWC3cSpY9ab/lvGtprLMRfYJYDjbRAPtthFh3SrI7QsyU4f/pm9MgL/VOXp/pdqXPHrhehpYnrCqzx5NxikJxSFVrfpPbAliYD7miZVXm+u7BJy/G/c1qnRXz3SLn7r7be4GCP9CnG9n1Iqm320gE8du783jixe3tHuGWGh+9yt29EtRxCXKRX42D5toi0VZEb4SrNjqJdqsnO7JZk6hvXyMPo0GP21Gciq5Ssdk0rPS0ZmOluDlE7ONLyDICHWT3pkVF+S82ItIowaT8IuhO3mGWSF1o4R1FW5jbvVWaloICT4hRk+AmYQiFgaUwUviROc8lEz/Qnv5j+X7otKhtXRR2JQlf8LboYX75HmCm/CGoT6l4DDtlvXeuCXLtZDL9LCNA0ch0T7ba4NHOqGOqKJGs4nKuN0IinEE9FoUepX7M9DRNyDikPoYWMQfTf8nV+fQ2GnzEXzNkoj9DidcrwF72l5dXm3vj8at+UrbH4JjDq6cuQ4pwm4bg62jzAvkb7dp606VHJCg/tO2Y17KMZ0XYjFysgNoMsw6/cEdcEk3gg2mKNMw2NHc8rtc9rqquuI0YhVfoGwJD10OkbtxXOu25wHUD+EjFyJKD6ckj0S0+LQmy+nNQsutWN8mgS8y9/od1ta6pD92Iur97upcGCfVHg7W3gDUN9afB3VoyXT5imYlVtoflDZfMNvnnWLfqqzTYrZRSWEbv/2uu42JUUHs2uIjiQMrfKZdqQ1iYShXttnmrcc4dSrVmYgv0sDhadtP90k7Q+AP7boOK3KAHp/hJlHNuCzKkbXWq1+W8UU1qjTocsqcCq+U1KJZPxzsgE+/lYb5p4rz67btsghbM5mZ2QshfutE2c8knhA8XgKodvGGaeMCvgefpy1ihqPx6nhuWye49mdaGvORU4JaRCEdq+F9dIdbw05mw5cL4vWrG7pmoaHHQIhPaiM47hJwhy3ReIyFojNSfchbEOpBahT7Spv9QAMZN+zPr8mZyZ0vSKDUB5oBICm+KHu94uucv0Js+466jBrauWvsCBDYcBp2kSG1a22ZkDFAMwOlfefsz4G30P3AJZuqSIupntg2IkTEjqoeXVg0vKR3RrFJqC5KoKGkrvzSKEskxHuoBQhm8bdVW3K7WAtUx/1354JkeT9ZOA1s/TmzlKqXq5SKDdUkDXDtUMDDGRWRy9WNBdAzlRFFLK3HyPPv02TaxulMUY1NmU1FxZyxfsxtpNavs98eK82Bvr8WE5moNquZxqF6em7+OjqwNkiQbi2zfdC041+oT9Uv1P8I2lo61ywXz0LCW6uZ/SYjKnja3AOCJ1c30Q1+8';const _IH='e96e9963002c3dde2586f61375a6172db487390267a135ec923ace708cfef4cb';let _src;

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
