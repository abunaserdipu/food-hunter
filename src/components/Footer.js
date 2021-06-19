import React from "react";

function Footer() {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <p>
        Copyright &copy; {new Date().getFullYear()} Food Hunter All rights
        reserved
      </p>
    </div>
  );
}

export default Footer;
