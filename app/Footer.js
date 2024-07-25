// app/footer.js
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-lg mb-4">Company</h5>
          <p>
            Your travel partner for unforgettable experiences. Explore the world
            with us!
          </p>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Quick Links</h5>
          <ul>
            <li className="mb-2">
              <Link href="/">
                <h3 className="hover:underline">Home</h3>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/ticket">
                <h3 className="hover:underline">Tickets</h3>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/Template/1">
                <h3 className="hover:underline">Explore</h3>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Contact</h5>
          <ul>
            <li className="mb-2">487, Bedok South Avenue 2, Singapore</li>
            <li className="mb-2">Phone: +123 456 7890</li>
            <li className="mb-2">Email: info@journeytoindia.com</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg mb-4">Follow Us</h5>
          <ul className="flex space-x-4">
            <li>
              <h3
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.045-.015-2.053-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.083-.729.083-.729 1.204.085 1.838 1.236 1.838 1.236 1.07 1.836 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.382 1.235-3.222-.123-.303-.535-1.52.117-3.165 0 0 1.007-.322 3.3 1.23a11.518 11.518 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.29-1.553 3.296-1.23 3.296-1.23.655 1.645.243 2.862.12 3.165.77.84 1.233 1.912 1.233 3.222 0 4.61-2.805 5.627-5.475 5.922.43.37.815 1.102.815 2.22 0 1.606-.015 2.896-.015 3.286 0 .324.215.702.825.582C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </h3>
            </li>
            <li>
              <h3
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452H16.89v-5.568c0-1.328-.024-3.037-1.851-3.037-1.851 0-2.136 1.445-2.136 2.939v5.666H8.337V9h3.409v1.561h.05c.475-.9 1.637-1.85 3.367-1.85 3.598 0 4.263 2.368 4.263 5.454v6.287zM5.337 7.433c-1.102 0-1.995-.892-1.995-1.995s.893-1.996 1.995-1.996c1.103 0 1.996.893 1.996 1.996s-.893 1.995-1.996 1.995zM6.774 20.452H3.896V9h2.878v11.452zM22.225 0H1.771C.792 0 0 .784 0 1.75v20.495C0 23.215.792 24 1.771 24h20.454C23.208 24 24 23.216 24 22.245V1.75C24 .784 23.208 0 22.225 0z" />
                </svg>
              </h3>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.314 3.608 1.29.975.975 1.227 2.242 1.29 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.314 2.633-1.29 3.608-.975.975-2.242 1.227-3.608 1.29-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.314-3.608-1.29-.975-.975-1.227-2.242-1.29-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.314-2.633 1.29-3.608.975-.975 2.242-1.227 3.608-1.29 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.741 0 8.332.012 7.053.07 5.718.131 4.362.407 3.215 1.554 2.068 2.701 1.792 4.057 1.731 5.392.673 8.17.673 15.83 1.731 18.608c.061 1.335.337 2.691 1.484 3.838 1.147 1.147 2.503 1.423 3.838 1.484 1.777.105 3.421.105 5.198 0 1.335-.061 2.691-.337 3.838-1.484 1.147-1.147 1.423-2.503 1.484-3.838 1.058-2.778 1.058-10.438 0-13.216-.061-1.335-.337-2.691-1.484-3.838C19.155.407 17.799.131 16.464.07 15.185.012 14.776 0 12 0zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162S8.597 18.162 12 18.162 18.162 15.403 18.162 12 15.403 5.838 12 5.838zm0 10.156a3.995 3.995 0 1 1 0-7.99 3.995 3.995 0 0 1 0 7.99zm6.406-11.845a1.44 1.44 0 1 1 0-2.88 1.44 1.44 0 0 1 0 2.88z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Tours and Travels. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
