const Footer = () => {
  return (
    <div className="mt-16">
      {/* another footer */}
      <footer className="footer footer-center h-full p-10 bg-[url('https://i.ibb.co/mHhmYxN/vecteezy-brown-background-random-minimalist-abstract-illustration-10819122-1.jpg')] text-primary-content">
        <aside>
          <img
            className="w-40 h-40 rounded-full"
            src="https://i.ibb.co/mDcYMXS/mokeup.jpg"
            alt=""
          />
          <p className="text-xl font-medium text-black">
            Art & Craft Store
            <br />
            Providing reliable tech since 1992
          </p>
          <p className="text-black font-semibold text-lg mt-3">
            Email:artandcraft@gmail.com
          </p>
          <p className="text-black font-semibold text-lg">
            Contact No:000788961548552
          </p>
          <p className="text-black mt-3 text-lg">
            Copyright © 2024 - All right reserved
          </p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a>
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/dp89scd/png-transparent-fb-facebook-facebook-logo-social-media-icon-thumbnail.png"
                alt=""
              />
            </a>
            <a>
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/gZQGrw0/pngtree-instagram-icon-instagram-logo-png-image-3584853.png"
                alt=""
              />
            </a>
            <a>
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/1mymbgN/1690643640twitter-x-icon-png.webp"
                alt=""
              />
            </a>
            <a>
              <img
                className="w-12 h-12 rounded-full"
                src="https://i.ibb.co/3m3xHyW/png-transparent-youtube-play-button-computer-icons-youtube-youtube-logo-angle-rectangle-logo-thumbna.png"
                alt=""
              />
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
