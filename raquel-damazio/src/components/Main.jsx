import React from 'react'

export default function Main() {
  const Mensagem = () => {
    setTimeout(() => {
      alert("Usuario não encontrado");
    }, 1000);
    };
  return (
    <main>
<section>
<div class="login-container">
<h2>Login</h2>
<form action="#">
<input type="text" name="username" placeholder="Username" required></input>
<input type="password" name="password" placeholder="Password" required></input>
<button onClick={() => {Mensagem();}}>Entrar</button>
</form>
</div>
</section>
    </main>
  )
}
