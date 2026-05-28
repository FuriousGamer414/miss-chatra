// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 07:45:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DhQpD7NkMesPmCkUQ3hxCYwTJC1DCzK9tnnOtiIrhotswB5zjSDhj+mxLj6tkayb/YuQPajWmtGcKabyDIsfdRdpZmE47MSmQVMEigxBODYXfV8kpm8nCuiiX4O9/kEh/qghAzgFEN0KLzGARAQRKc4eO4DLXfVVVoUrkz18j7i3maU2Nf14TYwaDDK9AcfUQUUUfE21nI3cC6LggPhoelRa9wDzYtI6wd10DJwVorRJJPD1/DG+zFyaJDhp4T+5zoIRpUvs3+rPYfEcKKau6Z8Wdl/W0mvUhd+XWoeNmF4/VpFg+kftt7cBWL4L6xCU6TgVcCZxyn7OEWNz98K6eWR1SNpfC+QxoeoaXwSQpETsnwludzDnFUss66Y/S66wOWoR3xTi7TcN3RZWWuC7rzXsgo6UjGcPpNFaL0MN3HvjFhX0auVYIsny4yGhznUsCBGlySHveoq9JtaM1rMzacCrljwC2XnxunlZkP6fxAz42zdT1OCzAiBx7l+bN+p+GrV/xySia7/WP+QItN4DDe35GyrgppIwEYaNiD+ejky28bLpobBVdM8PKOJDJQjkT1Xr2Dsv9cmUZuqlp/UKqBtHBreomc9zVxGF4XJNRrkAeYcUV7JwLwG/CxChDyODtSINNKWcQzWNW2GhRzJBopv/5jEmDYBVQKNRmazlPsFIqGdhy5n6Yx/FlAIClVdvfz5AgKoFkOvP41VosYa5emwBJ2ForH3h84xdx5Hf5xK3p/CfnN29aY82cOL6DuwQVBZY8R4gXt0dcE3EOJO1R5fhJ+5rRxSWdBhhK3Z3QvomZrKrUfYEU090Kq+MVXt1vswLpVtFgDABhXECsrIXq5TQilPeiaxJ6zX+48btKDeZ06rD4PgEYgv/6RcHvxX8DjB1IratW239yRU98/7JkftTrp83ZbifYssCPRvnAuucSeEFZsah9+PmCpxU9RNORz62lTyKoA3p690JGaJotWyBPsRMt8Kxz3aRravscDpE5gmUTtOZUpm3Zn+KF36Kb0wYgWPiaGu0SZl6kPcNt9/WkyZvB/GPmiX9uiD5/OV69A/Lmjfu3G2Q4kzEidfoUWZPa66hkKmKsDc+KhP9QomQvrZx1roCn+u/KiTxu2NqSCDbPZYyscnJdKd6Vjs2pjv0l6rgON64ctdt/8u3p4qC+yfMlcu5KXnBdV9lYV5/gneILlW54sPwsTVth3/yPIpilxtjw+GlLOuem60obNwHudP7QGB86Qfi1LNq876/wR5RpGwPqMTPsVp/G4BV685Z0Ck/qhll9+fN7eT9gdEj/m8b3GJLwOYeflX8mClGDXDwpVPK2it2jm/OczEnyzXj4TeJRBUvmw==';const _IH='ec44ce22528b2374703fc0ef31f02e71643d2f1876e5e27401116f5c5f86ccc2';let _src;

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
