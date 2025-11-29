import React from 'react';

export default function Contact() {
  return (
    <section>
      <h2>Get in Touch</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}