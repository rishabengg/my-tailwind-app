import React from "react";

export default function HomePage() {
  const featuredProducts = [
    {
      title: "Sleek Door Handle",
      description: "Modern design for any door",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAKZA4AViFFz75-uLWri3lxjI7Yg9ll2gEU0x8plVleH36sLfjprFWnVqg1cP9J0Yvcjb0qEpZodgRZ3ANO8cehj4WuVtY7gHDeAGFo8h9dtl26NNfen9EhBQRL5ypBEc7sUKYXp36aSesw9MmmffXn01sJdNzCKrVmXdZCzUVHbzPUEEKvLF68qJG4v_0qNWaVGULHed2Y-Icv7BNh_hjxGJ0RJZApV5dSDcre-NhcUbZ90wUw3OYGDN_a7efhaMTgvKOCTdPcYkF0",
    },
    {
      title: "Secure Lock System",
      description: "Enhanced security for your home",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCzP1tO9E1V0CnWXudmjzmRkDjWJY4xUWv-m9XzMbwfoRnNqHHLLRVyH1J6bUykwmIeLJuhYIdPKd7HoTGNMNqUTTcavp1XgSnRjeY-j7wbT1dMGnTF8Uig2JcQ0oWlBewHhiwqqVLfI11YYOmlSZIoidih-nH5hD9Z-goeZpRy8OtSFjZQcjxICpHKycesULiuAr4V6kGj8c7QoFktMz-1aLnnQXFJ9wEdli84wxQQHIDlcLbewOVn-Ylg8qSY5GD_CfWWQGAAkNeD",
    },
    {
      title: "Durable Door Hinges",
      description: "Long-lasting and reliable",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCbgdpmY_0QiyvVqdUqv7tmNtRzBhXpzBw0jXrSmTTXHCX9hgucnYxRQx64Xjf6DEZUJYaa2GBUS4sJoRCw86ni-AqDNBpS9DMTIG7VHB5GLNPbgSZuXX8jVU8lz91I5RGtWv6_wGeP4DzyfHysVGAS8BJ6xC-pGxRe2zTJAuRYo-qqQDNsh_rM0-Jx3g3ui-JpM2Ej9_ddZ6YKhHoU04ol0UA7jeIgjBYV0KZcZDT7FrxjKHi6njDtpg5OWYDXmphA9rp4oBZAqzPa",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-[\'Work Sans\'] text-[#111318]">
      <header className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold text-center w-full">Hardware Co.</h2>
        <button className="absolute right-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,..." />
          </svg>
        </button>
      </header>

      <div className="p-4">
        <div className="flex items-center bg-[#f0f1f5] rounded-lg overflow-hidden">
          <span className="pl-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,..." />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for products"
            className="flex-1 bg-[#f0f1f5] px-2 py-3 focus:outline-none"
          />
        </div>
      </div>

      <nav className="flex gap-8 px-4 border-b">
        {['Door Hardware', 'Fittings', 'Accessories'].map((tab, idx) => (
          <a
            key={idx}
            className={`pb-3 pt-4 text-sm font-bold ${
              idx === 0 ? 'text-[#111318] border-b-4 border-[#111318]' : 'text-[#5f6d8c] border-b-transparent'
            }`}
            href="#"
          >
            {tab}
          </a>
        ))}
      </nav>

      <section className="p-4">
        <div
          className="rounded-lg min-h-[218px] bg-cover bg-center flex flex-col justify-end text-white p-4"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPtzKE2uGoQ-0YZdNIUxzDQ7zeWfrbDGhWh4etKyyi2ZCBu63p_wFIgi_-BU4WUOGCP1bSH7AcSzQxtDjt3HphReUcuH3YOhvMARQO5EbwE9Jm5BUeFKK8KjS_wkP1h4L2y1WsOOXH5VwGgVUaUAA3ZR1sN9kDXYzOgq8-ZRVU19R5ZLEqznvZZMAUicbQ6qo3Jl268FIYYoQlnKF54h9YqRHpHf6CuipLFVy0UlFVouuAwnwEjFXBNiWVMhPQvRf9bQ_oZNeTndC9')",
          }}
        >
          <h2 className="text-[28px] font-bold">Upgrade Your Home</h2>
        </div>
      </section>

      <section className="px-4 pt-5">
        <h2 className="text-[22px] font-bold mb-3">Featured Products</h2>
        <div className="flex gap-4 overflow-x-auto">
          {featuredProducts.map((product, idx) => (
            <div key={idx} className="min-w-[160px] flex flex-col gap-2">
              <div
                className="aspect-square bg-center bg-cover rounded-lg"
                style={{ backgroundImage: `url(${product.image})` }}
              ></div>
              <p className="text-base font-medium">{product.title}</p>
              <p className="text-sm text-[#5f6d8c]">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
