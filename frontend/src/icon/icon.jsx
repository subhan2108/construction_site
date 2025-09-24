function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="darkorange"
      width="20"
      height="20"
      viewBox="0 0 24 24"
    >
      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.21 1.11l-2.26 2.26z" />
    </svg>
  );
}

function Contact() {
  return (
    <div>
      <p>
        <PhoneIcon /> <a href="tel:+1234567890">+1 234 567 890</a>
      </p>
      <p>
        <PhoneIcon /> <a href="tel:+0987654321">+0 987 654 321</a>
      </p>
    </div>
  );
}
